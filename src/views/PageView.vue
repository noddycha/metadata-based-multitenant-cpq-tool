<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useUiConfigStore } from '../stores/uiConfig';
import MetadataProcessor from '../components/MetadataProcessor.vue'

const uiConfigStore = useUiConfigStore()
const route = useRoute();
const renderComponent = ref(true)

watch(route, (to) => {
  renderComponent.value = false

  setTimeout(() => {
    renderComponent.value = true
  }, 100)

  loadPageConfig()
})

let currentPageConfig = ref()

const loadPageConfig = () => {
  currentPageConfig.value = uiConfigStore.getPageConfig(route?.name as string)
}

onMounted(() => {
  loadPageConfig()
})
</script>

<template>
  <main>
    <div class="text-center my-5"> <h2 class="font-bold"> {{ currentPageConfig?.title }} </h2> </div>
    <MetadataProcessor v-if="renderComponent" :children="currentPageConfig?.children" />
  </main>
</template>
