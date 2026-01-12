# Page

## Page Configuration

```js
page: {
  layout: 'page',
  showToc: false,
  toolbar: 'double',
  size: { key: 'A4', width: 21.0, height: 29.7 },
}
```

## Page Configuration Description

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| layout | string | 'page' | Default page layout, options: 'page': Page layout, 'web': Web layout |
| showToc | boolean | false | Whether to show table of contents by default |
| toolbar | string | 'double' | Toolbar layout, options: 'single': Single column layout, 'double': Double column layout |
| size | object | `{ key: 'A4', width: 21.0, height: 29.7 }` | Page size |