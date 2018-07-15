+ npm init
+ npm i webpack vue vue-loader
+ npm i webpack css-loader vue-template-compiler
+ npm i webpack style-loader url-loader file-loader
+ npm i webpack-dev-server
+ npm i cross-env (不区分MAC和Windows平台的命令)
+ 命令行定义 cross-env NODE_ENV=production
 webpack配置文件中获取 const isDev = process.env.NODE_ENV === 'development'
```
 config.devtool='#cheap-module-eval-source-map'//映射代码 帮助调试代码 编译后的代码不易读 不好定位错误
  config.devServer={
    port: 8000,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    hot: true
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),//热加载配置 避免页面整体刷新 实现局部刷新
    new webpack.NoEmitOnErrorsPlugin()
  )
```
+  npm i html-webpack-plugin

```
  new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV:isDev?'"development"':'"production"'
      }//编译过程获取及js中获取
    })
```
+ npm i postcss-loader autoprefixer babel-loader babel-core
+ npm i babel-preset-env babel-plugin-transform-vue-jsx
+ npm i babel-helper-vue-jsx-merge-props babel-plugin-syntax-jsx
+ npm i extract-text-webpack-plugin
+ npm i webpack-merge -D
+ npm i vue-style-loader -D
+ npm i rimraf -D //打包前刪除

+ npm i eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise + eslint-plugin-import eslint-plugin-node -D
+ npm i eslint-plugin-html -D
+ npm i eslint-loader babel-eslint -D
+ npm i husky -D

```
optimization: {
      splitChunks: {
        chunks: 'all' //讲node_modules的内容打包到vendor
      },
      runtimeChunk: true
    },
```

+ npm i vue-router -S
+ npm i vuex -S

+ 动态加载组件
当路由被访问的时候才加载对应组件
+ npm i babel-plugin-syntax-dynamic-import -D

```
{
    path: '/login',
    component: () => import('../login.vue')
  }
```
+ npm i babel-preset-stage-1 -D

+ 给vuex添加热更替功能

```
if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './getters/getters',
      './actions/actions'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newGetters = require('./getters/getters').default
      const newActions = require('./actions/actions').default

      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }
```

+ 服务端渲染
+ npm i vue-server-renderer -S
+ npm i koa -S
+ npm i koa-router -S
+ npm i axios -S
+ npm i memory-fs -D
+ npm i ejs -S

