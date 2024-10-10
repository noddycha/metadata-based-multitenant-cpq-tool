<script setup lang="ts">
interface Props {
  text: string
  styles: string
}

const { text, styles } = defineProps<Props>()
</script>

<template>
  <div :class="styles">
    {{ text }}
  </div>
</template>
