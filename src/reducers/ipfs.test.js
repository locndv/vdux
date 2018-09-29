import { IPFS_CONFIG, SUCCESS, REQUEST, ipfs } from '../actions';
import ipfsReducer, { initialState } from './ipfs';

const ipns = 'QmPHK9NYBPMbpNgkey6QVjBe6E2bFX1BN1SzgfqcexKrcX';

describe('ipfs reducer', () => {
  it('return default state when load ipfs config', () => {
    const actionData = ipfs.request(ipns);
    const newState = ipfsReducer(initialState, actionData);
    expect(actionData.type).toEqual(IPFS_CONFIG[REQUEST]);
    expect(newState).toEqual(initialState);
  });

  it('add ipfs config to state', () => {
    const mockResponse = {
      api: 'newHash',
      gateways: ['another.gate.ways']
    };
    const actionData = ipfs.success(ipns, mockResponse);
    const newState = ipfsReducer(initialState, actionData);
    expect(actionData.type).toEqual(IPFS_CONFIG[SUCCESS]);
    expect(newState).toEqual(mockResponse);
  });
});
