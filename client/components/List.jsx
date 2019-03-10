import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { action } from 'mobx';

@inject('store')
@observer
export default class List extends Component {
  @action
  remove = (id) => {
    this.props.store.remove(id);
  };

  completed = (id) => {
    this.props.store.completed(id);
  };

  render() {
    const {store: {todos, todoCount, unfinishedTodoCount}} = this.props;

    const styleContainer = {
      width: 180,
    };

    const styleList = {
      marginTop: 10,
    };

    const styleItem = {
      display: 'flex',
      justifyContent: 'space-between',
    };

    return (
      <div style={styleContainer}>
        <div style={styleList}>
          {todos.map((el) => {
            const completed = el.completed ? { color: 'red', cursor: 'pointer' } : { cursor: 'pointer' };
            return (
              <div key={el.id} style={styleItem}>
                <div onClick={() => {this.completed(el.id)}} style={completed}> {el.title} </div>
                <div onClick={() => {this.remove(el.id)} }>del</div>
              </div>
            );
          })}
        </div>
        <div style={styleList}> Count: {todoCount} </div>
        <div> unfinished: {unfinishedTodoCount} </div>
      </div>
    );
  }
}
