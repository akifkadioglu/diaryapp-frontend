<template>
  <v-app-bar height="80" elevation="0">
    <v-app-bar-nav-icon exact :to="{ name: $routes.HOME }">
      <v-icon>mdi-home</v-icon>
    </v-app-bar-nav-icon>

    <v-toolbar-title>Diary</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn :to="{ name: $routes.DIARY }" icon>
      <v-icon>mdi-notebook-outline</v-icon>
    </v-btn>
    <v-btn @click="logout" icon>
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$storage.remove(this.$storage.TOKEN);
      this.$router.push({ name: this.$routes.LOGIN });
    },
  },
};
</script>
<!-- akifkadioglu@yaani.com -->
