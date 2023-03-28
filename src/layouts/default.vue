<template>
  <div>
    <AppHeader />
    <v-container>
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
import AppHeader from "../components/AppHeader.vue";
import AppSnackbar from "../components/AppSnackbar.vue";
export default {
  components: { AppHeader, AppSnackbar, AppFooter },
};
</script>
<style scoped></style>
