# useDoubleClick

自定义双击事件：返回一个双击之后的事件

## 实现逻辑

```ts
import { useState } from '@tarojs/taro';

export function useDoubleClick() {
  const [lastClickTime, setClickTime] = useState(0);

  return callback => e => {
    const currentTime = e.timeStamp;
    const gap = currentTime - lastClickTime;
    if (gap > 0 && gap < 300) {
      callback && callback(e);
    }
    setClickTime(currentTime);
  };
}
```

## 使用

```ts
const textOnDoubleClick = useDoubleClick()

<Text
    onClick={textOnDoubleClick(() =>
        setEditing(true)
    )}
    >
    {title}
</Text>

```
