/** 第三方库 */
import React, { useState, useEffect } from 'react';

/** 第三方组件 */
import { message } from 'antd';

import TablePro from './TablePro';
import { mobilePattern } from '../../../utils/pattern';

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

const columns: any[] = [
  {
    title: '序号',
    render: (text: string) => `${text}`,
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
export default ({ list, total, loading = false }: any) => {
  const [pageParams, setPageParams] = useState(initPage);

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    getList();
  }, [pageParams]);

  // 获取列表
  const getList = async () => {
    if (pageParams && pageParams.pageNum && pageParams.pageSize) {
    }
  };

  /** 查询 */
  const onSearch = (val: any) => {
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
    render: (text: any, record: any): any => {
      // console.log(text, record)
      const str = `formulaCode=${record.formulaCode}&userName=${record.userName}&mobile=${record.mobile}`;
      return (
        <a
          href="#"
          onClick={() => {
            console.log('click');
          }}
          style={{ marginRight: '10px' }}
        >
          详情
        </a>
      );
    },
  };

  // 分页change
  const onPageChange = (page: number, size: number) => {
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
      onSearch={(e: any) => onSearch(e)}
      onPageChange={(page: number, size: number) => onPageChange(page, size)}
      total={total}
      columns={columns}
      dataSource={list}
    />
  );
};
