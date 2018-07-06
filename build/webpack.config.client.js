const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge=require('webpack-merge')
const ExtractPlugin = require('extract-text-webpack-plugin')
const baseConfig=require('./webpack.config.base')

let config
const isDev = process.env.NODE_ENV === 'development'
const devServer={
    port: 8000,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    hot: true
  }
if(isDev){
    config=merge(baseConfig,{
        devtool: '#cheap-module-eval-source-map',
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                      "style-loader",
                      "css-loader",
                      {
                        loader: "postcss-loader",
                        options: {
                          sourceMap: true
                        }
                      },
                      "sass-loader"
                    ]
                  }
            ]
        },
        devServer,
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ]
    })
}else {
    config=merge(baseConfig,{
        entry:{
            app: path.join(__dirname,"../src/index.js"),
            vendor: ['vue']
          },
          output: {
              filename: '[name].[chuckhash:8].js'
          },
          module: {
              rules: [
                {
                    test: /\.scss$/,
                    use: ExtractPlugin.extract({
                      fallback: 'style-loader',
                      use: [
                        "css-loader",
                      {
                        loader: "postcss-loader",
                        options: {
                          sourceMap: true
                        }
                      },
                      "sass-loader"
                      ]
                    })
                } 
              ]
          },
          plugins: [
            new ExtractPlugin('styles.[contentHash:8].css'),
            new webpack.optimize.CommonsChunkPlugin({
              name: 'vendor'
            }),
            new webpack.optimize.CommonsChunkPlugin({
              name: 'runtime'
            })
          ]
    })
}