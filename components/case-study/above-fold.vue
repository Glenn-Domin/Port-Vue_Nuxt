<template>
  <header class="above-fold">
    <div class="item-content">
      <slot name="heading" />
      <slot name="subheading" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.above-fold {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background-color: #1c1d25;
  background-position: top left;
  background-size: cover;
  background-repeat: no-repeat;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: block;
    background: #1c1d25;
    opacity: .6;
    transition: opacity .3s ease;
    z-index: 2;
  }
}
</style>