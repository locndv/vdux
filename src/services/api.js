import fetch from 'cross-fetch';

const API_ROOT = 'https://ipfs.io';

const callApi = endpoint => {
  const fullUrl = endpoint.indexOf(API_ROOT) ? API_ROOT + endpoint : endpoint;
  return fetch(fullUrl)
    .then(response => response.json().then(data => ({ data, response })))
    .then(({ data, response }) => {
      if (response.status >= 400) {
        Promise.reject(response);
      }
      return data;
    })
    .then(response => ({ response }), err => ({ error: err.message || 'Something bad happened' }));
};

export const fetchIPFSConfig = ipns => callApi(`/ipns/${ipns}`);
export const fetchTopics = (hash, topicUrl) => callApi(`/ipfs/${hash}/${topicUrl}.json`);
export const fetchItems = (hash, itemUrl) => callApi(`/ipfs/${hash}/${itemUrl}.json`);
