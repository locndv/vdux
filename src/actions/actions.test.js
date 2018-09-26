import * as R from 'ramda';
import * as ActionTypes from '.';

const TYPES = [ActionTypes.SUCCESS, ActionTypes.FAILURE, ActionTypes.REQUEST];
const ENTITIES = [
  { name: 'TOPICS', data: ActionTypes.TOPICS },
  { name: 'ITEMS', data: ActionTypes.ITEMS }
];
describe('action', () => {
  it('should create three action type for each entity', () => {
    R.forEach(entity => {
      expect(ActionTypes).toHaveProperty(entity.name);
      R.forEach(type => {
        expect(ActionTypes[entity.name]).toHaveProperty(type);
      }, TYPES);
    }, ENTITIES);
  });
});
