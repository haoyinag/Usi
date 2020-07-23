# 文件操作

### 导出 excel/xlsx

**Get**

```ts
// get请求方法，直接通过url打开
// apiHost:请求域名  prefix请求服务  url:请求地址  data:请求参数
export const exportExcel = (data, url) => {
  let queryStr = '';
  Object.keys(data).forEach(key => {
    if (data[key] !== false && data[key] !== undefined && data[key] !== null) {
      queryStr += `&${key}=${data[key]}`;
    }
  });
  window.location.href = `${apiHost}${prefix}${url}?${queryStr}`;
};
```

**Post**

```ts
// 接口请求，axios已经设置拦截器并封装了一层
axios({
  url: `${prefix}/materials/export      `,
  data: {
    ...params,
  },
  method: 'POST',
  responseType: 'blob', // 如果返回的是数据/文件流，需要修改responseType为blob或者arraybuffer
});

// post请求方法，返回数据/文件流，请求的responseType要传"arraybuffer"或"blob"
// data就是请求返回的文件数据流，fileName是下载展示的文件名
export const exportExcelPost = (data, fileName) => {
  const link = document.createElement('a');
  const blob = new Blob([data], { type: 'application/x-excel' });
  link.style.display = 'none';
  link.href = URL.createObjectURL(blob);
  link.download = fileName || `导出.xlsx`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
```
