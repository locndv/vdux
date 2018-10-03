import { action } from './helpers';

describe('Action Helpers', () => {
  it('create an action', () => {
    expect(action('SAMPLE_ACTION', { hello: 'world' })).toEqual({
      type: 'SAMPLE_ACTION',
      payload: { hello: 'world' }
    });
  });
});
