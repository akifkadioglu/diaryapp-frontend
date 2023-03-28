<template>
  <div>
    <v-container class="page">
      <v-scroll-x-transition mode="out-in">
        <router-view />
      </v-scroll-x-transition>
    </v-container>
    <AppFooter />
    <AppSnackbar />
  </div>
</template>

<script>
import AppFooter from "../components/AppFooter.vue";
import AppSnackbar from "../components/AppSnackbar.vue";

export default { components: { AppSnackbar, AppFooter } };
</script>

<style scoped>
.page {
  justify-content: center;
  align-items: center;
  height: 100vh;
  display: flex;
}
</style>
