<template>
  <div class="upload-file">
    <input type="file" ref="inputRef" accept="image/*" @input="onFileChange" />
  </div>
</template>
<script lang="ts" setup>
import axios from 'axios'
const inputRef = ref<HTMLInputElement | null>(null)
const state = reactive({
  progress: 0,
  url: undefined,
})
const onFileChange = (val) => {
  if (!inputRef.value.files.length) return
  const file = inputRef.value.files[0]
  console.log('file: ', file)
  const formData = new FormData()
  formData.set('file', file)
  formData.set('filename', file.name)
  axios
    .post('/api/file/upload', formData, {
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        state.progress = percentCompleted
      },
    })
    .then((res) => {
      state.url = res.data.data
    })
}
</script>
