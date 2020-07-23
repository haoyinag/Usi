# TablePro

整合`Filter`和`TableProps`后封装的组件，实现一行代码搞定`Filter+Table`页面

## 实现逻辑

```ts
/** 第三方库 */
import React from 'react';
import { debounce } from 'lodash'; // 防抖，如果对包有要求，尽量手写一个

/** 第三方组件 */
import { Spin } from 'antd';

import { Filter } from '@/components';
import TableProps from './TableProps';

// 页面--代码
export default ({
  loading, // loading 效果
  // Filter 参数
  extra, // 额外内容，如外标签等，ReactNode类型
  autoSearch, // 是否自动触发搜索
  onSearch, // 点击查询按钮
  onReset, // 点击重置按钮
  filterParams, // 查询条件，具体查看Filter
  // table 参数
  rowKey, // table的rowkey
  total, // table的total
  columns, // table的columns
  dataSource, // table的dataSource
  rowSelection, // table的rowSelection
  onPageChange, // 分页器change事件
  ...moreProps
}) => {
  return (
    <Spin spinning={loading} tip="Loading...">
      <Filter
        reset={reset}
        extra={extra}
        autoSearch={autoSearch}
        filterParams={filterParams}
        onReset={debounce(e => onReset && onReset(e), 350)}
        onSearch={debounce(e => onSearch && onSearch(e), 350)}
        {...moreProps}
      />

      <TableProps
        rowKey={rowKey || 'id'}
        total={total}
        columns={columns}
        dataSource={dataSource}
        rowSelection={rowSelection}
        onPageChange={(page, size) => onPageChange && onPageChange(page, size)}
        {...moreProps}
      />
    </Spin>
  );
};
```

## Demo

```ts
/** 第三方库 */
import React, { useState, useEffect } from 'react';
import { connect } from 'dva';

/** 第三方组件 */
import { message } from 'antd';

import TablePro from '@/components/Table/TablePro';
import redirect from '@/utils/redirect';
import { mobilePattern } from '@/utils/pattern';

// import { searchList, columns } from './initData';

const searchList = [
  {
    tagName: 'input',
    key: 'userName',
    label: '用户姓名',
  },
  {
    tagName: 'input',
    key: 'mobile',
    label: '手机号',
  },
];

const columns = [
  {
    title: '序号',
    render: (item, row, index) => `${index + 1}`,
  },
  {
    title: '用户姓名',
    dataIndex: 'userName',
    key: 'userName',
  },
  {
    title: '手机号',
    dataIndex: 'mobile',
    key: 'mobile',
  },
];

const initPage = {
  pageNum: 1,
  pageSize: 10,
};

// 原料类目页面--代码
export default connect(({ cashbacklist, loading }) => {
  return {
    ...cashbacklist,
    loading: !!loading.models.cashbacklist,
  };
})(({ list, total, loading, dispatch }) => {
  const [pageParams, setPageParams] = useState(initPage);

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    getList();
  }, [pageParams]);

  // 获取列表
  const getList = async () => {
    if (pageParams && pageParams.pageNum && pageParams.pageSize) {
      await dispatch({
        type: 'cashbacklist/fetchList',
        payload: {
          ...pageParams,
        },
      });
    }
  };

  /** 查询 */
  const onSearch = val => {
    if (val.mobile && !mobilePattern.test(val.mobile)) {
      return message.error('请输入正确手机号码');
    }
    setPageParams({
      ...val,
      pageNum: pageParams.pageNum,
      pageSize: pageParams.pageSize,
    });
  };

  // columns添加操作
  columns[6] = {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    render: (text, record) => {
      // console.log(text, record)
      const str = `formulaCode=${record.formulaCode}&userName=${record.userName}&mobile=${record.mobile}`;
      return (
        <a
          href="#"
          onClick={() => {
            const pageKey = Math.random();
            redirect({
              key: pageKey,
              name: '详情',
              path: `/xxx/xxx?${str}`,
            });
          }}
          style={{ marginRight: '10px' }}
        >
          详情
        </a>
      );
    },
  };

  // 分页change
  const onPageChange = (page, size) => {
    setPageParams({
      pageNum: page,
      pageSize: size,
    });
  };

  return (
    <TablePro
      rowKey="formulaId"
      loading={loading}
      filterParams={searchList}
      onSearch={e => onSearch(e)}
      onPageChange={(page, size) => onPageChange(page, size)}
      total={total}
      columns={columns}
      dataSource={list}
    />
  );
});
```
