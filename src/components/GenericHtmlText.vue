<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAppDataStore } from '../stores/appData'
import type { Param } from '../types/uiConfig'

interface Props {
  html: string
  params: Param[]
}

const { html, params } = defineProps<Props>()
const appData = useAppDataStore()
const htmlText = ref(html)

onMounted(() => {
  params?.forEach((param: Param) => {
    htmlText.value = htmlText.value.replace(
      `{{${param.key}}}`,
      appData.parseAndFetchFromPath(param.value)
    )
  })
})
</script>

<template>
  <div v-html="htmlText"></div>
</template>
