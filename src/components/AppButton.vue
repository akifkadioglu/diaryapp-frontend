<template>
  <v-tooltip v-if="overlayText" bottom transition="scroll-y-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        rounded
        depressed
        class="text-subtitle-1 text-capitalize"
        :color="color"
        @click="click(), to ? $router.push({ name: to }) : null"
        :width="width"
        :height="height"
        :loading="isLoading"
      >
        <v-icon v-if="icon">{{ icon }}</v-icon>
        {{ text }}
      </v-btn>
    </template>
    <span>{{ overlayText }}</span>
  </v-tooltip>
  <v-btn
    v-else
    rounded
    depressed
    class="text-subtitle-1 text-capitalize"
    :color="color"
    @click="click(), to ? $router.push({ name: to }) : null"
    :width="width"
    :height="height"
    :loading="isLoading"
  >
    {{ text }}
  </v-btn>
</template>
<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    locationSide: {
      type: String,
      default: "bottom",
    },
    locationAlign: {
      type: String,
      default: "center",
    },
    overlayText: {
      type: String,
      default: "",
    },
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
      default() {},
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
