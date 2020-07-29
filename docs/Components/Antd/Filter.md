# Filter

`antd`搜索栏组件封装，满足日常开发大部分需求，可以按需迭代

## 何时使用

- 当需要使用到搜索条件的时候，如常见的列表页查询

## 代码演示

<code src="../../../src/components/Antd/Filter/Demo.tsx" />

## API

| 属性         |           说明           |                        类型                         |               是否必传                | 默认值 |
| ------------ | :----------------------: | :-------------------------------------------------: | :-----------------------------------: | ------ |
| filterParams |         查询条件         | <span style="color:#c41d7f">ParamsItemType[]</span> | <span style="color:green">true</span> |        |
| autoSearch   | 条件改变是否自动触发查询 |     <span style="color:#c41d7f">boolean</span>      |                                       | false  |
| onSearch     |           查询           |     <span style="color:#c41d7f">Function</span>     |                                       |        |
| onReset      |           重置           |     <span style="color:#c41d7f">Function</span>     |                                       |        |

### ParamsItemType

| 属性          |           说明            |                               类型                                |               是否必传                | 默认值 |
| ------------- | :-----------------------: | :---------------------------------------------------------------: | :-----------------------------------: | ------ |
| tagName       |      antd 的组件名称      |             <span style="color:#c41d7f">string</span>             |                                       | input  |
| key           |        搜索的 key         |             <span style="color:#c41d7f">string</span>             | <span style="color:green">true</span> |        |
| label         |     搜索展示的 label      |             <span style="color:#c41d7f">string</span>             |                                       |        |
| selectList    |      搜索的下拉 list      | <span style="color:#c41d7f">{ id: number; name: string }[]</span> |                                       |        |
| render        | render 函数替换默认的渲染 |            <span style="color:#c41d7f">Function</span>            |                                       |        |
| [key: string] |        更多参数...        |              <span style="color:#c41d7f">any</span>               |                                       |        |
