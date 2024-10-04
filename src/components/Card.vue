<script setup lang="ts">
import MetadataProcessor from './MetadataProcessor.vue'

const { name, title, styles, children } = defineProps(['name', 'title', 'styles', 'children'])
</script>

<template>
  <div class="mx-auto mb-14 block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow">
    <h3 class="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900">
      {{ title }}
    </h3>
    <MetadataProcessor v-if="children" :children="children" />
  </div>
</template>
