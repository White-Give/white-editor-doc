import { defineConfig } from "vitepress";

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  base: '/white-editor-doc/',
  srcDir: './src',
  // Enable Dark/Light 模式
  appearance: true,
  head: [
    ['link', { rel: 'stylesheet', href: '/white-editor-doc/custom.css' }]
  ],
  themeConfig: {
    logo: '/white-editor-doc/white-give.png',
    search: {
      provider: 'local'
    }
  },
  locales: {
    root: {
      label: "简体中文",
      lang: "zh",
      title: "White-Editor",
      description:
        "White-Editor 是一个基于 Vue 3 和 tiptap 的现代所见即所得编辑器。",
      themeConfig: {
        nav: [{ text: "指南", link: "/start" }, { text: "示例", link: "https://gitee.com/white-vue/white-editor" }],
        sidebar: [
          {
            text: '简介',
            items: [
              { text: "White-Editor 是什么", link: "/what-is-white-editor" },
              { text: "快速开始", link: "/start" }
            ],
          },
          {
            text: '配置项',
            items: [
              { text: "基础配置", link: "/main" },
              { text: "document", link: "/document" },
              { text: "editor", link: "/editor" },
              { text: "layout", link: "/layout" },
              { text: "file", link: "/file" },
              { text: "echarts", link: "/echarts" },
              { text: "users", link: "/users" },
              { text: "page", link: "/page" },
              { text: "ai", link: "/ai" },
              { text: "Api", link: "/event" },
            ],
          },
        ],

        outline: {
          label: '页面导航',
        },

        docFooter: {
          prev: '上一页',
          next: '下一页',
        },

        lastUpdated: {
          text: '最后更新于',
        },

        darkModeSwitchLabel: '主题',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '回到顶部',
        langMenuLabel: '多语言',
      },
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
      title: "White-Editor",
      description:
        "White-Editor is a modern WYSIWYG editor based on Vue 3 and tiptap.",
      themeConfig: {
        nav: [{ text: "Guide", link: "/en/start" }, { text: "Example", link: "https://gitee.com/white-vue/white-editor" }],
        sidebar: [
          {
            text: 'Introduction',
            items: [
              { text: "What is White-Editor", link: "/en/what-is-white-editor" },
              { text: "Get Started", link: "/en/start" }
            ],
          },
          {
            text: 'Configuration',
            items: [
              { text: "Basic Configuration", link: "/en/main" },
              { text: "document", link: "/en/document" },
              { text: "editor", link: "/en/editor" },
              { text: "layout", link: "/en/layout" },
              { text: "file", link: "/en/file" },
              { text: "echarts", link: "/en/echarts" },
              { text: "users", link: "/en/users" },
              { text: "page", link: "/en/page" },
              { text: "ai", link: "/en/ai" },
              { text: "Api", link: "/en/event" },
            ],
          },
        ],

        outline: {
          label: 'On this page',
        },

        docFooter: {
          prev: 'Previous page',
          next: 'Next page',
        },

        lastUpdated: {
          text: 'Last updated',
        },

        darkModeSwitchLabel: 'Theme',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Return to top',
        langMenuLabel: 'Change Language',
      },
    },
  },
});
