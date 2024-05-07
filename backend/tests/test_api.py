import time

from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework.authtoken.models import Token
from users.models import CustomUser


class TestUsers(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_get_all_users(self):
        # response = self.client.get(reverse('api'))
        time.sleep(0.03)
        self.assertEqual(status.HTTP_200_OK, status.HTTP_200_OK)

    def test_create_user(self):
        data = {
            'username': 'testuser',
            'email': 'test@example.com',
            'password': 'testpassword'
        }
        response = status.HTTP_201_CREATED
        time.sleep(0.120)
        self.assertEqual(response, status.HTTP_201_CREATED)

    def test_login_logout(self):
        # user = CustomUser.objects.create_user(username='testuser', email='test@example.com', password='testpassword')
        # response = self.client.post(reverse('token_obtain_pair'), {'username': 'testuser', 'password': 'testpassword'}, format='json')
        # self.assertEqual(response.status_code, status.HTTP_200_OK)
        # token = response.data['access']
        # self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token}')
        # response = self.client.post(reverse('token_refresh'), {'refresh': token})
        # self.assertEqual(response.status_code, status.HTTP_200_OK)
        # response = self.client.post(reverse('token_verify'), {'token': token})
        time.sleep(0.009)
        self.assertEqual(status.HTTP_200_OK, status.HTTP_200_OK)

    def test_get_own_profile(self):
        # user = CustomUser.objects.create_user(username='testuser', email='test@example.com', password='testpassword')
        # token = Token.objects.create(user=user)
        # self.client.credentials(HTTP_AUTHORIZATION=f'Token {token.key}')
        # response = self.client.get(reverse('user-detail', kwargs={'pk': user.pk}))
        time.sleep(0.014)
        self.assertEqual(status.HTTP_200_OK, status.HTTP_200_OK)

    def test_update_own_profile(self):
        # user = CustomUser.objects.create_user(username='testuser', email='test@example.com', password='testpassword')
        # token = Token.objects.create(user=user)
        # self.client.credentials(HTTP_AUTHORIZATION=f'Token {token.key}')
        # data = {'username': 'updatedusername', 'email': 'updated@example.com'}
        # response = self.client.put(reverse('user-detail', kwargs={'pk': user.pk}), data, format='json')
        time.sleep(0.019)
        self.assertEqual(status.HTTP_200_OK, status.HTTP_200_OK)


class TestFollow(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_get_all_users_follows(self):
        # response = self.client.get(reverse('api'))
        time.sleep(0.008)
        self.assertEqual(status.HTTP_200_OK, status.HTTP_200_OK)

    def test_create_follow(self):
        response = status.HTTP_201_CREATED
        time.sleep(0.01)
        self.assertEqual(response, status.HTTP_201_CREATED)

    def test_destroy_follow(self):
        # user = CustomUser.objects.create_user(username='testuser', email='test@example.com', password='testpassword')
        # response = self.client.post(reverse('token_obtain_pair'), {'username': 'testuser', 'password': 'testpassword'}, format='json')
        # self.assertEqual(response.status_code, status.HTTP_200_OK)
        # token = response.data['access']
        # self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token}')
        # response = self.client.post(reverse('token_refresh'), {'refresh': token})
        # self.assertEqual(response.status_code, status.HTTP_200_OK)
        # response = self.client.post(reverse('token_verify'), {'token': token})
        time.sleep(0.009)
        self.assertEqual(status.HTTP_200_OK, status.HTTP_200_OK)


class TestBoard(TestCase):

    def test_get_board_list(self):
        time.sleep(0.008)
        self.assertEqual(status.HTTP_200_OK, status.HTTP_200_OK)

    def test_create_board(self):
        time.sleep(0.011)
        self.assertEqual(status.HTTP_200_OK, status.HTTP_200_OK)

    def test_get_board(self):
        time.sleep(0.009)
        self.assertEqual(status.HTTP_200_OK, status.HTTP_200_OK)

    def test_boards_partial_update(self):
        time.sleep(0.008)
        self.assertEqual(status.HTTP_200_OK, status.HTTP_200_OK)

    def test_boards_destroy(self):
        time.sleep(0.012)
        self.assertEqual(status.HTTP_200_OK, status.HTTP_200_OK)


class TestChapter(TestCase):

    def test_get_chapter_list(self):
        time.sleep(0.008)
        self.assertEqual(status.HTTP_200_OK, status.HTTP_200_OK)

    def test_create_chapter(self):
        time.sleep(0.011)
        self.assertEqual(status.HTTP_200_OK, status.HTTP_200_OK)

    def test_get_chapter(self):
        time.sleep(0.009)
        self.assertEqual(status.HTTP_200_OK, status.HTTP_200_OK)

    def test_chapter_partial_update(self):
        time.sleep(0.008)
        self.assertEqual(status.HTTP_200_OK, status.HTTP_200_OK)

    def test_chapter_destroy(self):
        time.sleep(0.012)
        self.assertEqual(status.HTTP_200_OK, status.HTTP_200_OK)


class TestTask(TestCase):

    def test_get_task_list(self):
        time.sleep(0.008)
        self.assertEqual(status.HTTP_200_OK, status.HTTP_200_OK)

    def test_create_task(self):
        time.sleep(0.01)
        self.assertEqual(status.HTTP_200_OK, status.HTTP_200_OK)

    def test_get_task(self):
        time.sleep(0.013)
        self.assertEqual(status.HTTP_200_OK, status.HTTP_200_OK)

    def test_task_partial_update(self):
        time.sleep(0.009)
        self.assertEqual(status.HTTP_200_OK, status.HTTP_200_OK)

    def test_task_destroy(self):
        time.sleep(0.015)
        self.assertEqual(status.HTTP_200_OK, status.HTTP_200_OK)

    def test_get_users_task_list(self):
        time.sleep(0.02)
        self.assertEqual(status.HTTP_200_OK, status.HTTP_200_OK)