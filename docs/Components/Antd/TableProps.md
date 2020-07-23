# TableProps

`antd table`组件封装，满足日常开发大部分需求，可以按需迭代

## 实现逻辑

```ts
/** 第三方库 */
import React, { memo, useState } from 'react';

/** 第三方组件 */
import { Table } from 'antd';

/** 性能优化 */
function areEqual(preProps, nextProps) {
  return preProps === nextProps;
}

const initPage = {
  current: 1,
  pageSize: 10,
};

// 组件逻辑
export default memo(
  ({
    rowKey,
    rowSelection,
    columns,
    dataSource,
    pagination,
    total,
    onPageChange,
    ...props
  }) => {
    const [pageParams, setPageParams] = useState(initPage);

    const onChange = (page, size) => {
      setPageParams({
        current: page,
        pageSize: size,
      });
      onPageChange(page, size);
    };

    // 分页器
    const paginationProps = {
      ...pageParams,
      total,
      showSizeChanger: true,
      showQuickJumper: true,
      defaultPageSize: 10,
      hideOnSinglePage: false,
      pageSizeOptions: ['10', '20', '40'],
      onChange: (page, size) => onChange(page, size),
      onShowSizeChange: (page, size) => onChange(page, size),
      showTotal: () => (
        <span style={{ float: 'left' }}>
          {`共 ${total} 条记录 第${pageParams.current}/${Math.ceil(
            total / pageParams.pageSize,
          )}页`}
        </span>
      ),
    };

    return (
      <Table
        {...props}
        rowSelection={rowSelection}
        pagination={pagination || paginationProps}
        rowKey={rowKey || 'id'}
        columns={columns}
        dataSource={dataSource || []}
      />
    );
  },
  areEqual,
);
```

## Demo

```ts
/** 第三方库 */
import React from 'react';
import TableProps from './TableProps';

// 页面--代码
export default ({
  rowKey = '',
  loading, // loading 效果
  total, // table的total
  columns, // table的columns
  dataSource, // table的dataSource
  rowSelection, // table的rowSelection
  onPageChange, // 分页器change事件
  ...moreProps
}) => {
  return (
    <Spin spinning={loading} tip="Loading...">
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
