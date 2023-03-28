<template>
  <div class="view">
    <v-card width="650" outlined>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-card-title primary-title>
          Write Something About Today!
        </v-card-title>
        <v-card-text>
          <AppTextField
            @input="(v) => (form.header = v)"
            label="Header"
            :rules="rules.required"
          />
          <AppTextArea
            @input="(v) => (form.body = v)"
            label="Body"
            :rules="rules.required"
          />
          <div class="center">
            <v-rating
              v-model="form.rate"
              color="yellow darken-3"
              background-color="grey darken-1"
              empty-icon="$ratingFull"
              half-increments
              hover
            />
          </div>
        </v-card-text>
        <v-card-actions>
          <AppButton
            :isLoading="isLoading"
            :click="send"
            color="primary"
            text="send"
          />
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import AppButton from "../components/AppButton.vue";
import AppTextArea from "../components/AppTextArea.vue";
import AppTextField from "../components/AppTextField.vue";

export default {
  components: { AppTextField, AppTextArea, AppButton },
  data() {
    return {
      valid: true,
      rating: 3,
      isLoading: false,
      form: {
        header: "",
        body: "",
        rate: 3,
      },
      rules: {
        required: [(v) => !!v || "its required"],
      },
    };
  },
  methods: {
    async send() {
      this.isLoading = true;
      if (this.validate()) {
        await this.$axios
          .post("create-diary", this.form)
          .then(() => {
            this.$snackbar.show("We saved your day!");
            this.reset();
          })
          .catch(() => {
            this.isLoading = false;
            this.$snackbar.show("Something Went Wrong");
          });
      }
      this.isLoading = false;
    },
    validate() {
      return this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
