<template>
  <div class="auth-page">
    <v-fab-transition>
      <router-view />
    </v-fab-transition>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.auth-page {
  justify-content: center;
  align-items: center;
  height: 90vh;
  display: flex;
}
</style>
