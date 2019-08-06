<template>
  <div>
    <aboveFold />
  </div>
</template>

<script>
import aboveFold from '~/components/Home/AboveFold.vue'

export default {
  components: {
    aboveFold
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/_variables.scss';
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: $light;
}

.title {
  font-weight: 400;
  font-size: 100px;
  color: $primary;
  letter-spacing: 1px;
}

.subtitle {
  text-align: center;
  color: $primary;
  font-size: 1.75rem;
  font-weight: 400;
}

.links {
  padding-top: 15px;
}
</style>
