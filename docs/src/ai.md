# ai

## ai 配置项

```js
ai: {
  enabled: true,
  maxlength: 100,
  async sendMessage(payload: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`这里是 AI 的回复。你发送了：${payload.input}`)
      }, 1000)
    })
  },
}
```

## ai 配置项说明

| 配置项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| enabled | boolean | false | 是否启用 AI 智能助手 |
| maxlength | number | 100 | 最大输入长度 |
| sendMessage | function | 无 | 发送消息事件 |

### sendMessage 事件说明

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| payload | any | 发送的消息 |
| 返回值 | any | 接收的消息 |
