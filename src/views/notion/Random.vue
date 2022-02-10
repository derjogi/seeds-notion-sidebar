<script setup lang="ts">
import { NotionRenderer, getPageBlocks } from 'vue3-notion'
import { ref, onMounted } from 'vue'

const data = ref()

onMounted(async () => {
  console.log('Getting some data...')
  data.value = await getPageBlocks('1546fda0797142cc96c616fede8dc556')
  console.log('Got some data, I think.')
})

</script>

<template>
  <NotionRenderer v-if='data' :blockMap='data' fullPage />
  <div>Bla</div>
</template>
