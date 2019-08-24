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

.content a {
  font-weight: 500;
  border-bottom: 2px solid $primary;
  text-decoration: none;
  color: $primary;
  box-shadow: inset 0 0 0 0.01px $primary;
  transition: all 0.25s;

  &:hover {
    color: white;
    box-shadow: inset 0 -1.5em 0 0 $primary;
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

.tech-block {
  margin-bottom: 60px;
}
</style>

<style scoped>
.page {
  position: relative;
  overflow-x: hidden;
  background: white;
}
</style>