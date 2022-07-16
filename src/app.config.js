export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  window: {
    navigationStyle: "custom"
    // backgroundTextStyle: 'light',
    // navigationBarBackgroundColor: '#fff',
    // navigationBarTitleText: 'WeChat',
    // navigationBarTextStyle: 'black'
  },
  // 按需注入和用时注入
  "lazyCodeLoading": "requiredComponents"
})
