<script setup lang="ts">
const { name, title, text, styles } = defineProps(['name', 'title', 'text', 'styles'])
</script>

<template>
  <div :class="styles">
    {{ text }}
  </div>
</template>
