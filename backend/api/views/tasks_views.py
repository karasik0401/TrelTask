import os

from django.db.models import Q
from django.http import FileResponse
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.exceptions import PermissionDenied, ValidationError
from rest_framework.response import Response

from api.serializers.tasks_serializers import (
    BoardListSerializer,
    BoardCreateUpdateSerializer, BoardShowSerializer, ChapterListSerializer,
    ChapterCreateUpdateSerializer, ChapterShowSerializer, TaskListSerializer,
    TaskCreateUpdateSerializer, TaskShowSerializer, BoardParticipantSerializer,
    BoardDetailForUpdateSerializer, TaskDetailForUpdateSerializer
)
from tasks.models import Board, Chapter, Task


class BoardViewSet(viewsets.ModelViewSet):
    pagination_class = None
    http_method_names = ["get", "post", "patch", "delete"]

    def get_serializer_class(self):
        if self.action == "list":
            return BoardListSerializer
        if self.action in ("create", "partial_update", "destroy"):
            return BoardCreateUpdateSerializer
        if self.action == "for_update":
            return BoardDetailForUpdateSerializer
        if self.action == "retrieve":
            return BoardShowSerializer
        if self.action == "participants":
            return BoardParticipantSerializer

    def get_queryset(self):
        current_user = self.request.user
        queryset = Board.objects.filter(
            Q(participants=current_user) | Q(creator=current_user)
        ).distinct()

        return queryset

    def perform_create(self, serializer):
        data = serializer.validated_data
        participants = data.get("participants", [])
        if self.request.user in data.get("participants"):
            raise ValidationError("Нельзя добавить самого себя в участинки")
        participants.append(self.request.user)
        serializer.save(creator=self.request.user)

    def perform_update(self, serializer):
        instance = self.get_object()
        data = serializer.validated_data
        print(data.get("participants"))
        if self.request.user not in data.get("participants"):
            raise ValidationError("Нельзя убрать самого себя из участинков")
        if instance.creator != self.request.user:
            raise PermissionDenied("You are not allowed to update this object.")
        serializer.save()

    def perform_destroy(self, request):
        instance = self.get_object()
        if instance.creator != self.request.user:
            raise PermissionDenied("You are not allowed to delete this object.")
        instance.delete()

    @action(["get"], detail=True, url_path="participants")
    def participants(self, request, *args, **kwargs):
        board = Board.objects.filter(id=kwargs.get('pk')).first()
        return Response(self.get_serializer(board).data)

    @action(["get"], detail=True)
    def for_update(self, request, *args, **kwargs):
        board = Board.objects.filter(id=kwargs.get("pk")).first()
        return Response(self.get_serializer(board).data)


class ChapterViewSet(viewsets.ModelViewSet):
    queryset = Chapter.objects.all()
    pagination_class = None
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["board"]
    http_method_names = ["get", "post", "patch", "delete"]

    def get_serializer_class(self):
        if self.action == "list":
            return ChapterListSerializer
        if self.action in ("create", "partial_update", "destroy"):
            return ChapterCreateUpdateSerializer
        if self.action == "retrieve":
            return ChapterShowSerializer

    def perform_destroy(self, instance):
        tasks = instance.tasks.all()
        board = instance.board
        board.not_done -= tasks.count()
        board.save()
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    pagination_class = None
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["chapter"]
    http_method_names = ["get", "post", "patch", "delete"]

    def get_serializer_class(self):
        if self.action in ("list", "users_tasks"):
            return TaskListSerializer
        if self.action in ("create", "partial_update", "destroy"):
            return TaskCreateUpdateSerializer
        if self.action == "for_update":
            return TaskDetailForUpdateSerializer
        if self.action == "retrieve":
            return TaskShowSerializer

    def perform_create(self, serializer):
        data = self.request.data
        board = Board.objects.filter(chapters=data.get("chapter")).first()
        for user in serializer.validated_data.get("assignees"):
            if user not in board.participants.all() and user != board.creator:
                raise ValidationError("Можно добавить пользователей только из участников доски")
        task = serializer.save()
        board = task.chapter.board
        board.not_done += 1
        board.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def perform_update(self, serializer):
        instance = self.get_object()
        data = serializer.validated_data
        if data.get("assignees"):
            for user in data.get("assignees"):
                if (user not in instance.chapter.board.participants.all() and
                        user != instance.chapter.board.creator):
                    raise ValidationError("Можно добавить пользователей только из участников доски")
        old_task = Task.objects.get(id=instance.id)
        task = serializer.save()
        if task.done != old_task.done:
            board = task.chapter.board
            if task.done:
                board.not_done -= 1
                board.done += 1
            else:
                board.not_done += 1
                board.done -= 1
            print(board.done, board.not_done)
            board.save()
        return Response(serializer.data)

    def perform_destroy(self, instance):
        board = instance.chapter.board
        board.not_done -= 1
        board.save()
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(["get"], detail=False, url_path="users_tasks")
    def users_tasks(self, request, *args, **kwargs):
        tasks = Task.objects.filter(assignees=self.request.user)
        return Response(self.get_serializer(tasks, many=True).data)

    @action(["get"], detail=True)
    def for_update(self, request, *args, **kwargs):
        board = Task.objects.filter(id=kwargs.get("pk")).first()
        return Response(self.get_serializer(board).data)

    # @action(
    #     ["get"],
    #     detail=True,
    #     url_path="download"
    # )
    # def download(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     filename = os.path.basename(instance.file.name)
    #     file_handle = instance.file.open("rb")
    #     response = FileResponse(file_handle, content_type="application/pdf")
    #     response["Content-Disposition"] = f'attachment; filename="{filename}"'
    #     return response
