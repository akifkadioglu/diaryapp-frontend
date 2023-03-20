<template>
  <v-text-field
    class="text-teal-darken-4"
    variant="outlined"
    density="comfortable"
    :placeholder="placeholder"
    :label="label"
    :type="type"
    v-model="value"
    @input="setString(textkey, value)"
  />
</template>
<script setup>
const { $bus } = useNuxtApp();

function setString(key, value) {
  $bus.$emit(key, value);
}
</script>
<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    textkey: {
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
