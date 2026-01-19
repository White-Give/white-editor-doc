# Getting Started

## Installation

```bash
npm install @white-give/editor-vue
# or using yarn
yarn add @white-give/editor-vue
```

::: tip
white-editor is based on Vue3, requiring Vue3 version >= 3.0.0, and also requires tiptap version tiptap3.x. Node version >= 18.0.0.
:::

Import Component

```js
import { useWhiteEditor } from '@white-give/editor-vue'
// Style needs to be imported separately
import '@white-give/editor-vue/index.css'
```

::: tip
The style file of white-editor is separate and needs to be imported separately. The tailwindcss scope of white-editor is `.white-editor-namespace`. In the tailwindcss configuration file, `important` is used to increase priority to prevent host project styles from overriding it.
:::

## Usage

```js
import { createApp } from 'vue'
import { useWhiteEditor } from '@white-give/editor-vue'
import '@white-give/editor-vue/index.css'

const app = createApp(App)
// Register component, the second parameter is configuration options, default is empty object
app.use(useWhiteEditor, {})
```

------

```vue
<template>
  <white-editor @change="handleChange" />
</template>

<script setup lang="ts">
function handleChange(html: string) {
  console.log(html)
}
</script>
```