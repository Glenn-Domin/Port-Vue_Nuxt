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

<style lang="scss">
@import '~/assets/scss/_variables.scss';

.case-content {
  margin-top: 100vh;

  section {
    padding-bottom: 60px;
  }
}

.list {
  margin-bottom: 3rem;
  padding-left: 0;

  &:last-child {
    margin-bottom: 0;
  }
}

.tech-list {
  margin-bottom: 3rem;

  li {
    padding-top: .5rem;
  }
}
</style>

<style scoped>
.page {
  position: relative;
  overflow-x: hidden;
}
</style>