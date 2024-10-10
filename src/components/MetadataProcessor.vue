<script setup lang="ts">
const { children } = defineProps(['children'])
import GenericTable from './GenericTable.vue'
import GenericButton from './GenericButton.vue'
import GenericHtmlText from './GenericHtmlText.vue'
import PricingSummary from './PricingSummary.vue'
import GenericCard from './GenericCard.vue'
import GenericGrid from './GenericGrid.vue'
import GenericImage from './GenericImage.vue'
import GenericText from './GenericText.vue'

import { ComponentType } from '../types/uiConfig'
</script>

<template>
  <template v-for="content of children" :key="content.name">
    <GenericTable v-if="content.type === ComponentType.TABLE" v-bind="content" />
    <PricingSummary v-if="content.type === ComponentType.PRICING_SUMMARY" v-bind="content" />
    <GenericCard v-if="content.type === ComponentType.CARD" v-bind="content" />
    <GenericGrid v-if="content.type === ComponentType.GRID" v-bind="content" />
    <GenericImage v-if="content.type === ComponentType.IMAGE" v-bind="content" />
    <GenericButton v-if="content.type === ComponentType.BUTTON" v-bind="content" />
    <GenericHtmlText v-if="content.type === ComponentType.HTMLTEXT" v-bind="content" />
    <GenericText v-if="content.type === ComponentType.TEXT" v-bind="content" />
  </template>
</template>
