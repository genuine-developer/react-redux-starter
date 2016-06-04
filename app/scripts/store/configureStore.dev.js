import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { apiMiddleware } from 'redux-api-middleware';
import createLogger from 'redux-logger';

import rootReducer from 'reducers/index';
import DevTools from 'components/DevTools';

const reducer = combineReducers(Object.assign({}, rootReducer, {
  routing: routerReducer
}));

const logger = createLogger();

export default (initialState = {}) => {
  const createStoreWithMiddleware = compose(
    applyMiddleware(thunk, routerMiddleware(browserHistory), apiMiddleware, logger), //  , diffLogger
    DevTools.instrument()
  )(createStore);

  const store = createStoreWithMiddleware(reducer, initialState);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('reducers/index', () => {
      store.replaceReducer(require('reducers/index').default);
    });
  }

  return store;
};
