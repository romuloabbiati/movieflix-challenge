import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import history from './history';

type LoginResponse = {
  access_token: string,
  token_type: string,
  expires_in: number,
  scope: string,
  userName: string,
  userId: number;
}

// export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';
export const BASE_URL =
  process.env.REACT_APP_BACKEND_URL ??
  'https://movieflix-devsuperior.herokuapp.com';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'myclientid';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'myclientsecret';

const tokenKey = 'authData';

type LoginData = {
  username: string;
  password: string;
};

export const requestBackendLogin = (loginData: LoginData) => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET),
  };

  const data = qs.stringify({
    ...loginData,
    grant_type: 'password',
  });

  return axios({
    method: 'POST',
    baseURL: BASE_URL,
    url: '/oauth/token',
    data,
    headers,
  });
};

export const saveAuthData = (obj : LoginResponse) => {
  localStorage.setItem(tokenKey, JSON.stringify(obj));
};

export const getAuthData = () => {
  const str = localStorage.getItem(tokenKey) ?? '{}';
  return JSON.parse(str) as LoginResponse;
};

export const requestBackend = (config: AxiosRequestConfig) => {
  return axios({...config, baseURL: BASE_URL});
};
// NAO SEI SE AINDA VOU USAR A FC requestBackend lecture 09-18


// Add a request interceptor
axios.interceptors.request.use(function (config) {
  //
  return config;
}, function (error) {
  //
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  //
  return response;
}, function (error) {
  if(error.response.status === 401 || error.response.status === 403) {
    history.push('/');
  }
  return Promise.reject(error);
});