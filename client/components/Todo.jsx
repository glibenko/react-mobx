import React from 'react';
import AddNote from './AddNote';
import List from './List';

function Todo() {
  return (
    <div>
      <AddNote />
      <List />
    </div>
  );
}

export default React.memo(Todo);
