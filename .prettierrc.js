module.exports = {
  // Core formatting options
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'es5',
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'lf',
  printWidth: 100,

  // Vue specific options
  vueIndentScriptAndStyle: true,

  // HTML formatting
  htmlWhitespaceSensitivity: 'css',

  // Override for specific file types
  overrides: [
    {
      files: '*.vue',
      options: {
        parser: 'vue',
      },
    },
    {
      files: ['*.json', '.eslintrc', '.prettierrc'],
      options: {
        parser: 'json',
      },
    },
    {
      files: '*.md',
      options: {
        parser: 'markdown',
        proseWrap: 'always',
        printWidth: 80,
      },
    },
  ],
}
