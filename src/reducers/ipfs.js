import { IPFS_CONFIG, SUCCESS } from '../actions';

const initialState = {
  api: 'QmPhxT9nZALsqWsn14AgkBichHQHXU73SAQx5FP8F6RfT9',
  gateways: ['https://ipfs.vgm.io', 'https://ipfs.io', 'https://storage3.bit.tube']
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IPFS_CONFIG[SUCCESS]:
      return {
        ...state,
        ...action.response
      };
    default:
      return state;
  }
};
