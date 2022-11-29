<template>
  <div class="flex flex-col items-center my-10">
    <img
      :src="profileNiki"
      alt="niki-profile-image"
      class="w-[300px] h-[300px] rounded-full"
    />
    <h1 class="font-serif text-2xl font-light tracking-wide mt-4 border-b-2">
      {{ hero.headline }}
    </h1>
    <h2 class="font-light my-2">{{ hero.subheadline }}</h2>
  </div>
</template>

<script lang="ts" setup>
import hero from '~/content/hero.json';
import profileNiki from '~/assets/profile-niki.jpeg';
</script>

<style lang="postcss" scoped></style>
