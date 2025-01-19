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
  const votes = data.value?.votes || []
  votes[index] = votes[index] + 1
  const res = await $fetch('/api/vote', {
    method: 'POST',
    body: {
      id: route.params.id,
      votes
    }
  })
  // TODO: error handler
  console.log('res: ', res)
}
</script>

<template>
  <main class="h-screen flex flex-col justify-center items-center">
    <div v-if="data && data.active">
      <h2 class="text-xl font-bold">
        {{ data.title }}
      </h2>
      <div class="flex flex-col mt-4">
        <button
          :disabled="btnDisabled"
          v-for="(option, index) in data.options"
          :key="index"
          class="btn rounded-lg mb-2"
          @click="submit(index)"
        >
          {{option}}
        </button>
      </div>

    </div>
    <h2 v-else class=" font-bold">
      This vote({{ route.params.id }}) doesn't exist or is closed.
    </h2>
  </main>
</template>