<script setup lang="ts">
interface Props {
  title: string
  styles: string
  src: string
}

const { title, styles, src } = defineProps<Props>()
</script>

<template>
  <img :class="styles" :src="src" :alt="title" />
</template>
