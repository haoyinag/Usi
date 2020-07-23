# useChecked

把多选列表的单选、勾选、反勾选逻辑抽离

## 代码

```ts
import { useReducer } from 'react';

const CHECKED_CHANGE = 'CHECKED_CHANGE'; // 单选
const CHECKED_ALL_CHANGE = 'CHECKED_ALL_CHANGE'; // 全选/反选

interface CheckItemType {
  id: number;
  price: number;
  checked: boolean;
}

interface ActionType {
  type: 'CHECKED_CHANGE' | 'CHECKED_ALL_CHANGE';
  payload: {
    id?: number;
    checked: boolean;
  };
}

function reducer(state: CheckItemType[], action: ActionType) {
  const { type, payload } = action;
  const { id, checked } = payload;
  switch (type) {
    case CHECKED_CHANGE:
      state.forEach((element: CheckItemType) => {
        if (element.id === id) {
          element.checked = checked;
        }
      });
      return [...state];
    case CHECKED_ALL_CHANGE:
      state.forEach((element: CheckItemType) => {
        element.checked = checked;
      });
      return [...state];
    default:
      return state;
  }
}

export const useChecked = (list: CheckItemType[]) => {
  const [newCheckedList, dispatch] = useReducer(reducer, list);
  const checkedLength = newCheckedList.filter(
    (item: CheckItemType) => !item.checked,
  ).length;
  let checkedAll = false;
  if (checkedLength === 0) {
    checkedAll = true;
  } else {
    checkedAll = false;
  }
  return [newCheckedList, checkedAll, dispatch];
};
```

## Demo

```ts
const [newCheckedList, checkedAll, dispatchChecked] = useChecked(
  initList || [],
);
```
