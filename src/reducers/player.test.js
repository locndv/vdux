import fetch from 'cross-fetch';
import * as PlayerActions from '../actions/player';
import playerReducer from './player';

describe('reducers/player', () => {
  it('return default state when no action in case', () => {
    const action = { type: 'NOT_AN_ACTION' };
    const newState = playerReducer({}, action);
    expect(newState).toEqual({});
  });

  it('toggle play pause state', () => {
    const action = PlayerActions.playerToggle();
    let newState = playerReducer(undefined, action);
    expect(newState.isPlaying).toEqual(true);
    newState = playerReducer(newState, action);
    expect(newState.isPlaying).toEqual(false);
  });

  it('request single item data and put to state', async () => {
    const itemUrl =
      '02-khoa-hoc-va-niem-tin.01-su-khoi-dau.1-tien-hoa-hay-sang-tao-deu-la-ton-giao';
    const reqUrl = `https://ipfs.io/ipfs/QmaA74A4vTac23VKbRqBoV9f53LvUEFZqha5CVWydRwoKp/items/single/${itemUrl}.json`;
    const response = await fetch(reqUrl);
    const data = await response.json();
    const action = PlayerActions.player.success(itemUrl, data);
    const newState = playerReducer(undefined, action);
    expect(newState.item).toHaveProperty('url', itemUrl);
  });

  it('request topic list and put to state', async () => {
    const itemUrl = '02-khoa-hoc-va-niem-tin.01-su-khoi-dau';
    const reqUrl = `https://ipfs.io/ipfs/QmaA74A4vTac23VKbRqBoV9f53LvUEFZqha5CVWydRwoKp/items/list/${itemUrl}.json`;
    const response = await fetch(reqUrl);
    const data = await response.json();
    const listLength = data.list.length;
    const action = PlayerActions.playerPlaylist.success(itemUrl, data);
    const newState = playerReducer(undefined, action);
    expect(newState.topic).toHaveProperty('url', itemUrl);
    expect(newState.playlist).toHaveLength(listLength);
  });
});
