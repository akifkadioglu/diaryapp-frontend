<template>
  <v-tooltip v-if="overlayText" :location="location" origin="auto">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        rounded="0"
        class="text-subtitle-1 text-capitalize"
        :prepend-icon="icon"
        variant="tonal"
        :color="color"
        @click="click"
        :width="width"
        :to="to"
        :height="height"
        :loading="isLoading"
      >
        {{ text }}
      </v-btn>
    </template>

    <div>{{ overlayText }}</div>
  </v-tooltip>
  <v-btn
    v-else
    rounded="0"
    class="text-subtitle-1 text-capitalize"
    :prepend-icon="icon"
    variant="tonal"
    :color="color"
    @click="click"
    :width="width"
    :to="to"
    :height="height"
    :loading="isLoading"
  >
    {{ text }}
  </v-btn>
</template>
<script>
export default {
  computed: {
    location() {
      return `${this.locationSide} ${this.locationAlign}`;
    },
  },
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
