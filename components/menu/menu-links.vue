<template>
  <div>
    <NuxtLink href="/">
      <a className="m-2">ABOUT</a>
    </NuxtLink>
    <NuxtLink href="/music">
      <a className="m-2">MUSIC</a>
    </NuxtLink>
    <NuxtLink href="/contact">
      <a className="m-2">CONTACT</a>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import about from '~/content/about.json';
</script>

<style lang="postcss" scoped></style>
