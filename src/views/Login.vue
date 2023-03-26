<template>
  <v-card width="500px">
    <v-card-title primary-title>
      <div>
        <div class="text-h4 mb-5">Diary App</div>
        <div class="text-caption mb-2">fill the inputs..</div>
      </div>
    </v-card-title>
    <v-card-text>
      <div>
        <AppTextField label="E-mail"  />
        <AppTextField label="Password" type="password" />
      </div>
    </v-card-text>
    <v-card-actions class="navbar">
      <AppButton
        :click="submit"
        text="Login"
        color="blue"
        width="70%"
        overlayText="Are you ready to write something!"
      />
      <AppButton
        text="Sign in"
        color="red"
        width="30%"
        overlayText="Dont you have any account? Lets sign in!"
        to="auth.register"
      />
    </v-card-actions>
    <div class="text-caption mr-2 right d-flex">
      <a
        href="https://www.akifkadioglu.dev"
        target="_blank"
        class="text-decoration-none text-black"
      >
        akifkadioglu
      </a>
    </div>
  </v-card>
</template>

<script>
import AppButton from "./../components/AppButton.vue";
import AppTextField from "./../components/AppTextField.vue";
export default {
  components: {
    AppButton,
    AppTextField,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submit() {
      console.log("akif");
    },
  },
};
</script>
