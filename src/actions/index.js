export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

const createRequestTypes = base =>
  [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});

// Entities Action Creators
export const TOPICS = createRequestTypes('TOPICS');
export const ITEMS = createRequestTypes('ITEMS');
export const SINGLE_TOPIC = createRequestTypes('SINGLE_TOPIC');
export const SINGLE_ITEM = createRequestTypes('SINGLE_ITEM');
export const IPFS_CONFIG = createRequestTypes('IPFS_CONFIG');

// Non-Entities Action Creators
export const UPDATE_ROUTER_STATE = 'UPDATE_ROUTER_STATE';
export const NAVIGATE = 'NAVIGATE';
export const LOAD_IPFS_CONFIG = 'LOAD_IPFS_CONFIG';
export const LOAD_TOPIC_PAGE = 'LOAD_TOPIC_PAGE';
export const LOAD_ITEM_PAGE = 'LOAD_ITEM_PAGE';
export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

export const action = (type, payload = {}) => ({ type, payload });

export const topics = {
  request: topicUrl => action(TOPICS[REQUEST], { reqId: topicUrl }),
  success: (topicUrl, payload) => action(TOPICS[SUCCESS], { reqId: topicUrl, ...payload }),
  failure: (topicUrl, error) => action(TOPICS[FAILURE], { reqId: topicUrl, ...error })
};

export const items = {
  request: itemUrl => action(ITEMS[REQUEST], { reqId: itemUrl }),
  success: (itemUrl, payload) => action(ITEMS[SUCCESS], { reqId: itemUrl, ...payload }),
  failure: (itemUrl, error) => action(ITEMS[FAILURE], { reqId: itemUrl, ...error })
};

export const ipfs = {
  request: ipns => action(IPFS_CONFIG[REQUEST], { reqId: ipns }),
  success: (ipns, payload) => action(IPFS_CONFIG[SUCCESS], { reqId: ipns, ...payload }),
  failure: (ipns, error) => action(IPFS_CONFIG[FAILURE], { reqId: ipns, ...error })
};

// export const updateRouterState = state => action(UPDATE_ROUTER_STATE, { state });
export const navigate = ({ pathname, screen }) => action(NAVIGATE, { pathname, screen });
export const loadIPFSConfig = ipns => action(LOAD_IPFS_CONFIG, { ipns });
export const loadTopicPage = (hash, topicUrl) => action(LOAD_TOPIC_PAGE, { hash, topicUrl });
export const loadItemPage = (hash, itemUrl) => action(LOAD_ITEM_PAGE, { hash, itemUrl });
export const resetErrorMessage = () => action(RESET_ERROR_MESSAGE);
