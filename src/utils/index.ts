/** 避免驼峰命名在React中引起属性命名冲突，key值全部换成小写 */
export const setKeystoLocaleLowerCase = (list: any) => {
  const arr: any[] = [];
  for (const iterator of list) {
    const item: any = {};
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
