# echarts

## echarts 配置项

```js
echarts: {
  onSetOptions(data: any, config: any) {
    console.log('onSetOptions', data, config)
    return null
  },
},
```

## echarts 配置项说明

| 配置项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| onSetOptions | function | 无 | 自定义图表配置事件, 详细说明请参考 [echarts 文档](https://echarts.apache.org/zh/option.html#echarts) |

### onSetOptions 事件说明

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| data | any | 图表数据 |
| config | any | 图表配置 |
| 返回值 | any | 自定义图表配置 |
