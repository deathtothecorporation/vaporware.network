<script setup lang="ts">

import { ref } from 'vue'
const test = ref('hello world')
const props = defineProps<{
  title: string;
  content: string;
}>()


</script>

<template>

  <main>
    This is vue
    <pre>
      hi: {{ test }}
      title: {{ title }}
      content: {{ content }}
    </pre>

  </main>
</template>
