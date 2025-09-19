const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // Configure for GitHub Pages deployment -- broke website on purpose change to / when ready to go live
  publicPath: '/',

  // Enable cache busting with file hashing
  filenameHashing: true,

  // Optimize build output with cache busting
  configureWebpack: {
    output: {
      // Add hash to chunk filenames for cache busting
      filename: '[name].[contenthash:8].js',
      chunkFilename: '[name].[contenthash:8].js',
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  },

  // Configure ESLint to show warnings instead of errors
  chainWebpack: (config) => {
    config.plugin('eslint').tap((args) => {
      args[0].emitWarning = true
      args[0].emitError = false
      args[0].failOnWarning = false
      args[0].failOnError = false
      return args
    })

    // Add cache busting for CSS files (only in production)
    if (process.env.NODE_ENV === 'production') {
      config.plugin('extract-css').tap((args) => {
        args[0].filename = '[name].[contenthash:8].css'
        args[0].chunkFilename = '[name].[contenthash:8].css'
        return args
      })
    }

    // Configure HTML plugin for cache busting
    config.plugin('html').tap((args) => {
      args[0].minify = {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        collapseBooleanAttributes: true,
        removeScriptTypeAttributes: true,
      }
      // Add cache busting meta tag
      args[0].meta = {
        'cache-control': 'no-cache, no-store, must-revalidate',
        pragma: 'no-cache',
        expires: '0',
      }
      return args
    })
  },

  // Disable linting errors from breaking the build
  lintOnSave: 'warning',

  // Configure dev server for cache busting during development
  devServer: {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
    },
  },
})
