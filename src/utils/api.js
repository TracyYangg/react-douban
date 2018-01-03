import axios from "axios";
import queryString from "query-string";
import forOwn from "lodash/forOwn";
import isObject from "lodash/isObject";

const paramsSerializer = params => queryString.stringify(params);

const jsonToFormEncoded = data => {
  const str = [];
  forOwn(data, (dataValue, dataKey) => {
    if (isObject(dataValue)) {
      const d = dataValue;
      forOwn(d, (value, key) => {
        if (value) {
          str.push(
            `${dataKey}[${encodeURIComponent(key)}]=${encodeURIComponent(
              value
            )}`
          );
        }
      });
    } else if (dataValue) {
      str.push(
        `${encodeURIComponent(dataKey)}=${encodeURIComponent(dataValue)}`
      );
    }
  });
  return str.join("&");
};

const interceptor = config => {
  if (config.headers["Content-Type"] === "application/x-www-form-urlencoded") {
    config.data = jsonToFormEncoded(config.data);
  }
  return config;
};

const addInterceptors = api => {
  api.interceptors.request.use(interceptor);
  api.interceptors.response.use(undefined, error => {
    //   if (error.response) {
    //     if (error.response.status === 401 || error.response.status === 403) {
    //       if (
    //         window.location.href &&
    //         window.location.href.indexOf('/login') < 0
    //       ) {
    //         history.replace('/login');
    //       }
    //     }
    //   } else if (error.message === 'Network Error') {
    //     console.log('网络错误，请检查网络后再试');
    //   }
    return Promise.reject(error);
  });
  return api;
};

export const api = addInterceptors(
  axios.create({
    baseURL: "http://localhost:4000",
    paramsSerializer,
    withCredentials: false
  })
);
