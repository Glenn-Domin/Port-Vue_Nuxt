<template>
  <header
  class="above-fold"
  :style="'background-image: url(' + image + ')'">
    <div class="item-content">
      <h2 class="item-title">Campdraft One</h2>
      <h3 class="item-subtitle">Back-end management system.</h3>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      image: require('~/static/images/cd-lg-op.jpg')
    }
  }
}
</script>

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