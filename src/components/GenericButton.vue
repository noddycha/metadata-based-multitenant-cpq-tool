<script setup lang="ts">
import { useAppDataStore } from '../stores/appData'
import router from '../router'
import { DataActionType, type Action } from '../types/uiConfig'

const { title, actions } = defineProps(['title', 'actions'])
const appData = useAppDataStore()

const runButtonClickHandler = () => {
  actions.forEach(async (action: Action) => {
    switch (action.type) {
      case DataActionType.API:
        await appData.saveAppData(action, action.dataPath)
        break
      case DataActionType.NAV:
        if (action.route) router.push(action.route)
        break
      default:
    }
  })
}
</script>

<template>
  <button
    class="mx-auto mt-2 mb-4 block rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
    @click="runButtonClickHandler()"
  >
    {{ title }}
  </button>
</template>
