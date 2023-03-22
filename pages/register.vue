<template>
  <div class="login-page">
    <AppSnackbar />
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
          <AppTextField placeholder="Name" textkey="name" />
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
          text="Sign in"
          icon="mdi-account-plus-outline"
          color="blue"
          width="70%"
        />
        <AppButton
          text="Login"
          color="red"
          icon="mdi-checkbox-marked-circle-outline "
          width="29%"
          to="/login"
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
const { $bus } = useNuxtApp();
const { $api } = useNuxtApp();
const { showSnackbar } = useSnackbar();
const { push } = useStorage();
const router = useRouter();

var email;
var name;
var password;
var password_confirmation;

$bus.$on("email", (data) => (email = data));
$bus.$on("name", (data) => (name = data));
$bus.$on("password", (data) => (password = data));

async function submit() {
  await $api.api
    .post("register", {
      email: email,
      name: name,
      password: password,
      password_confirmation: password_confirmation,
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
