<template>
  <div class="login-page">
    <v-card class="login-card">
      <v-card-title primary-title>
        <div>
          <div class="text-h4 mb-5">Diary App</div>
          <div class="text-caption mb-2">Continue with..</div>
        </div>
      </v-card-title>
      <v-card-actions class="navbar">
        <AppButton
          width="49%"
          :click="google"
          text="Google"
          icon="mdi-google"
          color="blue"
        />
        <AppButton
          width="49%"
          :click="github"
          text="GitHub"
          icon="mdi-github"
          color="black"
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
function google() {
  console.log("ldksjafn");
}
function github() {
  console.log("ldksjafn");
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
