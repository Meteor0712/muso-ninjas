<template>
  <form @submit.prevent="handleSubmit">
      <h4>Create New Playlist</h4>
      <input type="text" required placeholder="Playlist title" v-model="title">
      <textarea required placeholder="Playlist description..." v-model="description"></textarea>
      <!-- upload playlist image -->
      <label>Upload playlist cover image</label>
      <input type="file" @change="handleChange">
      <div class="error">{{ fileError }}</div>

      <div class="error"></div>
      <button>Create</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const title = ref('')
        const description = ref('')
        const file = ref(null)
        const fileError = ref(null)

        const handleSubmit = () => {
            if(file.value){
                console.log(title.value, description.value, file.value)
            }
        }

        // allowed file type
        const types = ['image/png', 'image/jpeg']
        
        const handleChange = (e) => {
            const seleted = e.target.files[0]
            console.log(seleted)
             
             if(seleted && types.includes(seleted.type)) {
                 file.value = seleted
                 fileError.value = null
             } else {
                 file.value = null
                 fileError.value = 'please selet an image file (png or jpg)'
             }
        }

        return { title, description, handleSubmit, handleChange, fileError }
    }

}
</script>

<style>
    input[type="file"] {
        border: 0;
        padding: 0;
    }
    label {
        font-size: 12px;
        display: block;
        margin-top: 20px;
    }
</style>