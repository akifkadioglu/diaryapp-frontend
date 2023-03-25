<template>
  <div>
    <NuxtLayout>
      <v-card
        class="mx-auto"
        variant="flat"
        width="500"
        prepend-icon="mdi-pencil"
      >
        <template v-slot:title> What Happened Today? </template>
        <v-card-text>
          <AppTextField
            :reload="reload"
            textkey="header"
            placeholder="Header"
          />
          <AppTextArea
            :reload="reload"
            textkey="body"
            placeholder="Write here something about today!"
          />
        </v-card-text>
        <div class="text-center">
          <v-rating
            color="#ffa534"
            v-model="rate"
            hover
            half-increments
          ></v-rating>
        </div>

        <v-card-actions>
          <AppButton
            :click="send"
            overlayText="send that day! also you can instal them later:)"
            color="cyan-darken-4"
            text="send"
            :isLoading="isLoading"
          />
        </v-card-actions>
      </v-card>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref } from "vue";

definePageMeta({
  middleware: "auth-mw",
});

const { $bus } = useNuxtApp();
const { $api } = useNuxtApp();
const { showSnackbar } = useSnackbar();

const header = ref("");
const body = ref("");
const rate = ref(3);
const isLoading = ref(false);
const reload = ref(false);

$bus.$on("header", (data) => (header.value = data));
$bus.$on("body", (data) => (body.value = data));
$bus.$on("rate", (data) => (rate.value = data));

async function send() {
  isLoading.value = true;
  await $api.api
    .post("create-diary", {
      header: header.value,
      body: body.value,
      rate: rate.value,
    })
    .then(function () {
      header.value = "";
      body.value = "";
      rate.value = 3;
      reload.value = !reload.value;
      showSnackbar("We saved that!");
    })
    .catch(function (error) {
      if (error.response) {
        showSnackbar(error.response.data.data[0]);
      }
    });
  isLoading.value = false;
}
</script>
