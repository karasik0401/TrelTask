from djoser.serializers import (
    UserCreatePasswordRetypeSerializer,
    UserSerializer
)
from rest_framework import serializers

from users.models import CustomUser, FriendshipRequest


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
    is_friend = serializers.SerializerMethodField()

    class Meta:
        model = CustomUser
        fields = (
            'id',
            'email',
            'username',
            'photo',
            'is_friend'
        )

    def get_is_friend(self, obj):
        request_user = self.context['request'].user

        from_friend_request = FriendshipRequest.objects.filter(
            from_user=request_user,
            to_user=obj
        )
        if from_friend_request.exists():
            friend_request = from_friend_request.first()
            if friend_request.status == 'rejected':
                return 'Заявка отклонена'
            return 'Заявка отправлена'
        to_friend_request = FriendshipRequest.objects.filter(
            from_user=obj,
            to_user=request_user
        )
        if to_friend_request.exists():
            friend_request = to_friend_request.first()
            if friend_request.status == 'reject':
                return 'Вы отклонили заявку'
            return 'Вам отправлена заявка'
        if obj in request_user.friends.all():
            return 'Вы друзья'
        return 'Вы не друзья'


class FriendshipRequestSerializer(serializers.ModelSerializer):
    from_user = serializers.CharField(
        source='from_user.username',
        read_only=True
    )
    to_user = serializers.CharField(
        source='to_user.username',
        read_only=True
    )

    class Meta:
        model = FriendshipRequest
        fields = '__all__'

    def validate(self, data):
        user = CustomUser.objects.get(id=self.context['request'].user.id)
        friend = CustomUser.objects.get(id=self.context['friend_id'])

        if user == friend:
            raise serializers.ValidationError(
                'Нельзя добавить в друзья самого себя!'
            )

        if FriendshipRequest.objects.filter(
            from_user=user,
            to_user=friend
        ).exists():
            raise serializers.ValidationError('Заявка уже отправлена!')

        if friend in user.friends.all():
            raise serializers.ValidationError(
                'Пользователь уже есть у Вас в друзьях!'
            )

        return data
