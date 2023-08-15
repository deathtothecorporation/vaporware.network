<template>
    <div @click="onClick" class='cta' :class="disabled ? '' : 'disabled'">
      <span class="text">
        {{ title }}
      </span>
      <span class="cta-arrow">→</span>
    </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  disabled: {
    type: Boolean,
    default: false,
  }
});
</script>
