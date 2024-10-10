<script setup lang="ts">
import MetadataProcessor from './MetadataProcessor.vue'

const { name, title, styles, children } = defineProps(['name', 'title', 'styles', 'children'])
</script>

<template>
  <div :class="styles">
    <MetadataProcessor v-if="children" :children="children" />
  </div>
</template>
