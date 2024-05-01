from rest_framework import serializers
from rest_framework.fields import SerializerMethodField

from api.serializers.users_serializers import CustomUserSerializer
from tasks.models import Board, Chapter, Task


# class FileSerializer(serializers.ModelSerializer):
#
#     class Meta:
#         model = File
#         fields = "__all__"


class TaskShowSerializer(serializers.ModelSerializer):
    assignees = CustomUserSerializer(many=True)
    # files = FileSerializer(many=True)

    class Meta:
        model = Task
        fields = ['id', 'name', 'description', 'check_list', 'deadline', 'priority', 'assignees']


class TaskCreateUpdateSerializer(serializers.ModelSerializer):
    # files = FileSerializer(many=True, required=False)

    class Meta:
        model = Task
        fields = ['id', 'chapter', 'name', 'description', 'check_list', 'deadline', 'priority', 'assignees', 'done',]

    def validate_check_list(self, value):
        if not all(isinstance(key, str) for key in value.keys()):
            raise serializers.ValidationError(
                "Ключи в чек-листе должны быть строками")
        if not all(isinstance(val, bool) for val in value.values()):
            raise serializers.ValidationError(
                "Значения в чек-листе должны быть булевыми значениями")

        return value

    # def create(self, validated_data):
    #     files_data = self.context.get('request').FILES.getlist('files')
    #     task = Task.objects.create(**validated_data)
    #     for file_data in files_data:
    #         task.files.create(file=file_data)
    #     return task
    #
    # def update(self, instance, validated_data):
    #     files_data = self.context.get('request').FILES.getlist('files')
    #     instance.save(**validated_data)
    #     instance.files.all().delete()
    #     for file_data in files_data:
    #         instance.files.create(file=file_data)
    #     return instance


class TaskListSerializer(serializers.ModelSerializer):
    assignees = CustomUserSerializer(many=True)

    class Meta:
        model = Task
        fields = ['id', 'name', 'description', 'check_list', 'deadline', 'priority', 'assignees', 'done']


class ChapterShowSerializer(serializers.ModelSerializer):
    tasks = TaskListSerializer(many=True)

    class Meta:
        model = Chapter
        fields = ['id', 'name', 'board', 'tasks']


class ChapterCreateUpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Chapter
        fields = ['id', 'name', 'board']


class ChapterListSerializer(serializers.ModelSerializer):
    tasks = TaskListSerializer(many=True)

    class Meta:
        model = Chapter
        fields = ['id', 'name', 'tasks']


class BoardListSerializer(serializers.ModelSerializer):
    percent = SerializerMethodField()
    creator = CustomUserSerializer()
    participants = CustomUserSerializer(many=True)

    class Meta:
        model = Board
        fields = ['id', 'creator', 'participants', 'name', 'done', 'not_done', 'percent']

    def get_percent(self, obj):
        total_tasks = obj.done + obj.not_done
        if total_tasks == 0:
            return 0
        percent_done = (obj.done / total_tasks) * 100
        return round(percent_done, 2)


class BoardCreateUpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Board
        fields = ['id', 'name', 'participants']


class BoardShowSerializer(serializers.ModelSerializer):
    creator = CustomUserSerializer()
    participants = CustomUserSerializer(many=True)
    chapters = ChapterListSerializer(many=True)

    class Meta:
        model = Board
        fields = ['id', 'creator', 'participants', 'name', 'chapters']


class BoardParticipantSerializer(serializers.ModelSerializer):
    participants = CustomUserSerializer(many=True)

    class Meta:
        model = Board
        fields = ['participants']
