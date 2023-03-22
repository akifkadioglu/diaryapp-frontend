<template>
  <div class="text-center ma-2">
    <v-snackbar v-model="snackbar">
      {{ text }}
      <template v-slot:actions>
        <v-btn size="small" icon="mdi-close" @click="snackbar = false"> </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup>
const snackbar = useSnackbarOpen();
const text = useSnackbarText();
</script>
