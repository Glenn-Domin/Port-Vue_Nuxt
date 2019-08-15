<template>
  <main class="case-listing">
    <article>
      <above-fold :img="aboveFold" />
      <section class="case-content container">
        <h1 class="title text-center">Campdraft One</h1>
        {{ $route.params }}
      </section>
    </article>
  </main>
</template>

<script>
import aboveFold from '~/components/case-study/above-fold'

export default {
  name: 'CampdraftOne',
  layout: 'case-study',
  components: {
    'above-fold': aboveFold
  },
  data() {
    return {
      aboveFold: '~/static/images/cd-lg-op.jpg'
    }
  }
}
</script>

<style lang="scss">
.page {
  position: relative;
  overflow-x: hidden;
}

.case-content {
 margin-top: 100vh;
}
</style>