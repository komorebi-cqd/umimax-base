module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/layouts/**/*.tsx',
  ],
  corePlugins: {
    preflight: false, // 去掉 tailwindcss 的基础样式设置
  },
  important: true,
}
