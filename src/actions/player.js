import { action, createRequestTypes, REQUEST, SUCCESS, FAILURE } from './helpers';

export const PLAYER = createRequestTypes('PLAYER');
export const PLAYER_LOAD_ITEM = 'PLAYER_LOAD_ITEM';
export const PLAYER_PLAY_PAUSE = 'PLAYER_PLAY_PAUSE';
export const PLAYER_NEXT = 'PLAYER_NEXT';
export const PLAYER_PREV = 'PLAYER_PREV';

export const player = {
  request: itemUrl => action(PLAYER[REQUEST], { reqId: itemUrl }),
  success: (itemUrl, payload) => action(PLAYER[SUCCESS], { reqId: itemUrl, ...payload }),
  failure: (itemUrl, error) => action(PLAYER[FAILURE], { reqId: itemUrl, ...error })
};

export const playerToggle = () => action(PLAYER_PLAY_PAUSE, {});
export const playerNext = () => action(PLAYER_NEXT, {});
export const playerPrev = () => action(PLAYER_PREV, {});
