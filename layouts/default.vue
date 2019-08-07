<template>
  <div class="page">
    <shapes />
    <nuxt />
  </div>
</template>

<script>
import shapes from '~/components/global/Shapes.vue'

export default {
  components: {
    shapes
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
  color: $primary;
  text-align: left;
  background-color: $dark;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
