export const action = (type, payload = {}) => ({ type, payload });

export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

/**
 * @example
 * createRequestTypes('SAMPLE')
 * => {
 *  'REQUEST': 'SAMPLE_REQUEST'
 *  'FAILURE': 'SAMPLE_FAILURE'
 *  'SUCCESS': 'SAMPLE_SUCCESS'
 * }
 *
 * @param {string} base Base Action Name
 */
export const createRequestTypes = base =>
  [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
