<template>
  <template v-if="active">
    <button type="button" @click="handleClick">
      <img :src="icon" class="w-[20px] h-[20px]" :alt="alt" />
    </button>
  </template>
</template>

<script lang="ts" setup>
defineProps({
  handleClick: { type: Object as () => void, required: true },
  icon: { type: String, required: true },
  alt: { type: String, default: 'arrow-button' },
  active: { type: Boolean, default: false },
});
</script>

<style lang="postcss" scoped></style>
