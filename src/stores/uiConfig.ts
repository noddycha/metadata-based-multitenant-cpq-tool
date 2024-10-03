import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { UiConfigService } from '../services/api.service'

export const useUiConfigStore = defineStore('uiConfig', () => {
  const applicationUiJSON = ref()

  const applicationRoutes = computed(() => {
    return applicationUiJSON.value?.pages?.map((page) => {
      return {
        name: page.name,
        path: `/${page.route}`,
        defaultPage: page.defaultPage
      }
    })
  })

  const applicationHeader = computed(() => {
    return applicationUiJSON.value?.header
  })

  const getUiConfig = async (tenantId) => {
    try {
      const { data } = await UiConfigService.get(tenantId)
      applicationUiJSON.value = data
      return applicationUiJSON.value
    } catch (error) {
      console.log('Unable to fetch UI config!')
    }
  }

  const getPageConfig = (name: string) => {
    return applicationUiJSON.value?.pages.find((page) => page.name === name)
  }

  return { applicationUiJSON, applicationRoutes, applicationHeader, getUiConfig, getPageConfig }
})
