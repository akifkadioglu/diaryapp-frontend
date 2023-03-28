<template>
  <v-card outlined width="500px">
    <v-form ref="form" lazy-validation>
      <v-card-title primary-title> Diary App </v-card-title>
      <FormInputs
        @email="(v) => (form.email = v)"
        @password="(v) => (form.password = v)"
      />
      <FormActions :form="form" :validate="isValid" @validate="validate" />
    </v-form>
  </v-card>
</template>

<script>
import FormActions from "../components/Login/FormActions.vue";
import FormInputs from "../components/Login/FormInputs.vue";
export default {
  components: {
    FormInputs,
    FormActions,
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
      },
      isLoading: false,
      isValid: false,
    };
  },
  methods: {
    validate() {
      this.isValid = this.$refs.form.validate();
    },
  },
};
</script>
