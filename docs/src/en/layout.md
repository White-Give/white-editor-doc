# Layout

## Layout Configuration

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

## Layout Configuration Description

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| toc | object | `{ show: true }` | Whether to show table of contents |
| toolbar | object | `{ show: true }` | Whether to show toolbar |
| foot | object | `{ show: true, pageSize: true, character: true, copy: true, download: true }` | Whether to show footer |
| foot.show | boolean | true | Whether to show footer |
| foot.pageSize | boolean | true | Whether to show page size |
| foot.character | boolean | true | Whether to show character count |
| foot.copy | boolean | true | Whether to show copy button |
| foot.download | boolean | true | Whether to show download button |