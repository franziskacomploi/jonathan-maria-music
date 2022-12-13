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
  @apply flex flex-row justify-center items-center bg-fixed w-full h-[350px] md:h-[500px];
}

.about-text {
  @apply p-4
      bg-white drop-shadow-xl overflow-scroll md:overflow-hidden rounded-lg
      w-[300px] md:w-[450px] h-[200px] md:h-[400px]
      text-center text-lg font-light;
}
</style>
