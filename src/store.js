import { fromJS } from 'immutable';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import rootSaga from './sagas';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

export default (initialState = {}) => {
  // eslint-disable-next-line
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(rootReducer(), fromJS(initialState), composeEnhancers(...enhancers));

  sagaMiddleware.run(rootSaga);
  store.asyncReducers = {};
  store.close = () => store.dispatch(END);

  return store;
};
