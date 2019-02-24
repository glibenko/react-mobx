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
    return (
      <div>
        {this.props.store.todos.map(el => (
          <div key={el.id} style={{ display: 'flex'}}>
          <div onClick={() => {this.completed(el.id)}}> {el.title} </div>
          <div onClick={() => {this.remove(el.id)} }>del</div>
          </div>
        ))}
      </div>
    )
  }
}
