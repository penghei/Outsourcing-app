# 秒杀系统用户端目录：

```
SpikeSystemApp
├─ node_modules
├─ .eslintcache
├─ .eslintignore
├─ .eslintrc.js
├─ .gitignore
├─ README.md
├─ index.html
├─ package.json
├─ src
│    ├─ App.jsx
│    ├─ App.scss
│    ├─ assest
│    ├─ components
│    │    ├─ Confirm
│    │    ├─ Goods
│    │    ├─ Layouts
│    │    ├─ Login
│    │    ├─ Shopping
│    │    └─ UserCenter
│    ├─ hooks
│    │    ├─ useFormatTime.js
│    │    └─ useStorage.js
│    ├─ images
│    │    └─ bank.png
│    ├─ main.jsx
│    ├─ myaxios
│    │    └─ interceptors.js
│    ├─ pages
│    │    ├─ HomePage
│    │    ├─ LoginPage
│    │    ├─ MainPages
│    │    └─ UserCenterPage
│    ├─ response_data_example
│    │    └─ index.js
│    ├─ sass
│    │    ├─ _color.scss
│    │    └─ _font.scss
│    ├─ store
│    │    └─ atoms.js
│    └─ styles
│           ├─ colors.scss
│           └─ default.scss
├─ vite.config.js
└─ yarn.lock
```

主要目录如下：

1. node_modules：依赖文件夹，其下是脚手架所需的各种包和依赖，从npm下载而来，比如React等框架核心文件就是放在整个文件夹下，是最大、最重的文件夹，但是不包含开发者代码；node_modules和package.json强相关，项目的依赖均根据package.json的配置安装，并且配置在gitignore中。
2. .eslintcache/.eslintignore/.eslintrc.js：eslint 相关配置文件，分别是eslint修改缓存、eslint忽略和eslint规则配置。后者是eslint的主要配置文件，在其中可以自定义规则和安装插件。
3. README.md：项目介绍文档
4. index.html：页面根 html。由React框架构建的主要是SPA应用，即单页面应用，整个应用中只有一个html文件（即该文件），作为静态资源自动生成。由于打包工具的特性，其他诸如scss、jsx等格式的文件都会被引入一个打包好的js文件中，再由该html文件引入打包好的js中，从而形成一个完整的项目。
5. package.json：包配置文件，和node_modules强相关，包含了项目安装的所有依赖信息。当执行`npm install`或`yarn`等安装全部依赖时，就根据此文件的配置安装。
6. src：主要代码文件夹，其下目录结构如下：
   - assest：静态资源，前端页面中使用的图片、svg等文件。主要应用在图标、倒计时等图片上，因此为了保证页面加载时尽快展示，不需要放置在服务器上，而是由脚手架自行保存。
   - components：组件，其下还有数个组件文件夹，还包含总计三十余个组件。组件是React应用的核心组成部分，比如一个导航栏、倒计时等都可以成为一个组件；一个组件单独成一个jsx文件，配合一个用于管理该组件中样式的scss文件。因此每个组件实际上是包含核心js代码的index.jsx文件和一个包含样式的index.scss文件构成的文件夹。
   - hooks：自定义、封装了一些常用函数，在本项目中主要有两个：一个是用于控制缓存的`useStorage`函数，一个是用于倒计时时间格式化的`useFormatTime`函数。这些函数由于复用性较高，因此将他们提取出来到单独的文件中，从而更方便复用。
   - pages：路由页面，实际上也是组件，但是主要为展示相关、直接配置在路由中的组件，因此为了和components（功能组件）区分，单独创建一个pages目录。
   - sass：sass 全局样式文件，由于sass中含有变量，因此把一些全局通用的颜色、尺寸等抽象为变量，直接存储在单独的顶层文件中，使用时引入并使用，这样既可以保证统一全局样式，同时对于切换主题等功能也只需要改动该文件下的即可。
   - store：Recoil 顶层状态存储文件，存储Recoil的全局状态。
7. vite.config.js：vite 配置文件，用于配置vite。

# 秒杀系统后台管理

```
BackStageApp
├─ .editorconfig
├─ .gitignore
├─ .prettierignore
├─ .prettierrc
├─ .umirc.ts
├─ README.md
├─ package.json
├─ src
│    ├─ .umi
│    ├─ atoms
│    │    └─ atoms.ts
│    ├─ components
│    │    ├─ Admin
│    │    ├─ Data
│    │    ├─ Layouts
│    │    ├─ Login
│    │    ├─ Settings
│    │    └─ UserLists
│    ├─ hooks
│    │    ├─ interceptors.ts
│    │    ├─ useGetBase64.ts
│    │    └─ useStorage.ts
│    ├─ pages
│    │    ├─ AdminPage
│    │    ├─ DataDisplayPage
│    │    ├─ LoginPage
│    │    ├─ SettingsPage
│    │    ├─ UserListPage
│    │    ├─ index.less
│    │    └─ index.tsx
│    ├─ static
│    │    ├─ glimmer.jpg
│    │    └─ glimmer.png
│    └─ types
│           └─ index.ts
├─ tsconfig.json
└─ yarn.lock
```

> .ts和.tsx后缀的文件是typescript文件

1. .prettierignore/.prettierrc：分别是prettier 忽略项和配置文件，是和prettier相关的文件。
2. .umirc.ts：脚手架 umi 配置文件
3. src：主要代码
   - .umi：umi 脚手架相关配置和代码，当创建umi项目时会自动携带该文件夹，其下有umi内部的代码，不由开发者编写。
   - atoms、hooks、components、pages：同上
   - static：静态文件，前端页面中使用的图片、svg等文件。主要应用在图标、倒计时等图片上，因此为了保证页面加载时尽快展示，不需要放置在服务器上，而是由脚手架自行保存。
   - types：typescript 类型文件，包含一些导出的类型
4. tsconfig.json：typescript 配置文件

# 秒杀系统首页

```
AdvertiseApp
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ src
│    ├─ Advertise
│    ├─ App.jsx
│    ├─ main.jsx
│    └─ sass
│           ├─ _color.scss
│           └─ _font.scss
├─ vite.config.js
└─ yarn.lock
```

1. src：
   - Advertise：主要代码文件夹，其下是各种组件和数据配置文件，主要用于 Ant design landing 的相关配置。其中代码大多数都是配置时自动生成，开发过程中几乎没有新增代码。
   > Ant design landing是一个可配置的模板库，通过选择模板并填入数据，在经过样式配置，就可以生成相对完整的首页模板。详见：https://landing.ant.design/index-cn

