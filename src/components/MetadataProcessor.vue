<script setup lang="ts">
const { children } = defineProps(["children"])
import Table from './Table.vue'
import Button from './Button.vue'
import HtmlText from './HtmlText.vue'
import PricingSummary from './PricingSummary.vue';

</script>

<template>
  <template v-for="content of children" :key="content.name">
    <Table v-if="content.type === 'table'" v-bind="content" />
    <PricingSummary v-if="content.type === 'pricing_summary'" v-bind="content" />
    <Button v-if="content.type === 'button'" v-bind="content" />
    <HtmlText v-if="content.type === 'html'" v-bind="content" />
    
    <MetadataProcessor v-if="content?.children" :children="content?.children" />
  </template>
</template>
