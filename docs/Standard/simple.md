# 简述

无规矩不成方圆，一套规范良好的代码，起码可以有两方面的好处：

1. 提高团队开发效率。
2. 有利于项目的后期维护。

下面简单讲述一下前端日常开发的规范：

#### 1、代码注释

注释！注释！注释！想想自己接手一个没有注释的项目去维护的情景就能理解了。

> 值得注意的是，不要为了注释而注释，不然注释一多，页面看起来同样会不好看，避免这样的情况，就尽量使得自己的代码简洁、高效、易懂。

#### 2、代码格式化

代码提交前都应该执行格式化，并且统一格式化插件，如统一使用`prettier/Eslint/Tslint`等；

#### 3、命名

如文件夹/文件命名、组件命名、函数命名等，都应该尽量执行对应的如**大小驼峰命名、常量全大写**等命名规则；

> 如：src/pages/Manage/MyManage.tsx、function getList(){}、const THIS_ACTION_NAME = 'THIS_ACTION_NAME'等。

#### 4、代码引入顺序

划分类库、component、本地 utils、本文件 const 声明/处理等，规则尽可能统一；
![](https://upload-images.jianshu.io/upload_images/5644085-6c18b3ff476eb5d9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 5、页面 export

应该通过当前目录 index.js 适当组织代码，统一 export，减少 import 次数；
![](https://upload-images.jianshu.io/upload_images/5644085-f84224a2a933555a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 6、路由表模块化

路由表应该按需分成模块拆分引入，而不应该统一写在一个文件内
![](https://upload-images.jianshu.io/upload_images/5644085-d2c36815c6338335.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 7、组件封装强内聚

组件内部应尽可能的不含有业务逻辑，除非是多用性的业务类组件；

#### 8、git 分支提交代码规范

比如·Fixd：修复 xxxxbug--41234·，测试提交对应的 bug，后面是 bug 对应的 id；

#### 9、产品/后端接口不规范

**前端应该主动推动**，如产品需求文档不明确、后端接口字段语义不明/多个关联的接口同个类目返回的字段数目已经名称不一/表单使用 get 请求等，前端 er 们应该主动提出建议，并让对应负责人沟通，统一规范；
