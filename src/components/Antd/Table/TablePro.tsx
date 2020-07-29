/** 第三方库 */
import React, { ReactNode } from 'react';
import { debounce } from 'lodash'; // 防抖，如果对包有要求，尽量手写一个

/** 第三方组件 */
import { Spin } from 'antd';

/** 本地组件 */
import Filter from '../Filter';
import TableProps from './TableProps';

/** 本地util/Type */
import { ParamsItemType } from '../Filter';

export interface TableProType {
  loading?: boolean; // loading 效果
  // ==========Filter 参数==========
  extra?: ReactNode; // 额外内容，如外标签等，ReactNode类型
  autoSearch?: boolean; // 是否自动触发搜索
  onSearch?: Function; // 点击查询按钮
  onReset?: Function; // 点击重置按钮
  filterParams: ParamsItemType[]; // 查询条件，具体查看Filter
  // ==========table 参数==========
  total: number; // table的total
  columns: any[]; // table的columns
  dataSource: any[]; // table的dataSource
  rowKey?: string; // table的rowkey
  rowSelection?: Object; // table的rowSelection
  onPageChange?: Function; // 分页器change事件
}

// 页面--代码
export default ({
  loading, // loading 效果
  // ==========Filter 参数==========
  extra, // 额外内容，如外标签等，ReactNode类型
  autoSearch, // 是否自动触发搜索
  onSearch, // 点击查询按钮
  onReset, // 点击重置按钮
  filterParams, // 查询条件，具体查看Filter
  // ==========table 参数==========
  rowKey, // table的rowkey
  total, // table的total
  columns, // table的columns
  dataSource, // table的dataSource
  rowSelection, // table的rowSelection
  onPageChange, // 分页器change事件
  ...moreProps
}: TableProType) => {
  return (
    <Spin spinning={loading} tip="Loading...">
      <Filter
        // reset={reset}
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
        onPageChange={(page: number, size: number) =>
          onPageChange && onPageChange(page, size)
        }
        {...moreProps}
      />
    </Spin>
  );
};
