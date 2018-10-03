import * as R from 'ramda';
import * as ActionTypes from '../actions';

const initialState = {
  topic: {},
  item: {},
  topicsCache: {},
  itemsCache: {}
};

export const assignTopic = jsonData => () => ({
  id: jsonData.id,
  list: jsonData.list,
  ...jsonData
});

export const assignItem = jsonData => () => ({
  id: jsonData.id,
  list: jsonData.list,
  ...jsonData
});

export const addToCache = jsonData => cache => {
  if (!R.prop(jsonData.url, cache)) {
    return {
      ...cache,
      [jsonData.url]: jsonData
    };
  }
  return cache;
};

const entitiesReducer = (state = initialState, action) => {
  const payload = R.dissoc('reqId', action.payload);
  switch (action.type) {
    case ActionTypes.TOPICS.SUCCESS:
      return R.evolve({
        topic: assignTopic(payload),
        topicsCache: addToCache(payload)
      })(state);
    case ActionTypes.ITEMS.SUCCESS:
      return R.evolve({
        item: assignItem(payload),
        itemsCache: addToCache(payload)
      })(state);
    default:
      return state;
  }
};

export default entitiesReducer;
