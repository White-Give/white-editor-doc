# white-give-editor文档

这是一个tiptap3 + vue3 + tailwindcss 的富文本编辑器

使用方式：

1. 安装依赖

```bash
npm install white-give-editor
```

2. 引入

```js
import { useWhiteEditor } from '@white-give/editor-vue'
// 样式需要单独引入
import '@white-give/editor-vue/index.css'
```

3. 使用

```vue
<template>
  <white-editor @change="handleChange" />
</template>

<script setup lang="ts">
function handleChange(html: string) {
  console.log(html)
}
</script>
