import { IPFS_CONFIG, SUCCESS } from '../actions';

export const initialState = {
  api: 'QmaA74A4vTac23VKbRqBoV9f53LvUEFZqha5CVWydRwoKp',
  gateways: ['https://ipfs.vgm.io', 'https://ipfs.io', 'https://storage3.bit.tube']
};

const ipfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case IPFS_CONFIG[SUCCESS]:
      return {
        ...state,
        api: action.payload.api,
        gateways: action.payload.gateways
      };
    default:
      return state;
  }
};

export default ipfsReducer;
