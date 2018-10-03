import { SUCCESS } from '../actions/helpers';
import { PLAYER, PLAYER_PLAYLIST, PLAYER_PLAY_PAUSE } from '../actions/player';

export const initialState = {
  item: {},
  topic: {},
  playlist: [],
  isPlaying: false
};

export const parsePlayList = topicData => topicData.list;

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_PLAY_PAUSE:
      return {
        ...state,
        isPlaying: !state.isPlaying
      };
    case PLAYER[SUCCESS]:
      return {
        ...state,
        item: action.payload
      };
    case PLAYER_PLAYLIST[SUCCESS]:
      return {
        ...state,
        topic: action.payload,
        playlist: parsePlayList(action.payload)
      };
    default:
      return state;
  }
};

export default playerReducer;
