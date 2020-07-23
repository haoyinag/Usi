# 正则 Pattern

### 非特殊字符

```ts
const specialTextPattern = /^[\u4E00-\u9FA5A-Za-z0-9]+$/;
```

### emoji 表情

```ts
const iconRule2 = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi;
```

### 年龄

```ts
const agePattern = /^([1-9]|[0-9]{2}|100)$/;
```

### 数字+英文

```ts
const numEnTextPattern = /^[0-9a-zA-Z]+$/;
```

### 数字+小数点

```ts
const numPotTextPattern = /^(\d|\.)+(\.\d+)?$/;
```

### 数字+2 位小数点

```ts
const numPot2TextPattern = /^(\d+)(.\d{0,2})?$/;
```

### 非 0 数字

```ts
const numPattern = /^\d{1,}$/;
```

### 英文

```ts
const enPattern = /^[a-zA-Z]+$/;
```

### Email

```ts
const emailPattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
```

### 手机号码

```ts
const mobilePattern = /^1[0-9]{10}$/;
```
