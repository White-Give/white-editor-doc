# api

## 事件说明

| 事件 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| created | function | 无 | 编辑器创建事件回调 |
| change | function | 无 | 编辑器内容改变事件回调 |
| change:selection | function | 无 | 编辑器选区改变事件回调 |
| change:transaction | function | 无 | 编辑器事务改变事件回调 |
| focus | function | 无 | 编辑器获得焦点事件回调 |
| blur | function | 无 | 编辑器失去焦点事件回调 |
| contentError | function | 无 | 编辑器内容错误事件回调 |
| destroy | function | 无 | 编辑器销毁事件回调 |

### 示例

```vue
<template>
  <white-editor @change="handleChange" @change:selection="handleSelectionChange" />
</template>

<script setup lang="ts">
function handleChange({ editor }) {
  console.log(editor)
}
function handleSelectionChange({ editor }) {
  console.log('selection update', editor)
}
</script>
```

## 方法

| 方法 | 参数 | 描述 | 返回值 |
| --- | --- | --- | --- |
| getOptions | 无 | 获取当前编辑器配置 | options |
| setOptions | options | 设置编辑器配置 | 无 |
| setLayout | layout: Layout | 设置布局 | 无 |
| setContent | content | 设置编辑器内容 | 无 |
| insertContent | content | 插入内容 | 无 |
| getText | 无 | 获取纯文本内容 | text |
| getHTML | 无 | 获取HTML内容 | html |
| getJSON | 无 | 获取JSON内容 | json |
| focus | 无 | 聚焦编辑器 | 无 |
| blur | 无 | 失去焦点 | 无 |
| getEditor | 无 | 获取编辑器实例 | editor |
| getSelectionText | 无 | 获取选中文本 | text |
| getSelectionNode | 无 | 获取选中节点 | node |
| deleteSelectionNode | 无 | 删除选中节点 | boolean |
| setCurrentNodeSelection | 无 | 选中当前节点 | boolean |
| changeDisabled | disabled: boolean | 禁用编辑器 | 无 |

### 示例

```vue
<template>
  <white-editor ref="editorRef" />
</template>

<script setup lang="ts">
const editorRef = ref()

console.log(editorRef.value.getOptions())

editorRef.value.focus()
</script>
```