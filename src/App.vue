<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import router from './router'
import { useRoute } from 'vue-router'
import PageView from './views/PageView.vue';
import Header from './components/Header.vue'
import { useUiConfigStore } from './stores/uiConfig';

const uiConfigStore = useUiConfigStore()
const route = useRoute()

onMounted (async () => {
  await getUrlQueryParams()

  // Load UI config from the backend through the API
  await uiConfigStore.getUiConfig(route.query.tenantId || 1001)

  // Adding route of each of the pages from the UI Config
  uiConfigStore.applicationRoutes.forEach(route => {
    router.addRoute({ path: route.path, name: route.name, component: PageView })
  });

  // Identifying and navigating user to defaultPage on load of the page
  const defaultRoute = uiConfigStore.applicationRoutes.find((route) => route.defaultPage)
  router.push({
    name: defaultRoute.name,
    query: route.query
  })
})

const getUrlQueryParams = async () => {    
  await router.isReady()
}
</script>

<template>
  <Header :logo="uiConfigStore.applicationHeader?.logo" :title="uiConfigStore.applicationHeader?.title" :href="uiConfigStore.applicationHeader?.href" />
  <RouterView />
</template>
