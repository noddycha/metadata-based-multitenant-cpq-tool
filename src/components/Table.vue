<script setup lang="ts">
import { useAppDataStore } from '../stores/appData'
import { onMounted, ref } from 'vue'

import Text from './Text.vue'
import Textbox from './Textbox.vue'

const { name, title, dataPath, columns, data } = defineProps([
  'name',
  'title',
  'dataPath',
  'columns',
  'data'
])
const appData = useAppDataStore()
const tableData = ref()

onMounted(async () => {
  if (data && data.type) {
    tableData.value = await appData.getAppData(data, dataPath)
  }
})

const updateValue = (product_id: string | number, eventTarget: EventTarget) => {
  tableData.value.map((row) => {
    if (row.product_id === product_id) {
      row.product_qty = (eventTarget as HTMLInputElement)?.value
    }
    return row
  })
}
</script>

<template>
  <div
    class="mx-auto mb-20 block w-7/12 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <h4 class="mb-8 text-lg font-bold leading-none tracking-tight text-gray-900">
      {{ title }}
    </h4>
    <table class="w-full text-left table-auto">
      <thead>
        <tr>
          <th
            v-for="column of columns"
            :key="column.name"
            class="p-4 border-b border-blue-gray-100 bg-blue-gray-50"
          >
            <p
              class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"
            >
              {{ column.title }}
            </p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row of tableData" :key="`row-${row.product_id}`">
          <td
            v-for="column of columns"
            :key="`${column.name}-row.product_id`"
            class="p-4 border-b border-blue-gray-50"
          >
            <p
              class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
            >
              <Text v-if="column.type === 'text'" :text="row[column.name]" />
              <Textbox
                v-if="column.type === 'textbox'"
                :text="row[column.name]"
                @change="updateValue(row.product_id, $event.target)"
              />
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
