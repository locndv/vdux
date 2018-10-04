import { take, put, call, fork, select, all } from 'redux-saga/effects';
import api from '../services';
import * as ActionTypes from '../actions';
import * as PlayerActions from '../actions/player';
import { getTopics } from '../reducers/selectors';

const { topics, items, ipfs } = ActionTypes;
const { player, playerPlaylist } = PlayerActions;

function* fetchEntity(entity, apiFn, hash, url) {
  yield put(entity.request(url));
  const { response, err } = yield call(apiFn, hash, url);
  if (response) {
    yield put(entity.success(url, response));
  } else {
    yield put(entity.failure(url, err));
  }
}

export const fetchIPFSConfig = fetchEntity.bind(null, ipfs, api.fetchIPFSConfig);
export const fetchTopics = fetchEntity.bind(null, topics, api.fetchTopics);
export const fetchItems = fetchEntity.bind(null, items, api.fetchItems);
export const fetchSingleItem = fetchEntity.bind(null, player, api.fetchSingleItem);
export const fetchPlaylist = fetchEntity.bind(null, playerPlaylist, api.fetchPlaylist);

function* loadTopics(hash, topicUrl) {
  const topicList = yield select(getTopics);
  if (!topicList || topicList.id !== topicUrl) {
    yield call(fetchTopics, hash, topicUrl);
  }
}

function* loadIPFSConfig(ipns) {
  yield call(fetchIPFSConfig, ipns);
}

function* loadSingleItem(hash, itemUrl) {
  yield call(fetchSingleItem, hash, itemUrl);
}

function* loadPlaylist(hash, topicUrl) {
  yield call(fetchPlaylist, hash, topicUrl);
}

function* watchLoadIPFSConfig() {
  while (true) {
    const action = yield take(ActionTypes.LOAD_IPFS_CONFIG);
    yield fork(loadIPFSConfig, action.payload.ipns);
  }
}

function* watchNavigate() {
  while (true) {
    yield take(ActionTypes.NAVIGATE);
    // const { pathname } = yield take(ActionTypes.NAVIGATE);
  }
}

function* watchLoadTopicPage() {
  while (true) {
    const {
      payload: { hash, topicUrl }
    } = yield take(ActionTypes.LOAD_TOPIC_PAGE);
    yield fork(loadTopics, hash, topicUrl);
  }
}

function* watchPlayerItem() {
  while (true) {
    const {
      payload: { hash, itemUrl }
    } = yield take(PlayerActions.PLAYER_LOAD_ITEM);
    yield fork(loadSingleItem, hash, itemUrl);
  }
}

function* watchLoadPlaylist() {
  while (true) {
    const {
      payload: { hash, topicUrl }
    } = yield take(PlayerActions.PLAYER_LOAD_PLAYLIST);
    yield fork(loadPlaylist, hash, topicUrl);
  }
}

export default function* root() {
  yield all([
    fork(watchLoadIPFSConfig),
    fork(watchNavigate),
    fork(watchLoadTopicPage),
    fork(watchPlayerItem),
    fork(watchLoadPlaylist)
  ]);
}
