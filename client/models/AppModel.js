import { observable, computed, action } from 'mobx';

// import TodoModel from "./TodoModel";

export default class AppModel {
  @observable todos = [{ id: 1, title: 'fd' }];

  // @computed
  // get unfinishedTodoCount() {
  //   return this.todos.filter(todo => !todo.finished).length;
  // }

  @action
  addTodo(title) {
    console.log('addTodo', title, this.todos);
    // this.todos.push(new TodoModel(title));
  }
}
