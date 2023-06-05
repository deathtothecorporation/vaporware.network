<template>
  <div class="">
    <form ref="waitlistForm" @submit.prevent="submitForm">
      <div class="flex flex-col">
        <input
          type="text"
          placeholder="Enter your email or Urbit ID"
          v-model="signupEntry"
          name="entry.1987957812"
          @keydown="
            thanks = false;
            error = false;
          "
          @keyup.enter="submitForm"
          class="w-full py-8 font-mono text-center rounded-lg shadow-sm md:px-16 md:text-xl text-dark-gray"
          :class="signupEntry !== '' && invalid ? 'ring ring-red-300' : ''"
        />

        <div class="mx-auto mt-2 font-bold text-center">
          <div
            class="text-light-gray"
            :class="signupEntry !== '' && invalid ? 'visible' : 'invisible'"
          >
            Please enter a valid email or @p
          </div>

          <div class="" v-if="thanks">Thanks, you're on the waitlist!</div>

          <div class="" v-if="error">Something went wrong...</div>
        </div>

        <div class="w-auto mx-auto mt-4">
          <input
            :class="
              invalid || loading
                ? 'opacity-50'
                : 'cursor-pointer hover:shadow-sm hover:opacity-80'
            "
            class="w-full py-4 text-lg text-center text-white border rounded-lg shadow-md bg-[#040C53]"
            @click="submitForm"
            :disabled="invalid || loading"
            :value="loading ? 'Sending...' : 'Notify me'"
          />
        </div>
      </div>
    </form>
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
