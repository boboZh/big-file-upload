<template>
  <div class="upload-file">
    <input type="file" ref="inputRef" accept="image/*" name="avatar" @input="onFileChange" />
  </div>
</template>
<script lang="ts" setup>
import axios from 'axios'
const inputRef = ref<HTMLInputElement | null>(null)
const state = reactive({
  progress: 0,
  url: undefined,
})
const handleClick = () => {
  console.log('input click')
}
const onFileChange = (event) => {
  console.log('onFileChange: ', event.target.files[0])
  if (!inputRef.value.files.length) return
  const file = inputRef.value.files[0]
  console.log('file: ', file)
  const formData = new FormData()
  formData.append('file', file)
  axios
    .post('/api/file/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
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
