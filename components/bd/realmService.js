// realmService.js

import * as Realm from 'realm';

class MyTask extends Realm.Object {}
class Checklist extends Realm.Object {}

MyTask.schema = {
  name: 'MyTask',
  properties: {
    id: 'int',
    title: 'string',
    description: 'string',
    deadline: 'int',
    participant: 'string',
    done: 'bool',
    checklist: 'bool',
  },
};

Checklist.schema = {
  name: 'Checklist',
  properties: {
    id: 'int',
    title: 'string',
    done: 'bool',
  },
};

const databaseOptions = {
  path: 'trelltask.realm',
  schema: [MyTask, Checklist],
};

const realm = new Realm(databaseOptions);

const addTask = (task) => {
  realm.write(() => {
    realm.create('MyTask', task);
  });
};

const addChecklistItem = (item) => {
  realm.write(() => {
    realm.create('Checklist', item);
  });
};

const getAllTasks = () => {
  return realm.objects('MyTask');
};

const getAllChecklistItems = () => {
  return realm.objects('Checklist');
};

const deleteTask = (taskId) => {
  const taskToDelete = realm.objectForPrimaryKey('MyTask', taskId);
  if (taskToDelete) {
    realm.write(() => {
      realm.delete(taskToDelete);
    });
  }
};

const deleteChecklistItem = (itemId) => {
  const itemToDelete = realm.objectForPrimaryKey('Checklist', itemId);
  if (itemToDelete) {
    realm.write(() => {
      realm.delete(itemToDelete);
    });
  }
};

export {
  addTask,
  addChecklistItem,
  getAllTasks,
  getAllChecklistItems,
  deleteTask,
  deleteChecklistItem,
};
