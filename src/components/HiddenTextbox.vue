<script setup lang="ts">
const { name, title, text } = defineProps(["name", "title", "text"])

</script>

<template>
  <div>
    {{ text }}
  </div>
</template>
