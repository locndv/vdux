import * as R from 'ramda';
import * as PlayerActions from './player';

describe('Player Actions', () => {
  it('create playerToggle action', () => {
    expect(PlayerActions.playerToggle()).toEqual({
      type: PlayerActions.PLAYER_PLAY_PAUSE,
      payload: {}
    });
  });

  it('create playerNext action', () => {
    expect(PlayerActions.playerNext()).toEqual({
      type: PlayerActions.PLAYER_NEXT,
      payload: {}
    });
  });

  it('create playerPrev action', () => {
    expect(PlayerActions.playerPrev()).toEqual({
      type: PlayerActions.PLAYER_PREV,
      payload: {}
    });
  });

  it('create playerLoadPlaylist action', () => {
    const payload = {
      hash: 'meo',
      topicUrl: 'gau'
    };
    expect(PlayerActions.playerLoadPlaylist(payload.hash, payload.topicUrl)).toEqual({
      type: PlayerActions.PLAYER_LOAD_PLAYLIST,
      payload
    });
  });
});
