import _createStore from './store/configureStore';
import rootSaga from './sagas';

export const getStore = () => {
  // eslint-disable-next-line
  const initialState = window.__INITIAL_STATE__;
  const store = _createStore(initialState);
  store.runSaga(rootSaga);
  return store;
};

export const createStore = _createStore;
export * from './actions';
export * from './hocs';
