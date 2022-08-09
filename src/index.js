import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CxtProvider } from '@utils/context';

import Tweets from '@containers/Tweets';
import Comment from '@containers/Comment';
import CreatTweet from '@containers/CreateTweet';
import Tweet from '@containers/Tweet';
import Login from '@containers/Login';
import App from '@containers/App';
import Register from '@containers/Register';
import My from '@containers/My';

import './index.scss';

// import { startVconsole } from './utils';

ReactDOM.render(
  <CxtProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Tweets />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="comment/:id" element={<Comment />} />
          <Route path="createTweet" element={<CreatTweet />} />
          <Route path="tip" element={<Comment />} />
          <Route path="message" element={<Comment />} />
          <Route path="search" element={<Comment />} />
          <Route path="my" element={<My />} />
          <Route path="tweet/:id" element={<Tweet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </CxtProvider>,
  document.getElementById('root'),
);

// vconsole
// startVconsole();
