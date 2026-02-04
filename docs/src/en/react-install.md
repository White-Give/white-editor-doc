# Installation

```bash
npm install @white-give/editor-react
# or using yarn
yarn add @white-give/editor-react
```

::: tip
white-editor is based on React, requires React version >= 19.0.0, and also requires tiptap version tiptap3.x. Node version >= 18.0.0.
:::

Import Component

```js
import { useWhiteEditor } from '@white-give/editor-react'
// Styles need to be imported separately
import '@white-give/editor-react/index.css'
```

::: tip
The style file of white-editor is independent and needs to be imported separately. The tailwindcss scope of white-editor is `.white-editor-namespace`. In the tailwindcss configuration file, `important` is used to increase priority and prevent host project styles from overriding.
:::
