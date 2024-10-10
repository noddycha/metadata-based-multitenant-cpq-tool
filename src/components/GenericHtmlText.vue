<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useAppDataStore } from '../stores/appData';
import type { Param } from '../types/uiConfig';

const { name, title, html, params } = defineProps(["name", "title", "html", "params"])
const appData = useAppDataStore()
const htmlText = ref(html)

onMounted(() => {
  params?.forEach((param: Param) => {
    htmlText.value = htmlText.value.replace(`{{${param.key}}}`, appData.parseAndFetchFromPath(param.value))
  })
})

</script>

<template>
  <div v-html="htmlText"></div>
</template>
