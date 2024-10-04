<script setup lang="ts">
const { name, title, styles, src } = defineProps(['name', 'title', 'styles', 'src'])
</script>

<template>
  <img :class="styles" :src="src" />
</template>
