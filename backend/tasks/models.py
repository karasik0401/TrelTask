from django.db import models

from users.models import CustomUser


PRIORITY = (
    (0, "#7BB558"),
    (1, "#ED863B"),
    (2, "#E55050")
)


class Board(models.Model):
    creator = models.ForeignKey(
        CustomUser,
        related_name='created_boards',
        on_delete=models.CASCADE
    )
    participants = models.ManyToManyField(
        CustomUser,
        related_name='boards_participated',
        blank=True
    )
    name = models.CharField(
        verbose_name="Название доски",
        max_length=100
    )
    done = models.IntegerField(
        verbose_name="Количество сделанных задач",
        default=0
    )
    not_done = models.IntegerField(
        verbose_name="Количество не сделанных задач",
        default=0
    )

    class Meta:
        verbose_name = 'Доска'
        verbose_name_plural = 'Доски'

    def __str__(self):
        return self.name


class Chapter(models.Model):
    name = models.CharField(
        max_length=100,
        verbose_name="Название заголовка"
    )
    board = models.ForeignKey(
        Board,
        related_name='chapters',
        on_delete=models.CASCADE
    )

    class Meta:
        verbose_name = 'Глава'
        verbose_name_plural = 'Главы'

    def __str__(self):
        return self.name


# class File(models.Model):
#     file = models.FileField(upload_to='files/%Y/%m/%d/', verbose_name="Файлы")
#
#     class Meta:
#         verbose_name = 'Файл'
#         verbose_name_plural = 'Файлы'
#
#     def __str__(self):
#         return self.file


class Task(models.Model):
    chapter = models.ForeignKey(
        Chapter,
        related_name='tasks',
        on_delete=models.CASCADE
    )
    name = models.CharField(
        verbose_name="Название задачи",
        max_length=100
    )
    description = models.TextField(
        verbose_name="Описание задачи",
        blank=True,
        null=True
    )
    check_list = models.JSONField(
        verbose_name="Чек лист",
        default=dict,
        blank=True,
        null=True
    )
    deadline = models.DateField(
        verbose_name="Дедлайн",
        blank=True,
        null=True
    )
    priority = models.IntegerField(
        verbose_name="Приоритет",
        choices=PRIORITY,
        default=1
    )
    assignees = models.ManyToManyField(
        CustomUser,
        related_name='tasks_assigned',
        blank=True,
        verbose_name="Исполнители"
    )
    done = models.BooleanField(
        verbose_name="Флаг завершенной задачи",
        default=False
    )
    # files = models.ManyToManyField(File, related_name='tasks', blank=True, null=True)

    class Meta:
        verbose_name = 'Задача'
        verbose_name_plural = 'Задачи'

    def __str__(self):
        return self.name

