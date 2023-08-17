<script setup lang="ts">

import { ref } from 'vue'
const test = ref('hello world')
const props = defineProps<{
  title: string;
}>()


</script>

<template>

  <main>
    This is vue
    <pre>
      hi: {{ test }}
      title: {{ title }}
    </pre>

  </main>
</template>
