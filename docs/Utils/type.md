# 值类型

### 邮箱

```ts
const isEmail = (s: string) => {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
    s,
  );
};
```

### 手机号码

```ts
export const isMobile = s => {
  return /^1[0-9]{10}$/.test(s);
};
```

### 电话号码

```ts
export const isPhone = s => {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s);
};
```

### 是否 url 地址

```ts
export const isURL = s => {
  return /^http[s]?:\/\/.*/.test(s);
};
```

### 是否字符串

```ts
export const isString = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'String';
};
```

### 是否数字

```ts
export const isNumber = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Number';
};
```

### 是否 boolean

```ts
export const isBoolean = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean';
};
```

### 是否函数

```ts
export const isFunction = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Function';
};
```

### 是否为 null

```ts
export const isNull = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Null';
};
```

### 是否 undefined

```ts
export const isUndefined = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined';
};
```

### 是否对象

```ts
export const isObj = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Object';
};
```

### 是否数组

```ts
export const isArray = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Array';
};
```

### 是否时间

```ts
export const isDate = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Date';
};
```

### 是否正则

```ts
export const isRegExp = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp';
};
```

### 是否错误对象

```ts
export const isError = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Error';
};
```

### 是否 Symbol 函数

```ts
export const isSymbol = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol';
};
```

### 是否 Promise 对象

```ts
export const isPromise = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Promise';
};
```

### 是否 Set 对象

```ts
export const isSet = o => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Set';
};
```

### 检测密码强度

```ts
export const checkPwd = str => {
  var Lv = 0;
  if (str.length < 6) {
    return Lv;
  }
  if (/[0-9]/.test(str)) {
    Lv++;
  }
  if (/[a-z]/.test(str)) {
    Lv++;
  }
  if (/[A-Z]/.test(str)) {
    Lv++;
  }
  if (/[\.|-|_]/.test(str)) {
    Lv++;
  }
  return Lv;
};
```

### 判断类型集合

```ts
export const checkStr = (str, type) => {
  switch (type) {
    case 'phone': //手机号码
      return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
    case 'tel': //座机
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
    case 'card': //身份证
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
    case 'pwd': //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^[a-zA-Z]\w{5,17}$/.test(str);
    case 'postal': //邮政编码
      return /[1-9]\d{5}(?!\d)/.test(str);
    case 'QQ': //QQ号
      return /^[1-9][0-9]{4,9}$/.test(str);
    case 'email': //邮箱
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
    case 'money': //金额(小数点2位)
      return /^\d*(?:\.\d{0,2})?$/.test(str);
    case 'URL': //网址
      return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(
        str,
      );
    case 'IP': //IP
      return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(
        str,
      );
    case 'date': //日期时间
      return (
        /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(
          str,
        ) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
      );
    case 'number': //数字
      return /^[0-9]$/.test(str);
    case 'english': //英文
      return /^[a-zA-Z]+$/.test(str);
    case 'chinese': //中文
      return /^[\\u4E00-\\u9FA5]+$/.test(str);
    case 'lower': //小写
      return /^[a-z]+$/.test(str);
    case 'upper': //大写
      return /^[A-Z]+$/.test(str);
    case 'HTML': //HTML标记
      return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
    default:
      return true;
  }
};
```

### 严格的身份证校验

```ts
export const isCardID = sId => {
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
    console.log('你输入的身份证长度或格式错误');
    return false;
  }
  //身份证城市
  var aCity = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外',
  };
  if (!aCity[parseInt(sId.substr(0, 2))]) {
    console.log('你的身份证地区非法');
    return false;
  }

  // 出生日期验证
  var sBirthday = (
      sId.substr(6, 4) +
      '-' +
      Number(sId.substr(10, 2)) +
      '-' +
      Number(sId.substr(12, 2))
    ).replace(/-/g, '/'),
    d = new Date(sBirthday);
  if (
    sBirthday !=
    d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()
  ) {
    console.log('身份证上的出生日期非法');
    return false;
  }

  // 身份证号码校验
  var sum = 0,
    weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
    codes = '10X98765432';
  for (var i = 0; i < sId.length - 1; i++) {
    sum += sId[i] * weights[i];
  }
  var last = codes[sum % 11]; //计算出来的最后一位身份证号码
  if (sId[sId.length - 1] != last) {
    console.log('你输入的身份证号非法');
    return false;
  }

  return true;
};
```

### 函数节流器

```ts
export const debouncer = (fn, time, interval = 200) => {
  if (time - (window.debounceTimestamp || 0) > interval) {
    fn && fn();
    window.debounceTimestamp = time;
  }
};
```
