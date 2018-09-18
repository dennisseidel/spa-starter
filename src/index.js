import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import './index.css';
import 'typeface-roboto';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

// import reducer
import auth from  './redux/users';
import products from './redux/products';

// combine to one
const todoApp = combineReducers({
  auth,
  products
})

// create store from reducer
const store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
