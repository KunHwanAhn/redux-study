import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Detail from './routes/Detail.jsx';

export default function App() {
  return (
    <div>
      <h1>TODO</h1>
      <Outlet />
    </div>
  );
}
