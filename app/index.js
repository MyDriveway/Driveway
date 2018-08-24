import React from 'react';
import { render } from 'react-dom';
import store from './client/store';
import App from './client/App.jsx';

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);