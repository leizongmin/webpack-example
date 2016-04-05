'use strict';

import browserRequest from 'browser-request';

function promiseRequest(options) {
  return new Promise((resolve, reject) => {
    browserRequest(options, (err, res, body) => {
      if (err) return reject(err);
      resolve({res, body});
    });
  });
}


let apiPrefix = 'https://cnodejs.org/api/v1';
const apiClient = {};
export default apiClient;

apiClient.setPrefix = function (url) {
  apiPrefix = url;
}

apiClient.getPrefix = function () {
  return apiPrefix;
}

apiClient.request = function (method, path, data = {}) {
  method = method.toUpperCase();
  const options = {method, url: `${apiPrefix}/${path}`};
  if (method === 'GET' || method === 'HEAD') {
    options.qs = data;
  } else {
    options.form = data;
  }
  return promiseRequest(options).then(({res, body}) => {
    const data = JSON.parse(body.toString());
    if (data.error_msg) {
      return Promise.reject(data);
    } else {
      return Promise.resolve(data);
    }
  });
}

apiClient.getList = function (options = {}) {
  return apiClient.request('get', 'topics', options).then(ret => Promise.resolve(ret.data));
};
