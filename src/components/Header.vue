<script setup lang="ts">
const { logo, title, href } = defineProps(["logo", "title", "href"])

</script>

<template>
  <div class="flex flex-row p-3">
    <a :href="href">
      <img class="inline w-8 mr-3" :src="logo" :alt="title" />
      <span> {{ title }} </span>
    </a>
  </div>
</template>
