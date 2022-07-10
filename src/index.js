import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { startVconsole } from './utils';
import Login from './containers/Login';

ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root'),
);

startVconsole();
