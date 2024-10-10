<script setup lang="ts">
import MetadataProcessor from './MetadataProcessor.vue'

const { styles, children } = defineProps(['styles', 'children'])
</script>

<template>
  <div :class="styles">
    <MetadataProcessor v-if="children" :children="children" />
  </div>
</template>
