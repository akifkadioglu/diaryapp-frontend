<template>
  <div>
    <v-app-bar elevation="0">
      <template v-slot:prepend>
        <v-btn icon="mdi-notebook-outline"></v-btn>
      </template>

      <v-app-bar-title>Diary</v-app-bar-title>
      <v-btn @click="install" icon="mdi-download-outline"> </v-btn>
      <v-btn @click="logout()" icon="mdi-logout"> </v-btn>
    </v-app-bar>
  </div>
</template>
<script setup>
const { remove } = useStorage();
const router = useRouter();

function logout() {
  remove("token");
  router.push({
    path: "/login",
  });
}
function install() {}
</script>
<script>
export default {};
</script>

<style></style>
