<script setup lang="ts">
import type { Children } from '@/types/uiConfig'
import MetadataProcessor from './MetadataProcessor.vue'

interface Props {
  styles: string
  children: Children
}

const { styles, children } = defineProps<Props>()
</script>

<template>
  <div :class="styles">
    <MetadataProcessor v-if="children" :children="children" />
  </div>
</template>
