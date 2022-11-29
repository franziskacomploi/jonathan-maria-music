<template>
  <div class="drums bg-about">
    <p class="about-text">{{ about.description }}</p>
  </div>
</template>

<script lang="ts" setup>
import about from '~/content/about.json';
</script>

<style lang="postcss" scoped>
.drums {
  background-position: bottom;
  background-size: cover;
  @apply relative bg-fixed w-full h-[350px] md:h-[500px];
}

.about-text {
  @apply absolute md:inset-x-1/3
      mx-6 mt-20 p-4
      bg-white drop-shadow-xl overflow-hidden rounded-lg
      max-w-lg md:max-w-xl max-h-[300px]
      text-center text-lg font-light;
}
</style>
