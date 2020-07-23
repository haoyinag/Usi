# Filter

`antd`搜索栏组件封装，满足日常开发大部分需求，可以按需迭代

## 实现逻辑

```ts
import React from 'react'; // "^16.12.0"
import {
  Form,
  Row,
  Col,
  Input,
  Button,
  InputNumber,
  AutoComplete,
  Select,
  DatePicker,
  TreeSelect,
  Switch,
  Cascader,
  TimePicker,
} from 'antd'; // "^4.4.3"
const { RangePicker } = DatePicker;

import { setKeystoLocaleLowerCase } from '@/utils';

const { Option } = Select;
const { TreeNode } = TreeSelect;

interface FilterProps {
  filterParams: any[];
  autoSearch?: boolean;
  onSearch?: Function;
  onReset?: Function;
  [key: string]: any;
}

export const Filter = ({
  extra, // 额外内容，如外标签等，ReactNode类型
  filterParams = [],
  autoSearch = false,
  onSearch,
  onReset,
  ...props
}: FilterProps) => {
  const [form] = Form.useForm();
  filterParams = setKeystoLocaleLowerCase(filterParams);

  const onFinish = (values: { [key: string]: string | number | undefined }) => {
    onSearch && onSearch(values);
  };

  const lisLen: number = filterParams.length;
  const span: number = lisLen >= 5 ? 4 : (24 - 2.5) / lisLen;

  const getFormElement = (tagname: string, oItem: any) => {
    /** onPressEnter会自动执行 */
    let item: any = {};
    for (let key in oItem) {
      if (oItem.hasOwnProperty(key)) {
        if (key !== 'defaultvalue') {
          item[key] = oItem[key];
        }
      }
    }
    item = {
      ...item,
      onChange: () => autoSearch && onFinish(form.getFieldsValue()),
      onSelect: () => autoSearch && onFinish(form.getFieldsValue()),
    };
    switch (tagname) {
      case 'input':
        return <Input allowClear {...item} />;
      case 'inputnumber':
        return <InputNumber min={0} {...item} />;
      case 'autocomplete':
        return (
          <AutoComplete
            allowClear
            options={item.options}
            filterOption={(inputValue: any, option: any) => {
              return (
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              );
            }}
            {...item}
          />
        );
      case 'switch':
        return <Switch checkedChildren="开" unCheckedChildren="关" {...item} />;
      case 'select':
        const selectlist = item.list || item.selectlist || [];
        return (
          <Select allowClear {...item}>
            {item.render && item.render()}
            {!item.render &&
              selectlist.map((cl: any) => {
                const oName = cl.key || cl.text || cl.name;
                return (
                  <Option key={cl.id} value={cl.id}>
                    {oName}
                  </Option>
                );
              })}
          </Select>
        );
      case 'treeselect':
        const treeSelectList = item.list || item.selectlist || [];
        return (
          <TreeSelect allowClear multiple {...item}>
            {item.render && item.render()}
            {!item.render &&
              treeSelectList.map((cl: any) => {
                const nodeName = cl.key || cl.text;
                return (
                  <TreeNode key={cl.id} value={cl.id} title={nodeName}>
                    {(cl.children || []).map((chil: any) => {
                      const subnodeName = chil.key || chil.text;
                      return (
                        <TreeNode
                          key={chil.id}
                          value={chil.id}
                          title={subnodeName}
                        />
                      );
                    })}
                  </TreeNode>
                );
              })}
          </TreeSelect>
        );
      case 'datepicker':
        return <DatePicker {...item} />;
      case 'rangepicker':
        return <RangePicker {...item} />;
      case 'timepicker':
        return <TimePicker {...item} />;
      case 'rangetimepicker':
        return <TimePicker.RangePicker {...item} />;
      case 'cascader':
        return <Cascader {...item} />;
      default:
        return '';
    }
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      {...props}
      onFinish={onFinish}
    >
      <Row gutter={24}>
        {filterParams.map((item: any, i: number) => {
          const tagname = (item.tagname || '').toLowerCase();

          if (tagname !== 'input' && item.rules) {
            // delete item.rules;
            item.rules = null;
          }

          const itemName = item.key;
          return (
            <Col
              span={tagname === 'switch' ? 2.5 : span}
              key={item.key + i}
              style={{
                minWidth: tagname === 'switch' ? 'auto' : '200px',
              }}
            >
              <Form.Item
                name={itemName}
                label={item.label}
                rules={item.rules ? [item.rules] : []}
              >
                {getFormElement(tagname, item)}
              </Form.Item>
            </Col>
          );
        })}

        <Col
          span={!extra ? 2.5 : 24 - +span}
          style={{ minWidth: '100px', textAlign: 'right', flex: 'auto' }}
        >
          <Button type="primary" htmlType="submit">
            查询
          </Button>
          <Button
            style={{ margin: '0 8px' }}
            onClick={() => {
              form.resetFields();
              onReset && onReset();
            }}
          >
            重置
          </Button>

          {extra}
        </Col>
      </Row>
    </Form>
  );
};
```

## 用到的函数

```ts
// setKeystoLocaleLowerCase.ts
/** 避免驼峰命名在React中引起属性命名冲突，key值全部换成小写 */
export const setKeystoLocaleLowerCase = (list: any) => {
  const arr: any[] = [];
  for (const iterator of list) {
    const item = {};
    for (const key in iterator) {
      if (iterator.hasOwnProperty(key)) {
        let lowStr = key.toLocaleLowerCase();
        const element = iterator[key];
        item[lowStr] = element;
      }
    }
    arr.push(item);
  }

  return arr;
};
```

## Demo

```ts
import React, { FC } from 'react';

import { PageHeaderWrapper } from '@ant-design/pro-layout';

import { Filter } from '@/components';

import './index.less';

// import { filterParams } from "./initData";
const filterParams = [
  {
    tagName: 'input',
    key: 'name',
    label: '模糊搜索',
    placeholder: '请输入姓名/ID/手机后4位/站点地址',
  },
  {
    tagName: 'datepicker',
    key: 'datepickerItem',
    label: '创建日期',
  },
  {
    tagName: 'select',
    key: 'site',
    label: '站点',
    defaultValue: null,
    placeholder: '请选择站点',
    selectList: [
      {
        id: 0,
        name: '站点1',
      },
      {
        id: 1,
        name: '站点2',
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

export const FilterDemo: FC<any> = () => {
  const onSearch = (values: any) => {
    console.log(values);
  };

  return (
    <PageHeaderWrapper title={<div></div>}>
      <Filter
        filterParams={filterParams}
        onSearch={(values: any) => onSearch(values)}
      />
    </PageHeaderWrapper>
  );
};
```
