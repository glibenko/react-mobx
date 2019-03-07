import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';

@inject('store')
@observer
export default class List extends Component {

  @action
  remove = (id) => {
    this.props.store.remove(id);
  };

  @action
  completed = (id) => {
    this.props.store.completed(id);
  };

  render() {

    console.log('this.props.store.todos', this.props.store.todos);
    return (
      <div>
        {this.props.store.todos.map(el => (
          <div key={el.id} style={{ display: 'flex'}}>
          <div onClick={() => {this.completed(el.id)}} style={el.completed ? {color: 'red'} : null}> {el.title} </div>
          <div onClick={() => {this.remove(el.id)} }>del</div>
          </div>
        ))}
      </div>
    )
  }
}
