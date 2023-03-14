<template>
  <v-btn
    rounded="pill"
    class="text-subtitle-1"
    :prepend-icon="icon"
    variant="tonal"
    :color="color"
    @click="click"
    :width="width"
    to="/"
  >
    {{ text }}
  </v-btn>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
    click: {
      type: Function,
    },
    width: {
      type: String,
      default: "100%",
    },
  },
};
</script>
