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
          <AppTextField placeholder="Name" textkey="name" />
          <AppTextField
            placeholder="Password"
            type="password"
            textkey="password"
          />
          <AppTextField
            placeholder="Password Confirmation"
            type="password"
            textkey="password_confirmation"
          />
        </div>
      </v-card-text>
      <v-card-actions class="navbar">
        <AppButton
          :click="submit"
          text="Continue"
          icon="mdi-checkbox-marked-circle-outline "
          color="blue"
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
const runtimeConfig = useRuntimeConfig();

var email;
var name;
var password;
var password_confirmation;

$bus.$on("email", (data) => (email = data));
$bus.$on("name", (data) => (name = data));
$bus.$on("password", (data) => (password = data));
$bus.$on("password_confirmation", (data) => (password_confirmation = data));

async function submit() {
  const response = await useAppFetch("Post", "login", {
    email: email,
    password: password,
  });
  //let json = await response.json();
  console.log(response.data);
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

.v-input[round-left] {
  border-top-left-radius: 28px;
  border-bottom-left-radius: 28px;
}
.v-input[round-right] {
  border-top-right-radius: 28px;
  border-bottom-right-radius: 28px;
}
</style>
