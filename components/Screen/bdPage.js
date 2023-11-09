import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import {
  addTask,
  addChecklistItem,
  getAllTasks,
  getAllChecklistItems,
  deleteTask,
  deleteChecklistItem,
} from '../bd/realmService';

class bdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: {
        id: '',
        title: '',
        description: '',
        deadline: '',
        participant: '',
        done: false,
        checklist: true,
      },
      newItem: {
        id: '',
        title: '',
        done: false,
      },
    };
  }

  handleAddTask = () => {
    addTask(this.state.newTask);
    this.setState({
      newTask: {
        id: '',
        title: '',
        description: '',
        deadline: '',
        participant: '',
        done: false,
        checklist: true,
      },
    });
  };

  handleAddChecklistItem = () => {
    addChecklistItem(this.state.newItem);
    this.setState({
      newItem: {
        id: '',
        title: '',
        done: false,
      },
    });
  };

  componentDidMount() {
    // Пример чтения всех задач из таблицы MyTask
    const tasks = getAllTasks();
    console.log('Задачи:', tasks);

    // Пример чтения всех элементов из таблицы Checklist
    const items = getAllChecklistItems();
    console.log('Элементы Checklist:', items);
  }

  render() {
    return (
      <View>
        <Text>Пример использования Realm функций</Text>
        <TextInput
          placeholder="ID задачи"
          value={this.state.newTask.id}
          onChangeText={(text) => this.setState({ newTask: { ...this.state.newTask, id: text } })}
        />
        <TextInput
          placeholder="Заголовок задачи"
          value={this.state.newTask.title}
          onChangeText={(text) => this.setState({ newTask: { ...this.state.newTask, title: text } })}
        />
        <TextInput
          placeholder="Описание задачи"
          value={this.state.newTask.description}
          onChangeText={(text) => this.setState({ newTask: { ...this.state.newTask, description: text } })}
        />
        <TextInput
          placeholder="Дедлайн"
          value={this.state.newTask.deadline}
          onChangeText={(text) => this.setState({ newTask: { ...this.state.newTask, deadline: text } })}
        />
        <TextInput
          placeholder="Участник"
          value={this.state.newTask.participant}
          onChangeText={(text) => this.setState({ newTask: { ...this.state.newTask, participant: text } })}
        />
        <Button title="Добавить задачу" onPress={this.handleAddTask} />

        <TextInput
          placeholder="ID элемента Checklist"
          value={this.state.newItem.id}
          onChangeText={(text) => this.setState({ newItem: { ...this.state.newItem, id: text } })}
        />
        <TextInput
          placeholder="Заголовок элемента Checklist"
          value={this.state.newItem.title}
          onChangeText={(text) => this.setState({ newItem: { ...this.state.newItem, title: text } })}
        />
        <Button title="Добавить элемент Checklist" onPress={this.handleAddChecklistItem} />
      </View>
    );
  }
}

export default bdPage;
