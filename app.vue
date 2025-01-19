<template>
  <NuxtLayout>
    <div class="bg-white dark:bg-black">
      <div class="spotlight -bottom-1/2 fixed h-1/2 left-0 right-0"></div>
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<style>
.spotlight {
  background: linear-gradient(45deg, #00dc82, #36e4da 50%, #0047e1);
  filter: blur(20vh);
}
</style>