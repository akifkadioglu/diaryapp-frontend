<template>
  <div>
    <slot />
    <AppFooter class="footer" />
  </div>
</template>

<style scoped>
.footer {
  position: fixed;
  width: 100%;
  bottom: 15px;
  right: 15px;
}
</style>
