# File

## File Configuration

```js
file: {
  allowedMimeTypes: [],
  maxSize: 1024 * 1024 * 100,
},
async onFileUpload(file: File || { url?: string }) {
  if (!file) {
    throw new Error('No file found to upload')
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

## File Configuration Description

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| allowedMimeTypes | array | [] | Allowed file types, e.g., `['image/*', 'video/*', 'audio/*']` |
| maxSize | number | 1024 * 1024 * 100 | Maximum file size in bytes |

------

| Event | Type | Default | Description |
| --- | --- | --- | --- |
| onFileUpload | function | None | File upload event |
| onFileDelete | function | None | File delete event |

### onFileUpload Event Description

| Parameter | Type | Description |
| --- | --- | --- |
| file | File or { url?: string } | File to upload |
| Return Value | Promise<{ id: string, url: string, name: string, type: string, size: number }> | File information after successful upload |

### onFileDelete Event Description

| Parameter | Type | Description |
| --- | --- | --- |
| id | string | File ID |
| url | string | File URL |