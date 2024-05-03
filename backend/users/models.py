from django.contrib.auth.models import AbstractUser
from django.db import models


FRIENDSHIP_REQUEST_STATUSES = (
    ('sent', 'Заявка отправлена'),
    ('rejected', 'Заявка отклонена')
)


class CustomUser(AbstractUser):
    email = models.EmailField(
        unique=True,
        blank=True,
        null=True,
        verbose_name="Эл. почта"
    )
    photo = models.ImageField(
        blank=True,
        null=True,
        upload_to='users/images/',
        verbose_name='Фото'
    )
    friends = models.ManyToManyField('CustomUser', blank=True)

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'

    def __str__(self):
        return f'username: {self.username}, email: {self.email}'


class Follow(models.Model):
    user = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='follower',
        blank=True,
        null=True
    )
    following = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='following',
    )

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['user', 'following'],
                name='uniq_followers'
            )
        ]
