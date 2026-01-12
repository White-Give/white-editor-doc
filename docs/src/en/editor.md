# Editor

## Editor Configuration

```js
editor: {
  readOnly: false,
  autofocus: false,
  parseOptions: {
    preserveWhitespace: 'full',
  },
  editorProps: {},
  enableMarkdown: true,
}
```

## Editor Configuration Description

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| readOnly | boolean | false | Whether read-only |
| autofocus | boolean | false | Whether to autofocus |
| parseOptions | object | `{ preserveWhitespace: 'full' }` | Parse options. For detailed description, please refer to [tiptap documentation](https://tiptap.dev/api/editor#parseoptions) |
| editorProps | object | {} | Editor properties. For detailed description, please refer to [tiptap documentation](https://tiptap.dev/api/editor#editorprops) |
| enableMarkdown | boolean | true | Whether to enable Markdown syntax. For detailed description, please refer to [tiptap documentation](https://tiptap.dev/api/editor#enablemarkdown) |