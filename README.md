 npm init 
 npm i webpack vue vue-loader
 npm i webpack css-loader vue-template-compiler
 npm i webpack style-loader url-loader file-loader
 npm i webpack-dev-server
 npm i cross-env (不区分MAC和Windows平台的命令)
 命令行定义 cross-env NODE_ENV=production
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
  npm i html-webpack-plugin

```
  new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV:isDev?'"development"':'"production"'
      }//编译过程获取及js中获取
    })
```
 npm i postcss-loader autoprefixer babel-loader babel-core
 npm i babel-preset-env babel-plugin-transform-vue-jsx
 npm i babel-helper-vue-jsx-merge-props babel-plugin-syntax-jsx
 npm i extract-text-webpack-plugin
 npm i webpack-merge -D