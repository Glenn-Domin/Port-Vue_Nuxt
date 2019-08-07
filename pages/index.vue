<template>
  <main class="container above-fold">
    <section>
      <h1 class="title">Glenn Domin</h1>
      <h2 class="subtitle">Front-end developer.</h2>
      <button class="btn" @click="showModal = true">About Me</button>
    </section>
    <shapes />
    <about v-if="showModal" @close="showModal = false" />
  </main>
</template>

<script>
import shapes from '~/components/global/Shapes'
import about from '~/components/home/About'

export default {
  components: {
    shapes,
    about
  },
  data() {
    return {
      showModal: false
    }
  }
}
</script>

<style>
.above-fold {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.title {
  font-size: 4rem;
}

.subtitle {
  font-size: 1.75rem;
  font-weight: 400;
  margin-bottom: 1.75rem;
}
</style>
