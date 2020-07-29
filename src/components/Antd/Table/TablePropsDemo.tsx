/** 第三方库 */
import React from 'react';

/** 本地组件 */
import TableProps from './TableProps';

/** 本地util/Type */
import { TablePropsType } from './TableProps';

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

// 页面--代码
export default ({
  rowKey = '',
  total = 10, // table的total
  rowSelection, // table的rowSelection
  onPageChange, // 分页器change事件
}: TablePropsType) => {
  return (
    <TableProps
      rowKey={rowKey || 'key'}
      total={total}
      columns={columns}
      dataSource={dataSource}
      rowSelection={rowSelection}
      onPageChange={(page: number, size: number) =>
        onPageChange && onPageChange(page, size)
      }
    />
  );
};
