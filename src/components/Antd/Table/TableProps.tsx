/** 第三方库 */
import React, { memo, useState } from 'react';

/** 第三方组件 */
import { Table } from 'antd';

export interface TablePropsType {
  columns: any[];
  dataSource: any[];
  total: number;
  rowKey?: string;
  rowSelection?: Object;
  pagination?: Object;
  onPageChange?: Function;
}

/** 性能优化 */
function areEqual(preProps: TablePropsType, nextProps: TablePropsType) {
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
  }: TablePropsType) => {
    const [pageParams, setPageParams] = useState(initPage);

    const onChange = (page: number, size: number) => {
      setPageParams({
        current: page,
        pageSize: size,
      });
      onPageChange && onPageChange(page, size);
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
      onChange: (page: number, size: number) => onChange(page, size),
      onShowSizeChange: (page: number, size: number) => onChange(page, size),
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
