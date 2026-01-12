# ECharts

## ECharts Configuration

```js
echarts: {
  onSetOptions(data: any, config: any) {
    console.log('onSetOptions', data, config)
    return null
  },
},
```

## ECharts Configuration Description

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| onSetOptions | function | None | Custom chart configuration event. For detailed description, please refer to [ECharts Documentation](https://echarts.apache.org/en/option.html#echarts) |

### onSetOptions Event Description

| Parameter | Type | Description |
| --- | --- | --- |
| data | any | Chart data |
| config | any | Chart configuration |
| Return Value | any | Custom chart configuration |