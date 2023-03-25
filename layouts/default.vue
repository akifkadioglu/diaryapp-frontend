<template>
  <div>
    <AppHeadbar />
    <div class="mt-13">
      <slot />
    </div>
    <AppFooter class="footer" />
  </div>
</template>

<style scoped>
.footer {
  position: fixed;
  width: 100%;
  bottom: 15px;
  right: 10px;
}
</style>
