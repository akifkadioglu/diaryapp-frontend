<template>
  <div class="login-page">
    <v-card class="login-card">
      <v-card-title primary-title>
        <div>
          <div class="text-h4 mb-5">Diary App</div>
          <div class="text-caption mb-2">fill the inputs..</div>
        </div>
      </v-card-title>
      <v-card-text>
        <div>
          <AppTextField placeholder="E-mail" textkey="email" />
          <AppTextField
            placeholder="Password"
            type="password"
            textkey="password"
          />
        </div>
      </v-card-text>
      <v-card-actions class="navbar">
        <AppButton
          :click="submit"
          text="Login"
          icon="mdi-checkbox-marked-circle-outline "
          color="blue"
          width="70%"
          overlayText="Are you ready to write something!"
        />
        <AppButton
          text="Sign in"
          icon="mdi-account-plus-outline"
          color="red"
          width="29%"
          overlayText="Dont you have any account? Lets sign in!"
          to="/register"
        />
      </v-card-actions>
      <div class="text-caption mr-5 right d-flex">
        By &ensp;
        <a
          href="https://www.akifkadioglu.dev"
          target="_blank"
          class="text-decoration-none text-black"
        >
          akifkadioglu
        </a>
      </div>
    </v-card>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "login-register-mw",
});
const { $bus } = useNuxtApp();
const { $api } = useNuxtApp();
const { showSnackbar } = useSnackbar();
const { push } = useStorage();
const router = useRouter();

var email;
var password;

$bus.$on("email", (data) => (email = data));
$bus.$on("password", (data) => (password = data));

async function submit() {
  await $api.api
    .post("login", {
      email: email,
      password: password,
    })
    .then(function (res) {
      push("token", res.data.token);
      router.push({
        path: "/",
      });
    })
    .catch(function (error) {
      if (error.response) {
        showSnackbar(error.response.data.data[0]);
        console.log(error.response.data);
      }
    });
}
</script>

<style scoped>
.login-page {
  justify-content: center;
  align-items: center;
  height: 90vh;
  display: flex;
}
.login-card {
  width: 550px;
}
</style>
