# 安装

```bash
npm install @white-give/editor-react
# 或者使用 yarn
yarn add @white-give/editor-react
```

::: tip
white-editor 基于 React，需要 React 版本 >= 19.0.0，同时也需要 tiptap 版本 tiptap3.x。Node 版本 >= 18.0.0。
:::

引入组件

```js
import { useWhiteEditor } from '@white-give/editor-react'
// 样式需要单独引入
import '@white-give/editor-react/index.css'
```

::: tip
white-editor 的样式文件是独立的，需要单独引入。white-editor 的 tailwindcss 作用域为 `.white-editor-namespace`。在 tailwindcss 配置文件中，使用了 `important` 来提高优先级，防止宿主项目样式覆盖。
:::
