import React, { useState } from "react";
import { connect } from 'react-redux';
import { actionCreators } from '../store'

import Todo from "../components/Todo.jsx";

function Home({ todos, addTodo }) {
  const [text, setText] = useState('');

  function updateText(e) {
    setText(e.target.value);
  }

  function addNewTodo(e) {
    e.preventDefault();
    setText('');
    addTodo(text);
  }

  return (
    <>
      <form onSubmit={addNewTodo}>
        <input
          type="text"
          value={text}
          onChange={updateText}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              {...todo}
            />
          );
        })}
      </ul>
    </>
  );
};

function mapStateToProps(todos) {
  return { todos };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (text) => { dispatch(actionCreators.addTodo(text)) },
    deleteTodo: (id) => { dispatch(actionCreators.deleteTodo(id)) },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
