<template>
  <div class="page">
    <navbar />
    <nuxt />
    <back />
  </div>
</template>

<script>
import navbar from '~/components/global/Navbar'
import back from '~/components/case-study/cs-link'

export default {
  components: {
    navbar,
    back
  }
}
</script>

<style scoped>
.page {
  background: white;
}
</style>