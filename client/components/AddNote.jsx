import React, { Component } from 'react';
import { action } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
export default class AddNote extends Component {
  state = {
    value: '',
  }

  @action
  handleFormSubmit = (e) => {
    this.props.store.add(this.state.value);
    this.setState({ value: '' });
    e.preventDefault();
  };

  render() {
    const { value } = this.state;

    const styleInput = {
      border: '1px solid #ccc',
      marginRight: 10,
      borderRadius: 4,
    };

    return (
      <div>
        <input
          value={value}
          type="text"
          onChange={(e) => { this.setState({ value: e.target.value }); }}
          style={styleInput}
        />
        <button onClick={this.handleFormSubmit}>ADD</button>
      </div>
    );
  }
}
