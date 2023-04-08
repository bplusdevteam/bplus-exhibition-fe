import axios from "axios";
import queryString from "query-string";

const stringifyParams = (data) => {
  const { params, option } = data;
  return queryString.stringify(params, {
    arrayFormat: "comma",
    encode: false,
    skipNull: true,
    skipEmptyString: true,
    ...option,
  });
};

export const API_URL = process.env.URL_API;

const defaultOptions = {};

function getApi(path, options = {}, apiURL) {
  return axios.get(`${apiURL || API_URL}/${path.replace(/^\//, "")}`, {
    ...defaultOptions,
    ...options,
    headers: {
      ...options.headers,
    },
  });
}

function postApi(path, data, options = {}) {
  return axios.post(`${API_URL}/${path.replace(/^\//, "")}`, data, {
    ...defaultOptions,
    ...options,
    headers: {
      'content-type': 'application/json',
      ...options.headers,
    },
  });
}

function putApi(path, data, options = {}) {
  return axios.put(`${API_URL}/${path.replace(/^\//, "")}`, data, {
    ...defaultOptions,
    ...options,
    headers: {
      ...options.headers,
    },
  });
}

function patchApi(path, data, options = {}) {
  return axios.patch(`${API_URL}/${path.replace(/^\//, "")}`, data, {
    ...defaultOptions,
    ...options,
    headers: {
      ...options.headers,
    },
  });
}

function deleteApi(path, options = {}) {
  return axios.delete(`${API_URL}/${path.replace(/^\//, "")}`, {
    ...defaultOptions,
    ...options,
    headers: {
      ...options.headers,
    },
  });
}

axios.interceptors.response.use(
  (response) => {
    let data = response?.data;

    return { ...response, data };
  },
  (error) => {
    // eslint-disable-next-line no-undef
    return Promise.reject(error);
  }
);

axios.interceptors.request.use(
  (config) => {
    const newConfig = { ...config };
    if (
      newConfig.headers &&
      newConfig.headers["Content-Type"] === "multipart/form-data"
    )
      return newConfig;
    if (config.params) {
      newConfig.params = config.params;
    }
    if (config.data) {
      newConfig.data = config.data;
    }
    return newConfig;
  },
  (error) => {
    return error;
  }
);

axios.defaults.paramsSerializer = (params) =>
  stringifyParams({
    params,
  });

const Api = {
  get: getApi,
  post: postApi,
  put: putApi,
  delete: deleteApi,
  patch: patchApi,
};

export default Api;
