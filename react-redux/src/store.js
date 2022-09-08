import {
  configureStore,
  createSlice,
} from '@reduxjs/toolkit';

const todos = createSlice({
  name: 'Todos',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => state.filter((todo) => todo.id !== parseInt(action.payload, 10)),
  }
})

const store = configureStore({ reducer: todos.reducer });

export const { add, remove } = todos.actions;
export default store;
