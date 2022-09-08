import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './App.jsx';
import Home from './routes/Home.jsx';
import Detail from './routes/Detail.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path=':id' element={<Detail />} />
        </Route>
      </Routes>
    </Router>
  </Provider>
);
