<template>
  <v-text-field
    filled
    rounded
    :placeholder="placeholder"
    :label="label"
    :type="type"
    v-model="value"
  />
</template>

<script>
export default {
  watch: {
    reload() {
      this.value = "";
    },
  },
  props: {
    reload: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style></style>
