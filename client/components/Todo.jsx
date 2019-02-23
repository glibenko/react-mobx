import React, { Component } from 'react';
import AddNote from './AddNote';
import List from './List';


export default class Todo extends Component {
  render() {
    return (
      <div>
        <AddNote />
        <List />
      </div>
    )
  }
}
