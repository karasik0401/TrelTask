from django.contrib import admin
from .models import Board, Chapter, Task


@admin.register(Board)
class BoardAdmin(admin.ModelAdmin):
    list_display = ('name', 'creator')
    filter_horizontal = ('participants',)


@admin.register(Chapter)
class ChapterAdmin(admin.ModelAdmin):
    list_display = ('name', 'board')  # Заменяем 'name' на 'nam'
    search_fields = ('name',)  # Исправляем для поиска
    list_filter = ('board',)  # Добавляем фильтр по доске


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ('name', 'chapter', 'priority', 'deadline', 'done')
    list_filter = ('chapter', 'priority', 'deadline', 'done')
    filter_horizontal = ('assignees',)  # Исправляем на кортеж