<script setup lang="ts">
interface Props {
  logo: string
  title: string
  href: string
}

const { logo, title, href } = defineProps<Props>()
</script>

<template>
  <div class="flex flex-row p-3">
    <a :href="href">
      <img class="inline w-8 mr-3" :src="logo" :alt="title" />
      <span> {{ title }} </span>
    </a>
  </div>
</template>
