export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

const createRequestTypes = base =>
  [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});

export const TOPICS = createRequestTypes('TOPICS');
export const ITEMS = createRequestTypes('ITEMS');
export const SINGLE_TOPIC = createRequestTypes('SINGLE_TOPIC');
export const SINGLE_ITEM = createRequestTypes('SINGLE_ITEM');
export const IPFS_CONFIG = createRequestTypes('IPFS_CONFIG');

export const UPDATE_ROUTER_STATE = 'UPDATE_ROUTER_STATE';
export const NAVIGATE = 'NAVIGATE';
export const LOAD_IPFS_CONFIG = 'LOAD_IPFS_CONFIG';
export const LOAD_TOPIC_PAGE = 'LOAD_TOPIC_PAGE';
export const LOAD_ITEM_PAGE = 'LOAD_ITEM_PAGE';
export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

const action = (type, payload = {}) => ({ type, ...payload });

export const topics = {
  request: topicUrl => action(TOPICS[REQUEST], { topicUrl }),
  success: (topicUrl, response) => action(TOPICS[SUCCESS], { topicUrl, response }),
  failure: (topicUrl, error) => action(TOPICS[FAILURE], { topicUrl, error })
};

export const items = {
  request: itemUrl => action(ITEMS[REQUEST], { itemUrl }),
  success: (itemUrl, response) => action(ITEMS[SUCCESS], { itemUrl, response }),
  failure: (itemUrl, error) => action(ITEMS[FAILURE], { itemUrl, error })
};

export const ipfs = {
  request: ipns => action(IPFS_CONFIG[REQUEST], { ipns }),
  success: (ipns, response) => action(IPFS_CONFIG[SUCCESS], { ipns, response }),
  failure: error => action(IPFS_CONFIG[FAILURE], { error })
};

export const updateRouterState = state => action(UPDATE_ROUTER_STATE, { state });
export const navigate = pathname => action(NAVIGATE, { pathname });
export const loadIPFSConfig = (ipns, requiredFields = []) =>
  action(LOAD_IPFS_CONFIG, { ipns, requiredFields });
export const loadTopicPage = (hash, topicUrl, requiredFields = []) =>
  action(LOAD_TOPIC_PAGE, { hash, topicUrl, requiredFields });
export const loadItemPage = (hash, itemUrl, requiredFields = []) =>
  action(LOAD_ITEM_PAGE, { hash, itemUrl, requiredFields });
export const resetErrorMessage = () => action(RESET_ERROR_MESSAGE);
