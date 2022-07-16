import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Register from './containers/Register';

import { startVconsole } from './utils';

ReactDOM.render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>,
  document.getElementById('root'),
);

// vconsole
startVconsole();
