# Configuration

## Basic Configuration Example

```js
{
  document: {
    title: 'Untitled Document',
    content: '',
  },
  editor: {
    readOnly: false,
    autofocus: false,
    parseOptions: {
      preserveWhitespace: 'full',
    },
    editorProps: {},
    enableMarkdown: true,
  },
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
  },
  file: {
    allowedMimeTypes: [],
    maxSize: 1024 * 1024 * 100,
  },
  ai: {
    enabled: true,
    maxlength: 100,
    async sendMessage(payload: any) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(`This is a reply from AI. You sent: ${payload.input}`)
        }, 1000)
      })
    },
  },
  users: [
    { id: 'Cassielxd', label: 'Cassielxd' },
    { id: 'testuser', label: 'Test User' },
  ],
  echarts: {
    onSetOptions(data: any, config: any) {
      console.log('onSetOptions', data, config)
      return null
    },
  },
  page: {
    layout: 'page',
    showToc: false,
    toolbar: 'double',
    size: { key: 'A4', width: 21.0, height: 29.7 },
  },
  async onFileUpload(file: File & { url?: string }) {
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
}
```

### Line Height Data

```js
[
  {
    label: 'Single',
    value: 1,
  },
  {
    label: '1.5 lines',
    value: 1.5,
  },
  {
    label: '1.7 lines',
    value: 1.7,
    default: true,
  },
  {
    label: '2 lines',
    value: 2,
  },
  {
    label: '2.5 lines',
    value: 2.5,
  },
  {
    label: '3 lines',
    value: 3,
  },
]
```

### Page Size Data

```js
[
  { label: 'Web', layout: 'web' },
  { label: 'A4', width: 21.0, height: 29.7, default: true, layout: 'page' },
  { label: 'A3', width: 29.7, height: 42.0, layout: 'page' },
  { label: 'A5', width: 14.8, height: 21.0, layout: 'page' },
  { label: 'B5', width: 17.6, height: 25.0, layout: 'page' },
  {
    label: 'Envelope No. 5',
    width: 10.9,
    height: 12.9,
    layout: 'page',
  },
  {
    label: 'Envelope No. 6',
    width: 11.9,
    height: 22.9,
    layout: 'page',
  },
  {
    label: 'Envelope No. 7',
    width: 16.1,
    height: 22.8,
    layout: 'page',
  },
  {
    label: 'Envelope No. 9',
    width: 22.8,
    height: 32.3,
    layout: 'page',
  },
  {
    label: 'Legal',
    width: 21.5,
    height: 33.5,
    layout: 'page',
  },
]
```