import fetch from 'cross-fetch';
import * as ActionTypes from '../actions';
import entitiesReducer from './entities';

describe('reducers/entities', () => {
  it('return default state', () => {
    const newState = entitiesReducer({}, { type: 'anonymous' });
    expect(newState).toEqual({});
  });

  it('put topic payload to store and cache', async () => {
    const response = await fetch(
      'https://ipfs.io/ipfs/QmZyng1tJ863rJTNervc5XL8SYBHjRSRM3pwHnpG4KY821/topics/list/home.video.json'
    );
    const data = await response.json();
    const action = ActionTypes.topics.success('a-topic-url', data);
    const newState = entitiesReducer(undefined, action);
    expect(newState.topic).toEqual(data);
    expect(newState.topicsCache[data.url]).toEqual(data);
    const reCacheState = entitiesReducer(newState, action);
    expect(reCacheState).toEqual(newState);
  });
  it('put item payload to store and cache', () => {
    const response = await fetch('https://ipfs.io/ipfs/QmZyng1tJ863rJTNervc5XL8SYBHjRSRM3pwHnpG4KY821/topics/list/home.video.json');
    const data = await response.json();
    const action = ActionTypes.items.success('01-sermons.pastors.god-free-us';
    const newState = entitiesReducer(undefined, action);
    expect(newState.item).toEqual(data);
    expect(newState.itemsCache[data.url]).toEqual(data);
    const reCacheState = entitiesReducer(newState, action);
    expect(reCacheState).toEqual(newState);
  })
});
