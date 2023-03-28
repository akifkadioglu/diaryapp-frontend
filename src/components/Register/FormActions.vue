<template>
  <div>
    <v-card-actions class="navbar">
      <AppButton
        :click="submit"
        text="register"
        color="primary"
        overlayText="Welcome!"
        :isLoading="isLoading"
      />
    </v-card-actions>
    <v-card-actions class="center">
      <span>
        Do you have an account

        <router-link
          class="text-decoration-none red--text"
          :to="{ name: $routes.LOGIN }"
        >
          Log in
        </router-link>
      </span>
    </v-card-actions>
    <div class="text-caption mr-2 right d-flex">
      <span>
        By
        <a
          href="https://www.akifkadioglu.dev"
          target="_blank"
          class="text-decoration-none text-black"
        >
          akifkadioglu
        </a>
      </span>
    </div>
  </div>
</template>
<script>
import AppButton from "../AppButton.vue";
export default {
  components: { AppButton },
  props: {
    form: {
      type: Object,
      default() {
        return {};
      },
    },
    validate: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    async submit() {
      await this.$emit("validate");
      this.isLoading = true;
      if (this.validate) {
        await this.$axios
          .post("register", this.form)
          .then((result) => {
            this.$axios.defaults.headers.common["Authorization"] =
              result.data.token;
            this.$storage.push(this.$storage.TOKEN, result.data.token);
            this.$router.push({ name: this.$routes.HOME });
          })
          .catch((err) => {
            this.$snackbar.show(err.response.data.data[0]);
          });
      }
      this.isLoading = false;
    },
  },
};
</script>
