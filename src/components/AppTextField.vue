<template>
  <v-text-field
    filled
    rounded
    :placeholder="placeholder"
    :label="label"
    :type="type"
    v-model="value"
    :rules="rules"
    dense
    counter
    maxlength="255"
    @input="
      (e) => {
        $emit('input', e);
      }
    "
  />
</template>

<script>
export default {
  props: {
    rules: {
      type: Array,
      default() {
        return [];
      },
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
