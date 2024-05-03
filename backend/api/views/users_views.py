from django.db.models import Case, When, Value
from django.forms import BooleanField
from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from djoser.views import UserViewSet
from rest_framework import viewsets, mixins, status
from rest_framework.decorators import action
from rest_framework.exceptions import ValidationError
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response

from api.serializers.users_serializers import (
    CustomUserCreateSerializer, CustomUserSerializer, FollowSerializer,
    FollowPostDeleteSerializer,
)
from users.models import Follow, CustomUser


class CustomUserViewSet(UserViewSet):
    pagination_class = None
    filter_backends = [DjangoFilterBackend]

    def get_queryset(self):
        return CustomUser.objects.exclude(id=self.request.user.id)

    def get_serializer_class(self):
        if self.action == 'create':
            return CustomUserCreateSerializer
        return CustomUserSerializer


class GetDestroyPostViewSet(mixins.CreateModelMixin, mixins.ListModelMixin,
                        mixins.DestroyModelMixin,
                        viewsets.GenericViewSet):
    pass


class FollowViewSet(GetDestroyPostViewSet):

    def get_serializer_class(self):
        if self.action in ('retrieve', 'list'):
            return FollowSerializer
        return FollowPostDeleteSerializer

    def perform_create(self, serializer):
        if Follow.objects.filter(
            user=self.request.user, following=self.request.data.get("following")
        ).exists():
            raise ValidationError("Вы уже подписаны на пользователя")
        serializer.save(user=self.request.user)

    def get_queryset(self):
        return self.request.user.follower.all()

    @action(methods=['delete'], detail=True)
    def delete(self, request, *args, **kwargs):
        following = CustomUser.objects.get(id=kwargs.get("pk"))
        get_object_or_404(
            Follow,
            user=request.user,
            following=following).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)