import axios from 'axios'

const httpClient = axios.create({
  baseURL: '',
  timeout: 1000
})

const ApiService = {
  query(resource, params) {
    return httpClient.get(resource, params).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`)
    })
  },

  get(resource) {
    return httpClient.get(`${resource}`).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`)
    })
  },

  post(resource, params) {
    return httpClient.post(`${resource}`, params)
  }
}

export default ApiService

export const UiConfigService = {
  get(tenantId: number) {
    return ApiService.get(`http://127.0.0.1:4000/ui-configuration?tenantId=${tenantId}`)
  }
}
