# umi-request

基于`umi-request`封装的请求拦截器`依赖版本是umi3.1.1`

## 错误码匹配

```ts
// errorMaps.ts
export interface ErrMapItem {
  [key: number]: string;
}

export const codeMapsError: ErrMapItem = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  304: '返回缓存数据',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
```

## 请求域名

```ts
const env = API_ENV || 'dev'; // 环境变量
// 各个环境接口地址
const apiList = {
  dev: 'https://dev-xxx.com', // 开发环境
  test: 'https://test-xxx.com', // 测试环境
  pre: 'https://pre-xxx.com', // 预发布环境
  prod: 'https://pro-xxx.com', // 生产环境
};
export const API = apiList[env];
```

## 垫片

可能会需要垫片，不然`tslint`会报错

```ts
// src/typings.d.ts
declare const API_ENV: 'test' | 'dev' | 'pre' | 'prod';
```

## 打包配置

```json
// package.json
"scripts": {
    "start": "cross-env API_ENV=dev umi dev",
    "start:test": "cross-env API_ENV=test umi dev",
    "build:dev": "cross-env API_ENV=dev umi build",
    "build:test": "cross-env API_ENV=test umi build",
    "build:pre": "cross-env API_ENV=pre umi build",
    "build:prod": "cross-env API_ENV=prod umi build",
    "analyze": "cross-env ANALYZE=1 umi build",
    "postinstall": "umi generate tmp",
    "prettier": "prettier --write '**/*.{js,jsx,tsx,ts,less,md,json}'",
    "test": "umi-test",
    "test:coverage": "umi-test --colors --coverage"
  }
```

## 拦截封装

```ts
// src/services/request.ts
import { extend, ResponseError } from 'umi-request';
import { history } from 'umi';
import { message } from 'antd';

import { codeMapsError } from './errorMaps';

import { API } from './host';

export type MethodType = 'get' | 'post' | 'put' | 'delete';

export enum ErrorShowType {
  SILENT = 0, // 不提示错误
  WARN_MESSAGE = 1, // 警告信息提示
  ERROR_MESSAGE = 2, // 错误信息提示
  NOTIFICATION = 4, // 通知提示
  REDIRECT = 9, // 页面跳转
}

export interface RequestProps {
  (url: string, options: object, method?: MethodType): Promise<any>;
}

/**
 * 异常处理程序
 */
const errorHandler = (error: ResponseError) => {
  const { response, data = {} } = error;
  console.log(response);
  if (!response) {
    message.error('不明原因导致请求失败,请联系技术人员解决', 3);
    return response;
  }

  const errortext =
    codeMapsError[response?.status] || data?.message || response?.statusText;
  const { status } = response;
  message.error(errortext);
  console.log(status, response?.statusText, data?.message);
  if (status === 401) {
    return history.push('/user/login');
  }
  // 返回加一层是为了统一正确错误格式
  return { data };
};

export const isEmptyString = (str: any) => {
  return (
    typeof str === 'undefined' || str === null || str === '' || str.length < 0
  );
};

// 获取token
export const getAuthToken = () => {
  let _userInfo: any = sessionStorage.getItem('userInfo')
    ? sessionStorage.getItem('userInfo')
    : '';
  _userInfo = isEmptyString(_userInfo) ? '' : JSON.parse(_userInfo).token;
  return _userInfo;
};

/**
 * 配置request请求时的默认参数
 */
const requestNative = extend({
  timeout: 30000,
  prefix: API, // 前缀
  suffix: '', // 后缀
  // useCache: false, // 是否使用缓存（仅支持浏览器客户端），默认false
  ttl: 60000, // 缓存时长, 0 为不过期
  requestType: 'json', // post请求时数据类型  json / form
  parseResponse: true, //	是否对 response 做处理简化
  errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
  getResponse: true, // 是否获取源response, 返回结果将包裹一层
});

/**
 * 请求拦截器 可以添加loading等动作
 */
requestNative.interceptors.request.use((url, options) => {
  // message.loading({ content: "1Loading...", duration: 0 });
  return { url, options };
});

/**
 *
 * @param url url地址
 * @param options 选项
 * @param method 请求方法
 */
const request: RequestProps = (url, options, method = 'get') => {
  // message.loading("Loading...", 0);
  return new Promise((resolve, reject) => {
    requestNative[method](url, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'X-System-Id': '1',
        'X-Auth-Token': getAuthToken(),
      },
      ...options,
    })
      .then(response => {
        if (response?.data?.status === 200) {
          /** 哪怕请求成功，后台经常会返回null，所以页面为了处理，显式返回true */
          resolve(response?.data?.data || true);
        } else {
          reject(response?.data);
        }
      })
      .catch(error => {
        console.error(error);
        reject(error);
      });
  });
};

/**
 * get请求
 * @param url url
 * @param params 请求参数
 */
export const Get = (url: string, params: object = {}) => {
  return request(url, {
    params,
  });
};

/**
 * post请求
 * @param url url
 * @param data 请求参数
 */
export const Post = (url: string, data: object = {}) => {
  return request(
    url,
    {
      data,
    },
    'post',
  );
};

/**
 * PUT请求
 * @param url url
 * @param data 请求参数
 */
export const Put = (url: string, data: object = {}) => {
  return request(
    url,
    {
      data,
    },
    'put',
  );
};

/**
 * DELETE请求
 * @param url url
 * @param data 请求参数
 */
export const Delete = (url: string, data: object = {}) => {
  return request(
    url,
    {
      data,
    },
    'delete',
  );
};

export default request;
```

## 使用

```ts
import { request } from 'umi';

import { Get, Post } from './request';

const reqPrefix = `xxx`;

export async function login(params: Object | undefined) {
  return Post(`${reqPrefix}/login`, params);
}

export async function queryUsers() {
  return Get('/api/users');
}

export async function queryCurrent() {
  return request<API.CurrentUser>('/api/currentUser');
}

export async function queryNotices(): Promise<any> {
  return request('/api/notices');
}
```
