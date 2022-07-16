// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    ['taro', {
      framework: 'vue3',
      ts: false
    }]
  ],
  plugins: [
    [
      "import",
      {
        "libraryName": "@nutui/nutui-taro",
        "libraryDirectory": "dist/packages/_es",
        "style": (name, file) => name.toLowerCase().replace('_es/', '') + '/index.scss',
        "camel2DashComponentName": false
      },
      'nutui3-taro'
    ],
    // [
    //   "import",
    //   {
    //     "libraryName": "@tarojs/components",
    //     "libraryDirectory": "dist/types/components.d.ts",
    //     "style": true,
    //     "camel2DashComponentName": false
    //   },
    //   'tarojs'
    // ]
  ]
}