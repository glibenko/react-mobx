import { observable, computed, action } from 'mobx';

export default class AppModel {
  @observable todos = [{ id: 1, title: 'fd', completed: false }];

  @computed
  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.completed).length;
  }

  get todoCount() {
    return this.todos.length;
  }

  @action
  add(title) {
    let id = this.todos.map(el => el.id);
    id = Math.max(...id) + 1;
    this.todos.push({
      id,
      title,
      completed: false,
    });
  }

  remove(id) {
    this.todos = this.todos.filter(el => el.id !== id)
  }

  completed(id) {
    const todo = this.todos.find(el => el.id === id);
    todo.completed = !todo.completed;
  }
}
