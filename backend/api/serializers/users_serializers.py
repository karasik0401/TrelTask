from djoser.serializers import (
    UserCreatePasswordRetypeSerializer,
    UserSerializer
)
from rest_framework import serializers
from rest_framework.relations import SlugRelatedField
from rest_framework.validators import UniqueTogetherValidator

from users.models import CustomUser, Follow


class CustomUserCreateSerializer(UserCreatePasswordRetypeSerializer):

    class Meta:
        model = CustomUser
        fields = (
            'id',
            'username',
            'email',
            'password',
            'photo'
        )
        required_fields = (
            'username',
            'password'
        )


class CustomUserSerializer(UserSerializer):
    is_following = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = CustomUser
        fields = (
            'id',
            'email',
            'username',
            'photo',
            'is_following'
        )

    def get_is_following(self, obj):
        try:
            return Follow.objects.filter(
                user=self.context['request'].user,
                following=obj.id
            ).exists()
        except TypeError:
            return False


class FollowPostDeleteSerializer(serializers.ModelSerializer):

    def validate_following(self, value):
        if value == self.context['request'].user:
            raise serializers.ValidationError(
                'Вы не можете подписаться на самого себя'
            )
        return value

    class Meta:
        fields = ['following']
        model = Follow


class FollowSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(read_only=True)
    following = CustomUserSerializer(read_only=True)

    class Meta:
        fields = ['user', 'following']
        model = Follow
