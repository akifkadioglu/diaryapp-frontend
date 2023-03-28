<template>
  <v-footer padless class="footer center">
    <div class="d-flex">
      <v-switch
        prepend-icon="mdi-weather-night"
        v-model="$vuetify.theme.dark"
      />
    </div>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      switch1: true,
    };
  },
  watch: {
    "$vuetify.theme.dark"() {
      this.$storage.push(
        this.$storage.IS_DARK_MODE,
        this.$vuetify.theme.dark.toString()
      );
    },
  },
};
</script>
<style scoped>
.footer {
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>
