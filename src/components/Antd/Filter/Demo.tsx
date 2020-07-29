import React from 'react';

import Filter from './index';

// import { filterParams } from "./initData";
const filterParams = [
  {
    tagName: 'input',
    key: 'name',
    label: '模糊搜索',
    placeholder: '请输入姓名/ID/手机后4位/姓名地址',
  },
  {
    tagName: 'datepicker',
    key: 'datepickerItem',
    label: '创建日期',
  },
  {
    tagName: 'select',
    key: 'site',
    label: '姓名',
    defaultValue: null,
    placeholder: '请选择姓名',
    selectList: [
      {
        id: 0,
        name: '姓名1',
      },
      {
        id: 1,
        name: '姓名2',
      },
    ],
  },
  {
    tagName: 'treeselect',
    key: 'state',
    label: '状态',
    defaultValue: null,
    placeholder: '请选择状态',
    selectList: [
      {
        id: 0,
        name: '状态1',
        children: [
          {
            id: 10,
            name: '状态11',
          },
          {
            id: 11,
            name: '状态12',
          },
        ],
      },
      {
        id: 1,
        name: '状态2',
        children: [
          {
            id: 20,
            name: '状态21',
          },
          {
            id: 21,
            name: '状态22',
          },
        ],
      },
    ],
  },
];

export default () => {
  const onSearch = (values: any) => {
    console.log(values);
  };

  return (
    <Filter
      filterParams={filterParams}
      onSearch={(values: any) => onSearch(values)}
    />
  );
};
