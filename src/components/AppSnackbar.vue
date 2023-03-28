<template>
  <v-snackbar
    color="light-blue  darken-4"
    dark
    v-model="$store.state.isSnackbarOpen"
  >
    <div class="body-1">
      {{ $store.state.snackbarText }}
    </div>

    <template v-slot:action="{ attrs }">
      <v-btn icon v-bind="attrs" @click="$store.state.isSnackbarOpen = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script>
export default {};
</script>
