import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import {
  addTask,
  addChecklistItem,
  getAllTasks,
  getAllChecklistItems,
  deleteTask,
  deleteChecklistItem,
} from '../bd/realmService';

class bdPage extends Component {
  componentDidMount() {
    // Пример добавления задачи в таблицу MyTask
    const newTask = {
      id: 1,
      title: 'Задача 1',
      description: 'Описание задачи',
      deadline: 1637400000, // timestamp
      participant: 'Имя участника',
      done: false,
      checklist: true,
    };
    addTask(newTask);

    // Пример добавления элемента в таблицу Checklist
    const newItem = {
      id: 1,
      title: 'Пункт 1',
      done: false,
    };
    addChecklistItem(newItem);

    // Пример чтения всех задач из таблицы MyTask
    const tasks = getAllTasks();
    console.log('Задачи:', tasks);

    // Пример чтения всех элементов из таблицы Checklist
    const items = getAllChecklistItems();
    console.log('Элементы Checklist:', items);

    // Пример удаления задачи с определенным ID
    deleteTask(1);

    // Пример удаления элемента с определенным ID
    deleteChecklistItem(1);
  }

  render() {
    return (
      <View>
        <Text>Пример использования Realm функций</Text>
        <Button title="Добавить задачу" onPress={this.addTaskExample} />
        <Button title="Добавить элемент Checklist" onPress={this.addChecklistItemExample} />
      </View>
    );
  }
}

export default bdPage;
