import * as R from 'ramda';
import { SUCCESS, FAILURE, REQUEST } from './helpers';
import * as ActionTypes from '.';
import * as PlayerTypes from './player';

const AllTypes = { ...ActionTypes, ...PlayerTypes };

const TYPES = [SUCCESS, FAILURE, REQUEST];
const ENTITIES = [
  { name: 'TOPICS', data: AllTypes.TOPICS, actions: AllTypes.topics },
  { name: 'ITEMS', data: AllTypes.ITEMS, actions: AllTypes.items },
  { name: 'SINGLE_TOPIC', data: AllTypes.SINGLE_TOPIC },
  { name: 'SINGLE_ITEM', data: AllTypes.SINGLE_ITEM },
  { name: 'IPFS_CONFIG', data: AllTypes.IPFS_CONFIG, actions: AllTypes.ipfs },
  { name: 'PLAYER', data: AllTypes.PLAYER, actions: AllTypes.player },
  { name: 'PLAYER_PLAYLIST', data: AllTypes.PLAYER_PLAYLIST, actions: AllTypes.playerPlaylist }
];

describe('actions', () => {
  describe('create entities actions', () => {
    it('create three actions type for each entity', () => {
      R.forEach(entity => {
        expect(AllTypes).toHaveProperty(entity.name);
        R.forEach(type => {
          expect(AllTypes[entity.name]).toHaveProperty(type);
          expect(AllTypes[entity.name][type]).toEqual(`${entity.name}_${type}`);
        }, TYPES);
      }, ENTITIES);
    });

    it('create three action functions creator for each entity', () => {
      R.pipe(
        R.filter(entity => entity.actions !== undefined),
        R.forEach(entity => {
          R.forEach(type => {
            const actionType = R.toLower(type);
            const action = R.prop(actionType)(entity.actions);
            expect(action).not.toEqual(undefined);

            const mockRequestId = 'hello-world';
            const actionName = `${entity.name}_${type}`;
            R.cond([
              [
                R.equals('request'),
                () => {
                  const actionData = action(mockRequestId);
                  expect(actionData).toHaveProperty('type', actionName);
                  expect(actionData).toHaveProperty('payload', { reqId: mockRequestId });
                }
              ],
              [
                R.equals('success'),
                () => {
                  const mockResponseData = { hello: 'world' };
                  const actionData = action(mockRequestId, mockResponseData);
                  expect(actionData).toHaveProperty('type', actionName);
                  expect(actionData).toHaveProperty('payload', {
                    reqId: mockRequestId,
                    ...mockResponseData
                  });
                }
              ],
              [
                R.equals('failure'),
                () => {
                  const mockErrorData = { message: 'Network error' };
                  const actionData = action(mockRequestId, mockErrorData);
                  expect(actionData).toHaveProperty('type', actionName);
                  expect(actionData).toHaveProperty('payload', {
                    reqId: mockRequestId,
                    ...mockErrorData
                  });
                }
              ]
            ])(actionType);
            // entity.actions[actionName]('hello'); // ?
          })(TYPES);
        })
      )(ENTITIES);
    });
  });

  describe('create non-entities actions', () => {
    it('create navigate action', () => {
      const routeData = { pathname: '/muc-luc/video/home.video', screen: 'Video' };
      expect(ActionTypes.navigate(routeData)).toEqual({
        type: ActionTypes.NAVIGATE,
        payload: routeData
      });
    });

    it('create load ipfs config action', () => {
      const ipns = 'QmPHK9NYBPMbpNgkey6QVjBe6E2bFX1BN1SzgfqcexKrcX';
      expect(ActionTypes.loadIPFSConfig(ipns)).toEqual({
        type: ActionTypes.LOAD_IPFS_CONFIG,
        payload: { ipns }
      });
    });

    it('create load page actions', () => {
      const mockHash = 'QmPhxT9nZALsqWsn14AgkBichHQHXU73SAQx5FP8F6RfT9';
      const topicUrl = 'video';
      const itemUrl = 'video.item';
      expect(ActionTypes.loadTopicPage(mockHash, topicUrl)).toEqual({
        type: ActionTypes.LOAD_TOPIC_PAGE,
        payload: { hash: mockHash, topicUrl }
      });
      expect(ActionTypes.loadItemPage(mockHash, itemUrl)).toEqual({
        type: ActionTypes.LOAD_ITEM_PAGE,
        payload: { hash: mockHash, itemUrl }
      });
    });

    it('create reset error message action', () => {
      expect(ActionTypes.resetErrorMessage()).toEqual({
        type: ActionTypes.RESET_ERROR_MESSAGE,
        payload: {}
      });
    });
  });
});
