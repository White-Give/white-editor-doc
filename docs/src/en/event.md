# API

## Event Description

| Event | Type | Default | Description |
| --- | --- | --- | --- |
| created | function | None | Editor creation event callback |
| change | function | None | Editor content change event callback |
| change:selection | function | None | Editor selection change event callback |
| change:transaction | function | None | Editor transaction change event callback |
| focus | function | None | Editor focus event callback |
| blur | function | None | Editor blur event callback |
| contentError | function | None | Editor content error event callback |
| destroy | function | None | Editor destroy event callback |

### Example

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

## Methods

| Method | Parameter | Description | Return Value |
| --- | --- | --- | --- |
| getOptions | None | Get current editor options | options |
| setOptions | options | Set editor options | None |
| setLayout | layout: Layout | Set layout | None |
| setContent | content | Set editor content | None |
| insertContent | content | Insert content | None |
| getText | None | Get plain text content | text |
| getHTML | None | Get HTML content | html |
| getJSON | None | Get JSON content | json |
| focus | None | Focus editor | None |
| blur | None | Blur editor | None |
| getEditor | None | Get editor instance | editor |
| getSelectionText | None | Get selected text | text |
| getSelectionNode | None | Get selected node | node |
| deleteSelectionNode | None | Delete selected node | boolean |
| setCurrentNodeSelection | None | Select current node | boolean |
| changeDisabled | disabled: boolean | Disable editor | None |

### Example

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