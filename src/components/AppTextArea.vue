<template>
  <v-textarea
    filled
    rounded
    :placeholder="placeholder"
    :label="label"
    :type="type"
    v-model="value"
    :rules="rules"
    counter
    maxlength="2500"
    @input="
      (e) => {
        $emit('input', e);
      }
    "
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
    rules: {
      type: Array,
      default() {
        return [];
      },
    },
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
