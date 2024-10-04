<script setup lang="ts">
const { children } = defineProps(['children'])
import Table from './Table.vue'
import Button from './Button.vue'
import HtmlText from './HtmlText.vue'
import PricingSummary from './PricingSummary.vue'
import Card from './Card.vue'
import Grid from './Grid.vue'
import Image from './Image.vue'
import Text from './Text.vue'

import { ComponentType } from '../types/uiConfig'
</script>

<template>
  <template v-for="content of children" :key="content.name">
    <Table v-if="content.type === ComponentType.TABLE" v-bind="content" />
    <PricingSummary v-if="content.type === ComponentType.PRICING_SUMMARY" v-bind="content" />
    <Card v-if="content.type === ComponentType.CARD" v-bind="content" />
    <Grid v-if="content.type === ComponentType.GRID" v-bind="content" />
    <Image v-if="content.type === ComponentType.IMAGE" v-bind="content" />
    <Button v-if="content.type === ComponentType.BUTTON" v-bind="content" />
    <HtmlText v-if="content.type === ComponentType.HTMLTEXT" v-bind="content" />
    <Text v-if="content.type === ComponentType.TEXT" v-bind="content" />
  </template>
</template>
