<template>
  <v-app>
    <v-main>
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  created() {
    this.setDarkMode();
  },
  data: () => ({
    //
  }),
  methods: {
    setDarkMode() {
      if (this.$storage.pull(this.$storage.IS_DARK_MODE) === "true") {
        this.$vuetify.theme.dark = true;
      }
    },
  },
};
</script>
