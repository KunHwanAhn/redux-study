import { createStore } from 'redux';

const ACTION_ADD = 'ADD';
const ACTION_MINUS = 'MINUS';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.getElementById('number');

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ACTION_ADD:
      return count + 1;

    case ACTION_MINUS:
    return count - 1;

    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const increaseCount = () => {
  countStore.dispatch({ type: ACTION_ADD });
}
const decreaseCount = () => {
  countStore.dispatch({ type: ACTION_MINUS });
}
const updateNumber = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(updateNumber);

add.addEventListener('click', increaseCount);
minus.addEventListener('click', decreaseCount);
