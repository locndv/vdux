import { SUCCESS } from '../actions/helpers';
import { PLAYER, PLAYER_PLAY_PAUSE } from '../actions/player'; 

export const initialState = {
  item: {},
  topic: {},
  playlist: [],
  isPlaying: false
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER[SUCCESS]: 
      return {
        ...state,
        item: action.payload
      };
    case PLAYER_PLAY_PAUSE:
      return {
        ...state,
        isPlaying: !state.isPlaying
      }
    default:
      return state;
  }
};

export default playerReducer;
