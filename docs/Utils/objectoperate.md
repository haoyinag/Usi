# 复杂类型操作

### 数组排序，{type} 1：从小到大 2：从大到小 3：随机

```ts
export const sort = (arr, type = 1) => {
  return arr.sort((a, b) => {
    switch (type) {
      case 1:
        return a - b;
      case 2:
        return b - a;
      case 3:
        return Math.random() - 0.5;
      default:
        return arr;
    }
  });
};
```

### 去重

```ts
export const unique = arr => {
  // ES6 去重
  if (Array.hasOwnProperty('from')) {
    return Array.from(new Set(arr));
  } else {
    // ES5 去重
    var n = {},
      r = [];
    for (var i = 0; i < arr.length; i++) {
      if (!n[arr[i]]) {
        n[arr[i]] = true;
        r.push(arr[i]);
      }
    }
    return r;
  }
};
```

### 求两个集合的并集

```ts
export const union = (a, b) => {
  var newArr = a.concat(b);
  return this.unique(newArr);
};
```

### 求两个集合的交集

```ts
export const intersect = (a, b) => {
  var _this = this;
  a = this.unique(a);
  return this.map(a, function(o) {
    return _this.contains(b, o) ? o : null;
  });
};

// Es6
export const intersect = (a, b) => {
  return new Set(a).filter(item => b.includes(item));
};
```

### 删除其中一个元素

```ts
export const remove = (arr, ele) => {
  var index = arr.indexOf(ele);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};
```

### 将类数组转换为数组

```ts
export const formArray = ary => {
  var arr = [];
  if (Array.isArray(ary)) {
    arr = ary;
  } else {
    arr = Array.prototype.slice.call(ary);
  }
  return arr;
};
```

### 求和

```ts
export const sum = arr => {
  // reduce：遍历数组，每次都把上一次返回的结果参与到下一次的计算中，直到cur为最后一个元素为止
  return arr.reduce((pre, cur) => {
    return pre + cur;
  });
};
```

### 平均值

```ts
export const average = arr => {
  return this.sum(arr) / arr.length;
};
```

### 判断两个对象是否键值相同

```ts
export const isObjectEqual = (a, b) => {
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  if (aProps.length !== bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

    if (a[propName] !== b[propName]) {
      return false;
    }
  }
  return true;
};
```

### 十六进制颜色转 RGBA 字符串

```ts
export const colorToRGB = (val, opa) => {
  var pattern = /^(#?)[a-fA-F0-9]{6}$/; //16进制颜色值校验规则
  var isOpa = typeof opa == 'number'; //判断是否有设置不透明度

  if (!pattern.test(val)) {
    //如果值不符合规则返回空字符
    return '';
  }

  var v = val.replace(/#/, ''); //如果有#号先去除#号
  var rgbArr = [];
  var rgbStr = '';

  for (var i = 0; i < 3; i++) {
    var item = v.substring(i * 2, i * 2 + 2);
    var num = parseInt(item, 16);
    rgbArr.push(num);
  }

  rgbStr = rgbArr.join();
  rgbStr =
    'rgb' + (isOpa ? 'a' : '') + '(' + rgbStr + (isOpa ? ',' + opa : '') + ')';
  return rgbStr;
};
```
