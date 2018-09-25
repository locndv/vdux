import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from '../reducers';

export default initialState => {
  // eslint-disable-next-line
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(rootReducer, initialState, composeEnhancers(...enhancers));

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
};
