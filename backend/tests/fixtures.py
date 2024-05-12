import pytest
from users.models import CustomUser, Follow
from tasks.models import Board, Task, Chapter
from rest_framework.test import APIClient
from rest_framework.authtoken.models import Token
from constnants import *

@pytest.fixture
def create_user():
    user = CustomUser.objects.create_user(
        username=USERNAME,
        email=EMAIL,
        password=PASSWORD,
    )
    user.id = USER_ID
    user.save()
    yield user

@pytest.fixture
def create_second_user():
    user = CustomUser.objects.create_user(
        username=SECOND_USERNAME,
        email=SECOND_EMAIL,
        password=SECOND_PASSWORD
    )
    user.id = SECOND_USER_ID
    user.save()
    yield user


@pytest.fixture
def user_client(create_user):
    client = APIClient()
    user = create_user
    token, _ = Token.objects.get_or_create(user=user)
    client.credentials(HTTP_AUTHORIZATION='Token ' + token.key)
    return client

@pytest.fixture
def user_client_second(create_second_user):
    client = APIClient()
    user = create_second_user
    token, _ = Token.objects.get_or_create(user=user)
    client.credentials(HTTP_AUTHORIZATION='Token ' + token.key)
    return client

@pytest.fixture
def create_follow(create_user, create_second_user):
    follow = Follow.objects.create(
        user=create_user,
        following=create_second_user
    )
    return follow

@pytest.fixture
def create_board(create_user, create_second_user):
    board = Board.objects.create(
        name=BOARD_NAME,
        creator=create_user,
    )
    board.participants.set([create_second_user])
    board.save()
    return board

@pytest.fixture
def create_chapter(create_board):
    chapter = Chapter.objects.create(
        name=CHAPTER_NAME,
        board=create_board,
    )
    return chapter

@pytest.fixture
def create_task(create_chapter, create_user):
    task = Task.objects.create(
        name=TASK_NAME,
        description=TASK_DESCRIPTION,
        priority=TASK_PRIORITY,
        chapter=create_chapter,
    )
    task.assignees.set([create_user])
    return task