import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RuoyiAppBest",
  description: "若依移动端框架，支持H5、APP、微信小程序(其他未测)",
  theme: './theme/index.js', // 使用自定义主题
  // outDir: '../public', // 输出目录
  base: '/ruoyi-app-best-doc/', // 部署到github pages的路径
  head: [
    ['link', { rel: 'icon', href: '/ruoyi-app-best-doc/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/logo/logo.svg',
    search: {
      provider: 'local'
    },
    nav: [
      { text: '快速开始', link: '/docs/quick-start' }
    ],
    sidebar: [
      {
        text: '简介',
        items: [
          { text: '什么是RuoyiAppBest?', link: '/docs/what-is-ruoyi-uni-best' },
          { text: '快速开始', link: '/docs/quick-start' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Chow5566(周大锤)'
    }
  }
})
