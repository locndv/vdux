import { combineReducers } from 'redux';
import * as ActionTypes from '../actions';
import ipfsReducer from './ipfs';

const initialState = {
  topics: {},
  items: {}
};

const entities = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TOPICS.SUCCESS:
      return {
        ...state,
        topics: action.response
      };
    default:
      return state;
  }
};

const errorMessage = (state = null, action) => {
  const { type } = action;
  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null;
  }
  return state;
};

const router = (state = { pathname: '/' }, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_ROUTER_STATE:
      return action.state;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  entities,
  ipfs: ipfsReducer,
  errorMessage,
  router
});

export default rootReducer;
