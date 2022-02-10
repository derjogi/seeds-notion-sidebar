<script setup>
import { NotionRenderer, getPageBlocks } from 'vue3-notion'
import { ref, onMounted } from 'vue'

const data = ref()

onMounted(async () => {
  data.value = await getPageBlocks('1546fda0797142cc96c616fede8dc556')
})

</script>

<template>
  <NotionRenderer v-if='data' :blockMap='data' fullPage />
</template>
