from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views.tasks_views import BoardViewSet, ChapterViewSet, TaskViewSet

router_v1 = DefaultRouter()
router_v1.register('boards', BoardViewSet, basename="board")
router_v1.register('chapters', ChapterViewSet, basename="chapter")
router_v1.register('tasks', TaskViewSet, basename="task")

urlpatterns = [
    path('', include(router_v1.urls)),
]
