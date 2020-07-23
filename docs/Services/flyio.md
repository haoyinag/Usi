# Flyio

## 域名

```ts
// base.ts
let base: string;
// const hostName = window.location.hostname;
if (process.env.NODE_ENV === 'development') {
  base = '/api'; // 代理模式
  // base = `http://8.129.55.191`; // 非代理模式
} else {
  base = `http://8.129.55.191`;
}

export { base }; // 环境域名
```

## 错误码

```ts
// status.ts
export const errorCodes = [
  // 3xx - 重定向,
  {
    code: 301 || '301',
    msg: '缓冲的文档还可以继续使用',
  },
  // 4xx - 客户端错误,
  {
    code: 400 || '400',
    msg: '无效参数',
  },
  {
    code: 401 || '401',
    msg: '访问被拒绝',
  },
  {
    code: 403 || '403',
    msg: '资源不可用。服务器拒绝处理',
  },
  {
    code: 404 || '404',
    msg: '请求资源不存在',
  },
  {
    code: 405 || '405',
    msg: '请求方法错误',
  },
  {
    code: 406 || '406',
    msg: '请求类型不支持',
  },
  {
    code: 407 || '407',
    msg: '请先对请求进行授权',
  },
  {
    code: 415 || '415',
    msg: '不支持的媒体类型',
  },
  {
    code: 417 || '417',
    msg: '执行失败',
  },
  // 5xx - 服务器错误
  {
    code: 500 || '500',
    msg: '服务端错误',
  },
  {
    code: 501 || '501',
    msg: '服务器不支持该请求方法',
  },
  {
    code: 502 || '502',
    msg: '服务器无响应',
  },
  {
    code: 503 || '503',
    msg: '服务器无服务',
  },
  {
    code: 504 || '504',
    msg: '请求超时',
  },
  {
    code: 505 || '505',
    msg: '服务器不支持请求中所指明的HTTP版本',
  },
];
```

## 拦截器

```ts
// fly.ts
import qs from 'qs';
import fly, { FlyRequestConfig } from 'flyio';
import { Toast } from 'vant';

import { base } from './base';
import { errorCodes } from './status';

fly.config.baseURL = base; // 请求域名配置--添加了代理
fly.config.timeout = 20000;
fly.config.headers = {
  //   token,
  'Content-Type': 'application/json;charset=UTF-8',
};

//添加请求拦截器
fly.interceptors.request.use((request: FlyRequestConfig) => {
  // request.headers["X-Tag"] = "flyio"; //请求头设置方式二
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
  });
  if (request.method!.toUpperCase() === 'GET') {
    request.body = qs.stringify(request.body);
  }
  //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request;
});

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  response => {
    console.log(response);
    return new Promise((resolve, reject) => {
      //只将请求结果的data字段返回
      if (response.data.success) {
        setTimeout(() => {
          //   Toast.hide();
          return resolve(response.data);
        }, 350);
      } else {
        setTimeout(() => {
          //   Toast.hide();
          //   Toast.info(`${response.data.errorCode}:${response.data.errorMsg}`, 3);
          return reject(response.data);
        }, 350);
      }
    });
  },
  (err: any) => {
    const code = errorCodes.filter(code => code.code === err.status) || [];
    setTimeout(() => {
      //   Toast.hide();
      let text;
      if (code.length > 0) {
        text = code[0].msg;
      } else {
        switch (err.status) {
          case 0:
            text = `网络无连接，请检查网络后重试`; // 网络异常
            break;
          case 1:
            text = `网络不佳，请检查网络后重试`; // timeout超时
            break;
          default:
            text = `${err.status}:${err.message || '请求失败'}`;
            break;
        }
      }
      console.log(text);
      Toast.fail(text);
      //   Toast.fail(text, 3, () => {}, true);
    }, 350);
    //发生网络错误后会走到这里
    // console.log(err);
    return Promise.reject(err);
  },
);
export default fly;
```

## 使用

```ts
import fly from '@/services/fly'
//  有必要可以在封装一层 Get Post Modify Delete
fly.get('/user', {
    id: 133
})
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});

fly.post('/user', {
    name: 'Doris',
    age: 24
    phone:"1851xxxxxxx"
})
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});
```
