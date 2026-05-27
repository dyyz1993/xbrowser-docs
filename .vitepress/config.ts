import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'xbrowser',
  description: 'AI Agent 的浏览器自动化 CLI',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/getting-started' },
      { text: '命令', link: '/guide/commands' },
      { text: '插件', link: '/plugins/plugin-guide' },
      { text: 'API', link: '/api/api' },
      { text: 'Marketplace', link: 'https://xbrowser.dev' },
    ],
    sidebar: {
      '/guide/': [
        { text: '快速开始', link: '/guide/getting-started' },
        { text: '命令参考', link: '/guide/commands' },
        { text: '链式执行', link: '/guide/chains' },
        { text: '架构设计', link: '/guide/architecture' },
        { text: '录制回放', link: '/guide/recording' },
      ],
      '/plugins/': [
        { text: '插件开发', link: '/plugins/plugin-guide' },
        { text: '插件元数据', link: '/plugins/plugin-metadata' },
        { text: 'SEO 插件', link: '/plugins/seo-plugins' },
        { text: '外链指南', link: '/plugins/backlinks-guide' },
      ],
      '/api/': [
        { text: 'HTTP API', link: '/api/api' },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dyyz1993/xbrowser' },
    ],
    footer: {
      message: 'MIT Licensed',
    },
  },
})
