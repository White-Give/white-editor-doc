# 文件

## 文件配置

```js
file: {
  allowedMimeTypes: [],
  maxSize: 1024 * 1024 * 100,
},
async onFileUpload(file: File || { url?: string }) {
  if (!file) {
    throw new Error('未找到要上传的文件')
  }
  console.log('onUpload', file)
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return {
    id: uuid4(),
    url: file.url ?? URL.createObjectURL(file),
    name: file.name,
    type: file.type,
    size: file.size,
  }
},
onFileDelete(id: string, url: string) {
  console.log(id, url)
},
```

## 文件配置说明

| 配置项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| allowedMimeTypes | array | [] | 允许的文件类型，例如 `['image/*', 'video/*', 'audio/*']` |
| maxSize | number | 1024 * 1024 * 100 | 最大文件大小，单位字节 |

------

| 事件 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| onFileUpload | function | 无 | 文件上传事件 |
| onFileDelete | function | 无 | 文件删除事件 |

### onFileUpload 事件说明

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| file | File or { url?: string } | 要上传的文件 |
| 返回值 | Promise<{ id: string, url: string, name: string, type: string, size: number }> | 上传成功后的文件信息 |

### onFileDelete 事件说明

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| id | string | 文件 ID |
| url | string | 文件 URL |