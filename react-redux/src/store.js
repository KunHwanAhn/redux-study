import { createStore } from 'redux';

const ADD = 'ADD';
const DELETE =  'DELETE';

const addTodo = (text) => ({ type: ADD, text });
const deleteTodo = (id) => ({ type: DELETE, id });

const reducer = (todos = [], action) => {
  switch (action.type) {
    case ADD:
      return [...todos, { text: action.text, id: Date.now() }];

    case DELETE:
      return todos.filter((todo) => todo.id !== parseInt(action.id, 10));

    default:
      return todos;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addTodo,
  deleteTodo,
}
export default store;
