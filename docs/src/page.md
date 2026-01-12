# 页面

## 页面配置

```js
page: {
  layout: 'page',
  showToc: false,
  toolbar: 'double',
  size: { key: 'A4', width: 21.0, height: 29.7 },
}
```

## 页面配置说明

| 配置项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| layout | string | 'page' | 默认页面布局，可选值：'page'：页面布局，'web'：网页布局 |
| showToc | boolean | false | 是否默认显示目录 |
| toolbar | string | 'double' | 工具栏布局，可选值：'single'：单栏布局，'double'：双栏布局 |
| size | object | `{ key: 'A4', width: 21.0, height: 29.7 }` | 页面尺寸 |