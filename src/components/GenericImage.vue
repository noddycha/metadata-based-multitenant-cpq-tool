<script setup lang="ts">
const { title, styles, src } = defineProps(['title', 'styles', 'src'])
</script>

<template>
  <img :class="styles" :src="src" :alt="title" />
</template>
