import pytest
from fixtures import create_user, user_client, create_second_user, create_follow, create_board, create_chapter, create_task, user_client_second
from rest_framework.test import APIClient
from rest_framework import status
from constnants import *
from users.models import CustomUser


@pytest.mark.django_db
class TestUsersEndpoints:
    def test_login(self, create_user):
        expected_fields = {
            'auth_token'
        }

        response = APIClient().post(
            '/api/auth/token/login/',
            data={"username": USERNAME, "password": PASSWORD},
            format='json'
        )

        assert response.status_code == status.HTTP_200_OK
        assert set(response.data.keys()) == expected_fields

    def test_get_user_me(self, user_client):
        expected_fields = {
            'id',
            'email',
            'username',
            'photo',
            'is_following'
        }

        response = user_client.get('/api/users/me/')
        print(response.data.keys())

        assert response.status_code == status.HTTP_200_OK
        assert response.data.get('id') == USER_ID
        assert set(response.data.keys()) == expected_fields
    
    def test_create_user(self):
        expected_fields = {
            'id',
            'email',
            'username',
            'photo',
        }
        data={
                "username": USERNAME,
                "email": EMAIL,
                "password": PASSWORD,
                "re_password": REPASSWORD
            }

        response = APIClient().post(
            '/api/users/',
            data=data,
            format='json'
        )
        user = CustomUser.objects.filter(
            username=USERNAME
        )

        assert response.status_code == status.HTTP_201_CREATED
        assert response.data.get('id') == USER_ID
        assert user.exists()
        assert set(response.data.keys()) == expected_fields
    

    def test_get_users_list(self, user_client, create_second_user):
        expected_fields = {
            'id',
            'email',
            'username',
            'photo',
            'is_following'
        }

        response = user_client.get('/api/users/')

        assert response.status_code == status.HTTP_200_OK
        assert response.data[0].get('id') == SECOND_USER_ID
        assert set(response.data[0].keys()) == expected_fields
    
    def test_update_user_me(self, user_client):
        expected_fields = {
            'id',
            'email',
            'username',
            'photo',
            'is_following'
        }
        data = {
            "username": NEW_USERNAME
        }

        response = user_client.patch(
            '/api/users/me/',
            data=data,
            format='json'
        )

        assert response.status_code == status.HTTP_200_OK
        assert response.data.get('id') == USER_ID
        assert response.data.get('username') == NEW_USERNAME
        assert set(response.data.keys()) == expected_fields


@pytest.mark.django_db
class TestFollowingEndpoints:
    def test_get_follow_list(self, user_client, create_follow):
        expected_fields = {
            'user',
            'following'
        }

        response = user_client.get('/api/follow/')

        assert response.status_code == status.HTTP_200_OK
        assert response.data[0].get('following').get('id') == SECOND_USER_ID
        assert response.data[0].get('user').get('id') == USER_ID
        assert set(response.data[0].keys()) == expected_fields

    def test_create_follow(self, user_client, create_second_user):
        expected_fields = {
            'following'
        }
        data = {
            "user": USER_ID,
            "following": SECOND_USER_ID
        }

        response = user_client.post(
            '/api/follow/',
            data=data,
            format='json'
            )

        assert response.status_code == status.HTTP_201_CREATED
        assert response.data.get('following') == SECOND_USER_ID
        assert set(response.data.keys()) == expected_fields

    def test_delete_follow(self, user_client, create_follow):

        response = user_client.delete('/api/follow/1/')

        assert response.status_code == status.HTTP_204_NO_CONTENT

@pytest.mark.django_db
class TestBoardEndpoints:
    def test_get_board_list(self, user_client, create_board):
        expected_fields = {
            "id",
            "creator",
            "participants",
            "name",
            "done",
            "not_done",
            "percent"
        }

        response = user_client.get('/api/boards/')

        assert response.status_code == status.HTTP_200_OK
        assert response.data[0].get("name") == BOARD_NAME
        assert set(response.data[0].keys()) == expected_fields
    
    def test_create_board(self, user_client):
        expected_fields = {
            "id",
            "participants",
            "name"
        }
        data = {
            "name": BOARD_NAME,
            "participants": []
        }

        response = user_client.post(
            '/api/boards/',
            data=data,
            format='json'
        )

        assert response.status_code == status.HTTP_201_CREATED
        assert response.data.get("name") == BOARD_NAME
        assert set(response.data.keys()) == expected_fields
    
    def test_get_board(self, user_client, create_board):
        expected_fields = {
            "id",
            "creator",
            "participants",
            "name",
            "chapters"
        }

        response = user_client.get('/api/boards/1/')

        assert response.status_code == status.HTTP_200_OK
        assert response.data.get("id") == 1
        assert response.data.get("name") == BOARD_NAME
        assert set(response.data.keys()) == expected_fields

    def test_delete_board(self, user_client, create_board):

        response = user_client.delete('/api/boards/1/')

        assert response.status_code == status.HTTP_204_NO_CONTENT
    
    def test_get_participants(self, user_client, create_board):
        expected_fields = {
            "participants"
        }

        response = user_client.get('/api/boards/1/participants/')

        assert response.status_code == status.HTTP_200_OK
        assert response.data.get("participants")[0].get('id') == SECOND_USER_ID
        assert set(response.data.keys()) == expected_fields


@pytest.mark.django_db
class TestChapterEndpoints:
    def test_get_chapter_list(self, user_client, create_chapter):
        expected_fields = {
            "id",
            "name",
            "tasks",
            "board"
        }

        response = user_client.get('/api/chapters/')

        assert response.status_code == status.HTTP_200_OK
        assert response.data[0].get('id') == 1
        assert response.data[0].get('name') == CHAPTER_NAME
        assert set(response.data[0].keys()) == expected_fields
    
    def test_get_chapter(self, user_client, create_chapter):
        expected_fields = {
            "id",
            "name",
            "tasks",
            "board"
        }

        response = user_client.get('/api/chapters/1/')

        assert response.status_code == status.HTTP_200_OK
        assert response.data.get('id') == 1
        assert response.data.get('name') == CHAPTER_NAME
        assert set(response.data.keys()) == expected_fields
    
    def test_create_chapter(self, user_client, create_board):
        expected_fields = {
            "id",
            "name",
            "board"
        }
        data = {
            "name": CHAPTER_NAME,
            "board": 1
        }

        response = user_client.post(
            '/api/chapters/',
            data=data,
            format="json"
            )
        

        assert response.status_code == status.HTTP_201_CREATED
        assert response.data.get('id') == 1
        assert response.data.get('name') == CHAPTER_NAME
        assert set(response.data.keys()) == expected_fields
    

@pytest.mark.django_db
class TestTaskEndpoints:
    def test_get_users_tasks_list(self, user_client, create_task):
        expected_fields = {
            "id",
            "name",
            "description",
            "check_list",
            "deadline",
            "priority",
            "assignees",
            "done",
            "board_name"
        }

        response = user_client.get('/api/tasks/users_tasks/')

        assert response.status_code == status.HTTP_200_OK
        assert response.data[0].get('id') == 1
        assert response.data[0].get('name') == TASK_NAME
        assert response.data[0].get('assignees')[0].get('id') == USER_ID
        assert set(response.data[0].keys()) == expected_fields
    
    def test_get_task(self, user_client, create_task):
        expected_fields = {
            "id",
            "name",
            "description",
            "check_list",
            "deadline",
            "priority",
            "assignees",
            "done",
            "board_id"
        }

        response = user_client.get('/api/tasks/1/')

        assert response.status_code == status.HTTP_200_OK
        assert response.data.get('id') == 1
        assert response.data.get('name') == TASK_NAME
        assert response.data.get('assignees')[0].get('id') == USER_ID
        assert set(response.data.keys()) == expected_fields
    
    def test_create_task(self, user_client, create_chapter):
        expected_fields = {
            "id",
            "chapter",
            "name",
            "description",
            "check_list",
            "deadline",
            "priority",
            "assignees",
            "done"
        }
        data = {
            "chapter": create_chapter.id,
            "name": TASK_NAME,
            "description": TASK_DESCRIPTION,
            "priority": TASK_PRIORITY,
            "assignees": []
        }

        response = user_client.post(
            '/api/tasks/',
            data=data,
            format="json"
            )
        

        assert response.status_code == status.HTTP_201_CREATED
        assert response.data.get('id') == 1
        assert response.data.get('name') == TASK_NAME
        assert response.data.get('description') == TASK_DESCRIPTION
        assert response.data.get('priority') == TASK_PRIORITY
        assert response.data.get('done') == False
        assert response.data.get('check_list') == {}
        assert set(response.data.keys()) == expected_fields

    def test_delete_task(self, user_client, create_task):

        response = user_client.delete('/api/tasks/1/')

        assert response.status_code == status.HTTP_204_NO_CONTENT
    
    def test_error_while_delete_task(self, create_task, user_client_second):

        response = user_client_second.delete('/api/tasks/1/')

        assert response.status_code == status.HTTP_204_NO_CONTENT
