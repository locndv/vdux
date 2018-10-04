import { action, createRequestTypes, REQUEST, SUCCESS, FAILURE } from './helpers';

export const PLAYER = createRequestTypes('PLAYER');
export const PLAYER_PLAYLIST = createRequestTypes('PLAYER_PLAYLIST');
export const PLAYER_LOAD_ITEM = 'PLAYER_LOAD_ITEM';
export const PLAYER_LOAD_PLAYLIST = 'PLAYER_LOAD_PLAYLIST';
export const PLAYER_PLAY_PAUSE = 'PLAYER_PLAY_PAUSE';
export const PLAYER_NEXT = 'PLAYER_NEXT';
export const PLAYER_PREV = 'PLAYER_PREV';

export const player = {
  request: itemUrl => action(PLAYER[REQUEST], { reqId: itemUrl }),
  success: (itemUrl, payload) => action(PLAYER[SUCCESS], { reqId: itemUrl, ...payload }),
  failure: (itemUrl, error) => action(PLAYER[FAILURE], { reqId: itemUrl, ...error })
};

export const playerPlaylist = {
  request: itemUrl => action(PLAYER_PLAYLIST[REQUEST], { reqId: itemUrl }),
  success: (itemUrl, payload) => action(PLAYER_PLAYLIST[SUCCESS], { reqId: itemUrl, ...payload }),
  failure: (itemUrl, error) => action(PLAYER_PLAYLIST[FAILURE], { reqId: itemUrl, ...error })
};

export const playerToggle = () => action(PLAYER_PLAY_PAUSE, {});
export const playerNext = () => action(PLAYER_NEXT, {});
export const playerPrev = () => action(PLAYER_PREV, {});
export const playerLoadItem = (hash, itemUrl) => action(PLAYER_LOAD_ITEM, { hash, itemUrl });
export const playerLoadPlaylist = (hash, topicUrl) =>
  action(PLAYER_LOAD_PLAYLIST, { hash, topicUrl });
