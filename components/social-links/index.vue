<template>
  <div
    class="relative my-10 w-full flex flex-row justify-center items-center gap-4"
  >
    <a href="https://www.instagram.com/nikicomploi/" target="_blank">
      <img class="w-[40px] h-[40px]" :src="instagram" alt="instagram-icon" />
    </a>
    <a href="https://soundcloud.com/nikolauscomploi" target="_blank">
      <img class="w-[40px] h-[40px]" :src="soundcloud" alt="soundcloud-icon" />
    </a>
    <a
      href="https://open.spotify.com/artist/1WDLIUP5wCXhZorO4I18Uz"
      target="_blank"
    >
      <img class="w-[40px] h-[40px]" :src="spotify" alt="spotify-icon" />
    </a>
    <a
      href="https://music.apple.com/de/artist/me-the-monster/1436304893"
      target="_blank"
    >
      <img class="w-[40px] h-[40px]" :src="applemusic" alt="applemusic-icon" />
    </a>
  </div>
</template>

<script lang="ts" setup>
import instagram from '~/assets/social-icons/instagram-64.png';
import soundcloud from '~/assets/social-icons/soundcloud-50.png';
import spotify from '~/assets/social-icons/spotify-50.png';
import applemusic from '~/assets/social-icons/apple-music-48.png';
</script>

<style lang="postcss" scoped></style>
