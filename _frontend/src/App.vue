<script setup lang="ts">
import { ref, onMounted } from 'vue'

import SignUp from './components/SignUp.vue'
const placeholderImage = 'data:image/png;base64,...';  // your base64 encoded image
const fullImageURL = '../../assets/images/backgrounds/carless-city.png';

const bgImage = ref(placeholderImage);
const bgStyle = ref(`background-image: url('${bgImage.value}')`);

onMounted(() => {
  const image = new Image();
  image.src = fullImageURL;
  image.onload = () => {
    bgImage.value = fullImageURL;
    bgStyle.value = `background-image: url('${bgImage.value}')`;
  };
});
</script>

<template>

  <main  class="container mx-auto h-full flex flex-col justify-end">
    <div class="flex flex-row mb-16 items-end justify-between">
      <div class="text-3xl max-w-xl leading-tight">
        programmable identity-linked licensing for monetization of  open-source software on distributed networks.
      </div>

      <div>
        <SignUp />
      </div>

    </div>
  </main>

</template>

<style scoped>
</style>
