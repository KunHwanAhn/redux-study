import React from "react";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Detail() {
  const { id } = useParams();
  const todo = useSelector((todos) => todos.find((todo) => todo.id === parseInt(id, 10)));

  return (
    <>
      <h2>{todo?.text}</h2>
      <h5>Created at: {todo?.id}</h5>
    </>
  );
};

export default Detail;
