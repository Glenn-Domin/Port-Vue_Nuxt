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

<style scoped>
.page {
  background: white;
}
</style>