# 布局

## 布局配置

```js
layout: {
  toc: {
    show: true,
  },
  toolbar: {
    show: true,
  },
  foot: {
    show: true,
    pageSize: true,
    character: true,
    copy: true,
    download: true,
  },
}
```

## 布局配置说明

| 配置项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| toc | object | `{ show: true }` | 是否显示目录 |
| toolbar | object | `{ show: true }` | 是否显示工具栏 |
| foot | object | `{ show: true, pageSize: true, character: true, copy: true, download: true }` | 是否显示底部栏 |
| foot.show | boolean | true | 是否显示底部栏 |
| foot.pageSize | boolean | true | 是否显示页面尺寸 |
| foot.character | boolean | true | 是否显示字数统计 |
| foot.copy | boolean | true | 是否显示复制按钮 |
| foot.download | boolean | true | 是否显示下载按钮 |