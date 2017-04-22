import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';

// imports rootReducer that will be passed to createStore
import reducers from './reducers';

// imports routes for react-router
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(
	promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router
    	history = { browserHistory }
    	routes = { routes } />
  </Provider>
  , document.querySelector('.container'));
