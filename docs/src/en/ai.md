# AI

## AI Configuration

```js
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
}
```

## AI Configuration Description

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| enabled | boolean | false | Whether to enable the AI intelligent assistant |
| maxlength | number | 100 | Maximum input length |
| sendMessage | function | None | Send message event |

### sendMessage Event Description

| Parameter | Type | Description |
| --- | --- | --- |
| payload | any | Message sent |
| Return Value | any | Message received |