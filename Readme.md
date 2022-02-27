这个是初版，后续我们商量一下说明好有哪些组件、页面，然后安排好路由和文件再开始写
里边有很多可能你感觉不清楚的库，其实很多都不一定用的上，也不需要花太多时间看文档，目前先看看 react hooks 和 sass 就行

# 基本配置

## 脚手架

脚手架使用 vite，相比于 create-react-app 主要是启动快很多，并且比较新，未来可以写到技术栈中。
具体的使用上没有太大区别

```
# 启动
yarn dev

# 打包
yarn build
```

### 特殊配置

脚手架配置了路径别名，可以通过以下几种方式代替长长的相对路径名：

| 别名       | 替换         |
| ---------- | ------------ |
| @          | ./src        |
| pages      | ./pages      |
| components | ./components |

意思就是，比如一个路径下的文件希望获取 src 目录下的某个文件，可能要这么写路径

```js
import "../../../style.scss";
```

可以通过别名写成简单形式，@相当于是 src 文件夹的绝对路径

```js
import "@/style.scss";
```

其他的也同理。

# 包

使用的包如下：

- react-router v5，官方文档在这里：https://v5.reactrouter.com/web/guides/quick-start，路由可以不着急看
- axios，相当于 ajax 的封装，可以看看教程，网上很多
- sass，https://www.sass.hk/
- ant design，ui 库，https://ant.design/docs/react/introduce-cn
- uuidjs，是一个用于产生 id 的库，也是直接可以网上搜到用法
- eslint，代码规范限制，编译的时候会在终端提示你代码中不合适的地方从而规范代码（不强制），目前的配置有：
  - 使用`===`而不是`==`
  - 不用`var`声明变量
  - 不用`alert`
  - const 声明的变量不能修改
  - 不能重复声明变量
- pubsub-js，一个方便组件间传简单数据的库，很简单好用，具体用法可以看网上教程；
- Recoil，状态管理库，简单了解基本用法（atom 和几个 hooks，不需要 selector）就好，官网：https://recoiljs.org/zh-hans/docs/introduction/getting-started，

# 文件结构

- components：组件，每个组件建一个文件夹，组件的 jsx 文件写在 index.jsx 中，样式写在 index.scss 中；
- pages：页面组件，都是路由页面，同样是组件，但是只用来展示，尽量不写入逻辑代码
- store：Recoil 状态管理的文件夹

后续如果有添加再补充
