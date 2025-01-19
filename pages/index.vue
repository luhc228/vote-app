<template>
  <main class="h-screen flex flex-col justify-center items-center">
    <!-- TODO: LOGO -->

    <h2 class="text-4xl font-bold">
      Welcome to Vote App
    </h2>

    <section class="mt-6">
      <NuxtLink class="btn btn-primary rounded-lg" to="/vote-table">Create Your Vote</NuxtLink>
      <NuxtLink class="btn btn-outline btn-primary ml-4 rounded-lg" to="https://github.com/luhc228/vote-app" target="_blank" rel="noopener noreferrer">Documentation</NuxtLink>
    </section>
  </main>
</template>
