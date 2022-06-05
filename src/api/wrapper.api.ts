import axios, { AxiosResponse, Method } from 'axios';

const CToken = axios.CancelToken;
const previousRequests: any = {};
const baseURL = 'http://localhost:8080/' || '';
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('access_token') ? localStorage.getItem('access_token') : ''
    }`,
};

class WrapperRequest {
  post = <T = any>(url: string, params = {}, cancelPrevious = false) =>
    WrapperRequest.makeRequest<T>('post', url, params, cancelPrevious);

  put = <T = any>(url: string, params = {}, cancelPrevious = false) =>
    WrapperRequest.makeRequest<T>('put', url, params, cancelPrevious);

  patch = <T = any>(url: string, params = {}, cancelPrevious = false) =>
    WrapperRequest.makeRequest<T>('patch', url, params, cancelPrevious);

  get = <T = any>(url: string, params = {}, cancelPrevious = false) =>
    WrapperRequest.makeRequest<T>('get', url, params, cancelPrevious);

  delete = <T = any>(url: string, params = {}, cancelPrevious = false) =>
    WrapperRequest.makeRequest<T>('delete', url, params, cancelPrevious);

  static makeRequest<T>(
    method: Method,
    url: string,
    parameters: any,
    cancelPrevious: any
  ): Promise<T> {
    if (cancelPrevious && previousRequests[url]) {
      previousRequests[url].cancel();
    }
    let data;
    let params = {};
    let customHeaders = {};
    if (method === 'post' || method === 'patch' || method === 'put') {
      data = parameters;
    } else if (method === 'get') {
      params = parameters;
    }

    if (parameters.data) {
      data = parameters.data;
      customHeaders = parameters.headers;
    } else {
      data = parameters;
    }

    const instance = axios.create({ baseURL });
    const config: any = {
      method,
      baseURL,
      url,
      headers: {
        ...headers,
        ...customHeaders,
      },
      data,
      params,
      cancelToken: new CToken((c) => {
        if (!previousRequests[url]) {
          previousRequests[url] = {};
        }
        previousRequests[url].cancel = c;
      }),
    };

    instance.interceptors.response.use(
      (response: AxiosResponse<T>) => response.data || response,
      async (error: any) => {
        if (!error.response) {
          return Promise.reject(error);
        }

        return Promise.reject(error);
      }
    );

    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;

    return instance.request(config);
  }
}

export default WrapperRequest;
