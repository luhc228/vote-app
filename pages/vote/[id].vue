<script setup lang="ts">
import { ref } from 'vue'

const route = useRoute()
const btnDisabled = ref(false)

const { data } = await useFetch<API.Vote>('/api/vote', {
  query: {
    id: route.params.id,
  }
})

async function submit(index: number) {
  btnDisabled.value = true
  try {
    await $fetch('/api/vote', {
      method: 'POST',
      body: {
        id: route.params.id,
        optionIndex: index,
      }
    })
    alert('Thank you for voting!')
  } catch (error) {
    btnDisabled.value = false
    alert('Failed to submit vote. Please try again later.')
    console.error((error as Error).message)
  }
}
</script>

<template>
  <main class="h-screen flex flex-col justify-center items-center">
    <div v-if="data && data.active">
      <h2 class="text-2xl font-bold">
        {{ data.title }}
      </h2>
      <div class="flex flex-col mt-8 items-center">
        <button
          :disabled="btnDisabled"
          v-for="(option, index) in data.options"
          :key="index"
          class="btn rounded-2xl mb-3 w-48"
          @click="submit(index)"
        >
          {{option}}
        </button>
      </div>

    </div>
    <h2 v-else class="text-xl font-bold">
      This vote doesn't exist or is closed.
    </h2>
  </main>
</template>