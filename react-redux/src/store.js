import {
  configureStore,
  createAction,
  createReducer
} from '@reduxjs/toolkit';

const addTodo = createAction('ADD');
const deleteTodo = createAction('DELETE');

const reducer = createReducer([], (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    })
    .addCase(deleteTodo, (state, action) => state.filter((todo) => todo.id !== parseInt(action.payload, 10)));
})

const store = configureStore({ reducer });

export const actionCreators = {
  addTodo,
  deleteTodo,
}
export default store;
