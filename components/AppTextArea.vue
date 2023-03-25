<template>
  <v-textarea
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

$bus.$on("remove", (data) => (value = data));
function setString(key, value) {
  $bus.$emit(key, value);
}
</script>
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
