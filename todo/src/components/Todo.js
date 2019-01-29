import React from 'react';

const Todo = props => (
    <li
    onClick={() => props.toggleCompleted(props.item.id)}
      style={{
        textDecoration: props.item.completed ? 'line-through' : 'none'
      }}
    >
      {props.item.text}
      <button onClick={e => props.deleteItem(e, props.item.id)} >[X]</button>
    </li>
  )

  export default Todo;