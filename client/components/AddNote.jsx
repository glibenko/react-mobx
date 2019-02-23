import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
export default class AddNote extends Component {
  state = {
    value: '',
  }

  @action
  handleFormSubmit = (e) => {
    this.props.store.addTodo(this.state.value);
    this.setState({ value: '' });
    e.preventDefault();
  };

  render() {
    const { value } = this.state;
    console.log('this.props', this.props)

    return (
      <div>
        <input
          value={value}
          type="text"
          onChange={(e) => { this.setState({ value: e.target.value }); }}
        />
        <button onClick={this.handleFormSubmit}>ADD</button>
      </div>
    );
  }
}
