<template>
  <v-btn
    rounded="0"
    class="text-subtitle-1"
    :prepend-icon="icon"
    variant="tonal"
    :color="color"
    @click="click"
    :width="width"
    :to="to"
    :height="height"
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
    height: {
      type: String,
      default: "40px",
    },
    to: {
      type: String,
      default: "",
    },
  },
};
</script>
