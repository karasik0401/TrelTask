# Generated by Django 5.0.4 on 2024-04-23 20:02

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Board',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Название доски')),
                ('creator', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='created_boards', to=settings.AUTH_USER_MODEL)),
                ('participants', models.ManyToManyField(blank=True, related_name='boards_participated', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Доска',
                'verbose_name_plural': 'Доски',
            },
        ),
        migrations.CreateModel(
            name='Chapter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nam', models.CharField(max_length=100, verbose_name='Название заголовка')),
                ('board', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='chapters', to='tasks.board')),
            ],
            options={
                'verbose_name': 'Глава',
                'verbose_name_plural': 'Главы',
            },
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Название задачи')),
                ('description', models.TextField(verbose_name='Описание задачи')),
                ('check_list', models.JSONField(default=dict, verbose_name='Чек лист')),
                ('deadline', models.DateField(blank=True, null=True, verbose_name='Дедлайн')),
                ('priority', models.IntegerField(default=1, verbose_name='Приоритет')),
                ('done', models.BooleanField(default=False, verbose_name='Флаг завершенной задачи')),
                ('assignees', models.ManyToManyField(blank=True, related_name='tasks_assigned', to=settings.AUTH_USER_MODEL, verbose_name='Исполнители')),
                ('chapter', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tasks', to='tasks.chapter')),
            ],
            options={
                'verbose_name': 'Задача',
                'verbose_name_plural': 'Задачи',
            },
        ),
    ]
