import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Register from './containers/Register';
import Login from '@containers/Login';

// import { startVconsole } from './utils';

ReactDOM.render(
  <React.StrictMode>
    {/* <Register /> */}
    <Login />
  </React.StrictMode>,
  document.getElementById('root'),
);

// vconsole
// startVconsole();
