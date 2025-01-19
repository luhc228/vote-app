<script setup lang="ts">
const route = useRoute()

const { data: voteData } = await useFetch<API.Vote>('/api/vote', {
  query: {
    id: route.params.id,
  }
})

const totalVotes = computed(() => {
  if (!voteData) return NaN
  return voteData.value!.votes.reduce((sum, vote) => sum + vote, 0)
})
</script>

<template>
  <main class="h-screen flex flex-col justify-center items-center">
  <div v-if="voteData">
    <div class="space-y-3 sm:space-y-4 min-w-2xs">
      <div v-for="(option, index) in voteData.options" 
          :key="option" 
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded">
        <span class="font-medium text-gray-800 dark:text-white mb-2 sm:mb-0">
          {{ option }}
        </span>
        <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <div class="w-full sm:w-64 bg-gray-200 dark:bg-gray-600 rounded-full h-3 sm:h-4 overflow-hidden">
            <div class="bg-blue-500 dark:bg-blue-400 h-full transition-all duration-500" 
                :style="{ width: `${(voteData.votes[index] / totalVotes) * 100}%` }">
            </div>
          </div>
          <span class="text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">
            {{ voteData.votes[index] }} 票 ({{ ((voteData.votes[index] / totalVotes) * 100).toFixed(1) }}%)
          </span>
        </div>
      </div>
    </div>

    <div class="mt-4 sm:mt-6 text-right text-sm text-gray-600 dark:text-gray-400">
      总投票数：{{ totalVotes }} 票
    </div>
  </div>
  <div v-else>
    <h2 class="text-xl font-bold">
      This vote doesn't exist or is closed.
    </h2>
  </div>
</main>
</template>