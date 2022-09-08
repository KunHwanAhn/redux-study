import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

function Todo({ text, id, deleteTodo }) {
  return (
    <li>
      <Link to={`/${id}`}>
        { text }
      </Link>
       <button onClick={deleteTodo}>Delete</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteTodo: () => { dispatch(actionCreators.deleteTodo(ownProps.id)) }
  };
}

export default connect(null, mapDispatchToProps)(Todo);
