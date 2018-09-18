import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import {
  BrowserRouter as Router
} from 'react-router-dom';
import './index.css';
import 'typeface-roboto';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

// import reducer
import auth from  './redux/users';
import products, { handleLoadProducts } from './redux/products';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// combine to one
const reducers = combineReducers({
  auth,
  products
})

// create store from reducer
const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
  );

// then run the saga
sagaMiddleware.run(handleLoadProducts)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
