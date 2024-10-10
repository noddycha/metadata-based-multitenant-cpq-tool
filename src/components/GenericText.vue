<script setup lang="ts">
const { text, styles } = defineProps(['text', 'styles'])
</script>

<template>
  <div :class="styles">
    {{ text }}
  </div>
</template>
