<template>
  <div class="page">
    <navbar />
    <nuxt />
  </div>
</template>

<script>
import navbar from '~/components/global/Navbar'

export default {
  components: {
    navbar
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/_variables.scss';
html {
  -ms-overflow-style: scrollbar;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: $font-family-default;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: $dark;
  text-align: left;
  background-color: $dark;
}
</style>
