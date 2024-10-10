import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { UiConfigService } from '../services/api.service'
import type { Page, uiConfig } from '../types/uiConfig'

export const useUiConfigStore = defineStore('uiConfig', () => {
  const applicationUiJSON: Ref<uiConfig | null> = ref(null)

  const applicationRoutes = computed(() => {
    return applicationUiJSON.value?.pages?.map((page: Page) => {
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

  const getUiConfig = async (tenantId: number) => {
    try {
      const { data } = await UiConfigService.get(tenantId)
      applicationUiJSON.value = data
      return applicationUiJSON.value
    } catch (error) {
      console.log('Unable to fetch UI config!')
    }
  }

  const getPageConfig = (name: string): Page | null => {
    return applicationUiJSON.value?.pages.find((page: Page) => page.name === name) || null
  }

  return { applicationUiJSON, applicationRoutes, applicationHeader, getUiConfig, getPageConfig }
})
