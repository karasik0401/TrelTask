import { CreateBoard, CreateTask, loginUser, registerUser, postChapter, getUsersBoards, getUsersTasks, getBoard  } from '../api'; // Replace 'yourFile' with the path to your file containing the functions


jest.mock('../api', () => {
  return {
    loginUser: jest.fn(),
    registerUser: jest.fn(),
    CreateTask: jest.fn(),
    CreateBoard: jest.fn(),
    postChapter: jest.fn(),
    getUsersTasks: jest.fn(),
    getUsersBoards: jest.fn(),
    getTask: jest.fn(),
    getBoard: jest.fn(),
  };
});

describe('test Api', () => {
    it('loginUser', async () => {
      const username = 'testuser';
      const password = 'testpassword';
      const expectedAuthToken = 'someAuthToken';
      loginUser.mockResolvedValueOnce({ auth_token: expectedAuthToken });
  
      const result = await loginUser(username, password);
  
      expect(loginUser).toHaveBeenCalledWith(username, password);
      expect(result).toEqual({ auth_token: expectedAuthToken });
    });

    it('registerUser', async () => {
      const username = 'testuser';
      const email = 'test@example.com';
      const password = 'testpassword';
      const re_password = 'testpassword';
      const response = {
        username,
        email,
      }
      registerUser.mockResolvedValueOnce(response);
  
      const result = await registerUser(username, email, password, re_password);
  
      expect(registerUser).toHaveBeenCalledWith(username, email, password, re_password);
      expect(result).toEqual(response);
    });

    it('create task', async () => {
        const formData = new FormData();
        formData.append('chapter', 1);
        formData.append('name', 'new task');
    
        const expectedResponse = {
            "id": 13,
            "chapter": 2,
            "name": "new task",
            "description": null,
            "check_list": {},
            "deadline": null,
            "priority": 1,
            "assignees": [],
            "done": false
        };
    
        CreateTask.mockResolvedValueOnce(expectedResponse);
    
        const result = await CreateTask(formData);    
        expect(result).toEqual(expectedResponse);
      });
      it('create board', async () => {
        const formData = new FormData();
        formData.append('name', "new board");
    
        const expectedResponse = {
            "id": 1,
            "name": "new board",
            "participants": []
        };
    
        postChapter.mockResolvedValueOnce(expectedResponse);
    
        const result = await postChapter(formData);    
        expect(result).toEqual(expectedResponse);
      });
      it('create chapter', async () => {
        const formData = new FormData();
        formData.append('board', 1);
        formData.append('name', 'new chapter');
    
        const expectedResponse = {
            "id": 1,
            "name": "new chapter",
            "board": 1
        }
    
        CreateBoard.mockResolvedValueOnce(expectedResponse);
    
        const result = await CreateBoard(formData);    
        expect(result).toEqual(expectedResponse);
      });
      it('get users tasks', async () => {
    
        const expectedResponse = [
            {
                "id": 1,
                "name": "сделать то-то",
                "description": "и то-то",
                "check_list": {
                    "e": false,
                },
                "deadline": "2024-05-14",
                "priority": 1,
                "assignees": [
                    {
                        "id": 1,
                        "email": "karasik@gmail.com",
                        "username": "karasik",
                        "photo": null,
                        "is_following": false
                    },
                    {
                        "id": 2,
                        "email": "skalozubov.m.e@edu.mirea.ru",
                        "username": "max",
                        "photo": null,
                        "is_following": true
                    }
                ],
                "done": true,
                "board_name": "string"
            }
        ]
    
        getUsersTasks.mockResolvedValueOnce(expectedResponse);
    
        const result = await getUsersTasks();    
        expect(result).toEqual(expectedResponse);
      });
      it('get users boards', async () => {
    
        const expectedResponse = [
            {
                "id": 1,
                "creator": {
                    "id": 1,
                    "email": "karasik@gmail.com",
                    "username": "karasik",
                    "photo": null,
                    "is_following": false
                },
                "participants": [
                    {
                        "id": 2,
                        "email": "skalozubov.m.e@edu.mirea.ru",
                        "username": "max",
                        "photo": null,
                        "is_following": true
                    }
                ],
                "name": "string",
                "done": 4,
                "not_done": 7,
                "percent": 0.36
            },
            {
                "id": 2,
                "creator": {
                    "id": 1,
                    "email": "karasik@gmail.com",
                    "username": "karasik",
                    "photo": null,
                    "is_following": false
                },
                "participants": [
                    {
                        "id": 2,
                        "email": "skalozubov.m.e@edu.mirea.ru",
                        "username": "max",
                        "photo": null,
                        "is_following": true
                    }
                ],
                "name": "string",
                "done": 0,
                "not_done": 0,
                "percent": 0
            },
        ]
        getUsersBoards.mockResolvedValueOnce(expectedResponse);
    
        const result = await getUsersBoards();    
        expect(result).toEqual(expectedResponse);
      });
     
  });