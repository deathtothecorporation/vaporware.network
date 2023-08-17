<template>
  <div class="">
    <div @click="onClick" class='cta' :class="!disabled ? '' : 'disabled'">
    <form ref="waitlistForm" @submit.prevent="submitForm" class="flex flex-row items-center">
      <input
        type="text"
        autocomplete="off"
        spellcheck="off"
        placeholder="Enter your email or Urbit ID"
        v-model="signupEntry"
        name="entry.1987957812"
        @keydown="
          thanks = false;
          error = false;
        "
      />
      <span @click="submitForm" class="cta-arrow">→</span>
    </form>
    </div>
      <div class="" v-if="thanks">Thanks, you're on the waitlist!</div>
      <div class="" v-if="error">Something went wrong...</div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";

const signupEntry = ref("");
const thanks = ref(false);
const error = ref(false);
const loading = ref(false);
const waitlistForm = ref(null);

watch(thanks, (val) => {
  if (val) {
    window.setTimeout(() => {
      thanks.value = false;
    }, 3500);
  }
});

watch(error, (val) => {
  if (val) {
    window.setTimeout(() => {
      error.value = false;
    }, 5000);
  }
});

const invalid = computed(() => {
  var patpee = new RegExp(/^~[a-z-]*$/);
  var email = new RegExp(/^.*@.*\..*$/);

  const response = responseString.value;

  if (!patpee.test(response) && !email.test(response)) {
    error.value = true
    return true;
  }
  return false;
});

const responseString = computed(() => {
  return signupEntry.value.toString();
});

const submitForm = () => {
  loading.value = true;

  if (invalid.value) {
    return;
  }

  let formData = new FormData();
  formData.append("entry.1987957812", responseString.value);

  const url =
    "https://docs.google.com/forms/u/3/d/e/1FAIpQLSfBDo4OJQ3iJrMqTcWrcg6m_qqP09Hni9w-44dirgOUri3pxA/formResponse";

  fetch(url, {
    method: "POST",
    mode: "no-cors",
    body: formData,
  })
    .then((r) => {
      console.log("done ", r);
      signupEntry.value = "";
      thanks.value = true;
    })
    .catch((e) => {
      console.log("bad ", { e });
      error.value = true;
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>

<style scoped>
/* code... */
</style>
