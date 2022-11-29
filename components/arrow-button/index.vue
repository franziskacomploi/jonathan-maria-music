<template>
  <template v-if="active">
    <button type="button" @click="handleClick">
      <img :width="size" :height="size" :src="icon" :alt="alt" />
    </button>
  </template>
</template>

<script lang="ts" setup>
import about from '~/content/about.json';

defineProps({
  handleClick: { type: Object as () => void, required: true },
  icon: Object,
  alt: String,
  size: Number,
  active: Boolean,
});
</script>

<style lang="postcss" scoped></style>
