# editor

## editor 配置项

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

## editor 配置项说明

| 配置项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| readOnly | boolean | false | 是否只读 |
| autofocus | boolean | false | 是否自动聚焦 |
| parseOptions | object | `{ preserveWhitespace: 'full' }` | 解析选项, 详细说明请参考 [tiptap 文档](https://tiptap.dev/api/editor#parseoptions) |
| editorProps | object | {} | 编辑器属性, 详细说明请参考 [tiptap 文档](https://tiptap.dev/api/editor#editorprops) |
| enableMarkdown | boolean | true | 是否启用 Markdown 语法, 详细说明请参考 [tiptap 文档](https://tiptap.dev/api/editor#enablemarkdown) |
