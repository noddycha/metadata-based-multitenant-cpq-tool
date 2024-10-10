<script setup lang="ts">
import { onMounted, ref, watch, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import { useUiConfigStore } from '../stores/uiConfig'
import MetadataProcessor from '../components/MetadataProcessor.vue'
import type { Page } from '@/types/uiConfig'

const uiConfigStore = useUiConfigStore()
const route = useRoute()
const renderComponent: Ref<boolean> = ref(true)

watch(route, () => {
  renderComponent.value = false

  setTimeout(() => {
    renderComponent.value = true
  }, 100)

  loadPageConfig()
})

let currentPageConfig: Ref<Page | null> = ref(null)

const loadPageConfig = () => {
  currentPageConfig.value = uiConfigStore.getPageConfig(route?.name as string) || null
}

onMounted(() => {
  loadPageConfig()
})
</script>

<template>
  <main>
    <div class="text-center my-5">
      <h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900">
        {{ currentPageConfig?.title }}
      </h2>
    </div>
    <MetadataProcessor v-if="renderComponent" :children="currentPageConfig?.children" />
  </main>
</template>
