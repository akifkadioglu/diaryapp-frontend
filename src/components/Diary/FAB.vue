<template>
  <div class="fab">
    <v-speed-dial
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
      :loading="isLoading"
      depressed
    >
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab>
          <v-icon v-if="fab"> mdi-close </v-icon>
          <v-icon v-else> mdi-code-braces </v-icon>
        </v-btn>
      </template>
      <v-btn fab dark small @click="$emit('download')" color="green">
        <v-icon>mdi-download-outline</v-icon>
      </v-btn>
      <v-btn fab dark small color="indigo" @click="$emit('email')">
        <v-icon>mdi-email-fast-outline</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    top(val) {
      this.bottom = !val;
    },
    right(val) {
      this.left = !val;
    },
    bottom(val) {
      this.top = !val;
    },
    left(val) {
      this.right = !val;
    },
  },
  data() {
    return {
      direction: "top",
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: "slide-y-reverse-transition",
    };
  },
};
</script>

<style>
.fab {
  position: fixed;
  right: 15px;
  bottom: 75px;
}
</style>
