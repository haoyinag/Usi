# Axios

这个是别人写的，比较乱，凑合用

```ts
import $axios from 'axios';
import { message } from 'antd';
import _ from 'lodash';
import cookies from 'js-cookie';
import {
  rootDomain,
  apiHost,
  basicHost,
  publicDomain,
  prefix,
  prefix_shop,
} from '@/constants/api/host.js';

function createAxios() {
  const axios = $axios.create({
    baseURL: `${apiHost}`,
    withCredentials: true,
  });

  axios.interceptors.request.use(request => {
    // const token = sessionStorage.getItem('Auth-Token');
    const token = cookies.get('Auth-Token');

    if (token) {
      request.headers = {
        Authorization: token,
        ...request.headers,
      };
    }

    return request;
  });

  axios.interceptors.response.use(
    response => {
      if (response.headers.authorization) {
        const { token } = JSON.parse(response.headers.authorization);
        if (token) {
          // sessionStorage.setItem('Auth-Token', token);
          cookies.set('Auth-Token', token, { domain: `.${rootDomain}` });
        }
      }

      return response;
    },
    error => {
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        message.error(error.response.data.message);
      }
    },
  );

  return axios;
}

function wrapper(promise, option) {
  const SuccessCode = [0];
  const AuthFailedCode = [4001, 4003, 4004];
  const acceptContentType = ['application/octet-stream'];
  const newOption = {
    extract: true,
    ...option,
  };

  function validateData(response) {
    const code = _.get(response, ['data', 'code'], -1);
    const result = _.get(response, ['data', 'result'], -1);
    const isBlob = response.data.toString() === '[object Blob]';
    const isNoDataList = _.has(response, ['data', 'rows']);
    const errno = _.get(response, ['data', 'errno'], -1);
    const contentType = _.get(response, ['headers', 'content-type'], -1);
    // console.log(response.data);
    // console.log(isBlob);
    if (
      SuccessCode.includes(code) ||
      SuccessCode.includes(result) ||
      isBlob ||
      isNoDataList ||
      SuccessCode.includes(errno)
    ) {
      return response;
    }
    if (AuthFailedCode.includes(code)) {
      setTimeout(() => {
        top.location.href = `${publicDomain}/user/login`;
        // window.location.href = '/login';
      }, 1500);
      const errMsg = _.get(response, ['data', 'msg'], '业务出错了 请重试');
      throw new Error(errMsg);
    }
    if (response.status === 200 && response.data) {
      return response;
    }
    if (
      acceptContentType.filter(item => contentType.indexOf(item) > -1).length
    ) {
      // 下载文件
      // let url = window.URL.createObjectURL(new Blob([response.data]));
      // let link = document.createElement('a');
      // link.style.display = 'none';
      // link.href = url;
      // link.setAttribute('download', 'excel1111.xlsx');
      // document.body.appendChild(link);
      // link.click();
      return;
    }
    const errMsg = _.get(response, ['data', 'msg'], '业务出错了 请重试');
    throw new Error(errMsg);
  }

  function handleError(error) {
    // console.log(error)
    // message.error(error.toString());
    throw error;
  }

  function extract(response) {
    return newOption.extract ? _.get(response, ['data']) : response;
  }

  return promise
    .then(validateData)
    .then(extract)
    .catch(handleError);
}

const axios = createAxios();

const obj2formdata = obj => {
  const data = new FormData();
  Object.keys(obj).forEach(key => {
    if (Array.isArray(obj[key])) {
      obj[key].forEach(item => {
        data.append(key, item);
      });
    } else {
      data.append(key, obj[key]);
    }
  });
  return data;
};

function filterParams(obj) {
  if (obj) {
    const keys = Object.keys(obj);
    keys.forEach(item => {
      const value = obj[item];
      if (`${value}`.trim() === '' || value === null || value === undefined) {
        delete obj[item];
      }
    });
    return obj;
  }
}

const PREFIX = prefix;
const PREFIX_SHOP = prefix_shop;

export { axios, wrapper, obj2formdata, filterParams, PREFIX, PREFIX_SHOP };
```
