import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import AppReducer from './reducers/App.jsx';
import {fetchCategories} from './actions/Actions.jsx';

let store = createStore(
  AppReducer,
  applyMiddleware(
    thunkMiddleware
  )
)

store.dispatch(fetchCategories());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
