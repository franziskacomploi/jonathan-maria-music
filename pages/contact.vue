<template>
  <div>
    <Hero />
    <p class="my-10 text-center">{contact.contact}</p>
  </div>
</template>

<script lang="ts" setup>
import contact from '~/content/contact.json';

definePageMeta({ layout: 'main' });
</script>

<style lang="postcss" scoped></style>
