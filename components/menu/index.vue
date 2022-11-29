<template>
  <div>
    <div class="md:hidden ml-6 mt-6">
      <arrow-button
        v-if="isMenuOpen"
        :active="isMenuOpen"
        :handleClick="handleClick"
        :icon="arrowLeft"
        alt="close hamburger menu"
      />
      <button v-else type="button" @click="handleClick">
        <img :src="hamburgerIcon" class="w-[40px] h-[40px]" alt="close menu" />
      </button>
    </div>

    <div v-if="isMenuOpen" class="md:hidden bg-white">
      <menu-links class="flex flex-col items-center" />
    </div>

    <div class="w-full hidden md:inline-block font-light text-xl my-4">
      <menu-links class="flex flex-row items-center justify-evenly" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import arrowLeft from '~/assets/arrow-left.svg';
import hamburgerIcon from '~/assets/hamburger.svg';

const isMenuOpen = ref<boolean>(false);

const handleClick = (): void => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style lang="postcss" scoped></style>
