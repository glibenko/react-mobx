import { observable, computed, action } from 'mobx';

// import TodoModel from "./TodoModel";

export default class AppModel {
  @observable todos = [{ id: 1, title: 'fd', completed: false }];

  // @computed
  // get unfinishedTodoCount() {
  //   return this.todos.filter(todo => !todo.finished).length;
  // }

  @action
  add(title) {
    let id = this.todos.map(el => el.id);
    id = Math.max.apply(null, id) + 1;
    this.todos.push({
      id,
      title,
      completed: false,
    });
    console.log('addTodo', title, this.todos);
    // this.todos.push(new TodoModel(title));
  }

  @action
  remove(id) {
    this.todos = this.todos.filter(el => el.id !== id)
  }

  @action
  completed(id) {
    const todo = this.todos.find(el => el.id === id);
    todo.completed = !todo.completed;
  }
}
