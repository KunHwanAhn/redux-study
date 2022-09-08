import { createStore } from 'redux';

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const todoForm = document.getElementById('todo-form');
const textInput = document.getElementById('text-input');
const todoContainer = document.getElementById('todo-container');

const reducer = (todos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...todos, { text: action.text, id: Date.now() }];

    case DELETE_TODO:
      return todos.filter((todo) => todo.id !== parseInt(action.id, 10));

    default:
      return todos;
  }
};

const addTodo = (text) => ({ type: ADD_TODO, text });
const deleteTodo = (id) => ({ type: DELETE_TODO, id });

const store = createStore(reducer);

const dispatchAddTodo = (newText) => {
  store.dispatch(addTodo(newText));
};

const dispatchDeleteTodo = (event) => {
  const id = event.target.parentNode.id;
  store.dispatch(deleteTodo(id));
};


const paintTodos = () => {
  const todos = store.getState();

  todoContainer.innerHTML = '';

  todos.forEach((todo) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerText = 'Delete';
    btn.style.marginLeft = '8px';
    btn.addEventListener('click', dispatchDeleteTodo)

    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(btn);

    todoContainer.appendChild(li);
  });
};

store.subscribe(paintTodos);


const submitTodo = (e) => {
  e.preventDefault();

  const newTodo = textInput.value;

  if (newTodo) {
    dispatchAddTodo(newTodo);
    textInput.value = "";
  }
};

todoForm.addEventListener("submit", submitTodo);
