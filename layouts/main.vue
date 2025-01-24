<template>
  <div>
    <nav>
      <Menu />
    </nav>

    <main>
      <slot />
    </main>

    <footer
      class="relative text-small font-light text-center m-4 absolute bottom-0"
    >
      <p>{{ layout.copyright }}</p>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import layout from '~/content/layout.json';

useHead({
  title: layout.metaTitle,
  meta: [{ name: 'description', content: layout.metaContent }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
});
</script>

<style lang="postcss" scoped></style>
