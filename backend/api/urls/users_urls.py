from django.urls import path, include
from rest_framework import routers
from api.views.users_views import CustomUserViewSet, Follow, FollowViewSet

router_v1 = routers.DefaultRouter()


router_v1.register(r'users', CustomUserViewSet, basename='users')
router_v1.register(r'follow', FollowViewSet, basename='follow')


urlpatterns = [
    path('auth/', include('djoser.urls.authtoken')),
    path('', include(router_v1.urls)),
    path('', include('djoser.urls.base')),
]