import { ref } from 'vue'
import { defineStore } from 'pinia'
import ApiService from '../services/api.service'
import type { Data } from '@/types/uiConfig'

export const useAppDataStore = defineStore('appData', () => {
  const appData = ref({})

  const getAppData = async (dataSource: Data, path: string = '') => {
    switch (dataSource.type) {
      case 'API':
        if (dataSource.method && dataSource.method === 'GET' && dataSource.URL) {
          try {
            const apiResponse = await ApiService.get(dataSource.URL)
            appData.value[path] = apiResponse.data
            return apiResponse.data
          } catch (error) {
            console.log('Error occured while trying to fetch App data!')
          }
        }
        break
      case 'STORE':
        if (dataSource.path) {
          return parseAndFetchFromPath(dataSource.path)
        }
        break
      default:
    }
  }

  const saveAppData = async (dataDestination: Data, path = '') => {
    // Storing data in store
    switch (dataDestination.type) {
      case 'API':
        if (dataDestination.body) {
          dataDestination.body = parseAndFetchFromPath(dataDestination.body)
        }
        if (dataDestination.method && dataDestination.method === 'POST' && dataDestination.URL) {
          await ApiService.post(dataDestination.URL, dataDestination.body)
          appData.value[path] = dataDestination.body
        }
        break
      case 'STORE':
        appData.value[path] = dataDestination.body
        break
      default:
    }
  }

  const parseAndFetchFromPath = (data) => {
    if (data && data.startsWith('{{') && data.endsWith('}}')) {
      return appData.value[data.replace('{{', '').replace('}}', '')]
    }

    return data
  }

  return { appData, getAppData, saveAppData, parseAndFetchFromPath }
})
