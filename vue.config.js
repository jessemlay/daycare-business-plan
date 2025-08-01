const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // Configure for GitHub Pages deployment
  publicPath: process.env.NODE_ENV === 'production' 
    ? '/daycare-business-plan/' 
    : '/',
  
  // Optimize build output
  configureWebpack: {
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
  },

  // Disable linting errors from breaking the build
  lintOnSave: 'warning',
})