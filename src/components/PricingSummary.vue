<script setup lang="ts">
import type { Data } from '@/types/uiConfig'
import { useAppDataStore } from '../stores/appData'
import { onMounted, ref, type Ref } from 'vue'

interface Props {
  dataPath: string
  grossPricePath: string
  data: Data
}

const { dataPath, grossPricePath, data } = defineProps<Props>()
const appData = useAppDataStore()
const productData = ref()
let grossPrice: Ref<number> = ref(0)

onMounted(async () => {
  if (data && data.type) {
    const products = await appData.getAppData(data, dataPath)

    products.map((product: any) => {
      product.product_gross_price = product.product_qty * product.product_price
      grossPrice.value = grossPrice.value + product.product_gross_price
      return product
    })

    appData.saveAppData(
      {
        type: 'STORE',
        body: grossPrice.value
      },
      grossPricePath
    )

    productData.value = products.filter((product: any) => product.product_qty > 0)
  }
})
</script>

<template>
  <div class="text-center">
    <h4 class="mb-2 text-slate-800 text-xl font-semibold">
      Pricing summary of the list of products selected:
    </h4>
    <h3 v-if="productData?.length <= 0">No products selected!</h3>
    <div
      class="mx-auto relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96"
      v-for="product of productData"
      :key="product.product_id"
    >
      <div class="p-4 text-left">
        <p class="text-slate-600 leading-normal font-light">
          Name: <span class="font-bold">{{ product.product_name }}</span> <br />
          Quantity: <span class="font-bold">{{ product.product_qty }}</span> <br />
          Price Per Unit: <span class="font-bold">{{ product.product_price }}</span> <br />
          Gross Price: <span class="font-bold">{{ product.product_gross_price }}</span> <br />
        </p>
      </div>
    </div>
  </div>
</template>
