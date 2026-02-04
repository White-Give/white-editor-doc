# Installation

```bash
npm install @white-give/editor-vue
# or using yarn
yarn add @white-give/editor-vue
```

::: tip
white-editor is based on Vue3, requires Vue3 version >= 3.0.0, and also requires tiptap version tiptap3.x. Node version >= 18.0.0.
:::

Import Component

```js
import { useWhiteEditor } from '@white-give/editor-vue'
// Styles need to be imported separately
import '@white-give/editor-vue/index.css'
```

::: tip
The style file of white-editor is independent and needs to be imported separately. The tailwindcss scope of white-editor is `.white-editor-namespace`. In the tailwindcss configuration file, `important` is used to increase priority and prevent host project styles from overriding.
:::
