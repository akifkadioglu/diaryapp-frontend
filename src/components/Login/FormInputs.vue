<template>
  <v-card-text>
    <AppTextField
      @input="(v) => $emit('email', v)"
      label="E-mail"
      :rules="rules.email"
    />
    <AppTextField
      @input="(v) => $emit('password', v)"
      :rules="rules.password"
      label="Password"
      type="password"
    />
  </v-card-text>
</template>

<script>
import AppTextField from "../AppTextField.vue";

export default {
  components: { AppTextField },
  data() {
    return {
      rules: {
        email: [
          (v) => !!v || "E-mail is required",
          (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        password: [(v) => !!v || "Password is required"],
      },
    };
  },
};
</script>