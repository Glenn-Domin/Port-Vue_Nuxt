<template>
  <main class="container above-fold">
    <section>
      <h1 class="title">Glenn Domin</h1>
      <p class="subtitle">A Front-end developer who makes websites 
        <ul>
          <li>semantic</li>
          <li>performant</li>
          <li>efficient</li>
          <li>modular</li>
          <li>scalable</li>
          <li>accessible</li>
          <li>aesthetic</li>
          <li>secure</li>
          <li>standards-compliant</li>
          <li>bullet-proof</li>
        </ul>
      </p>
      <button class="btn" @click="showModal = true">About Me</button>
    </section>
    <shapes />
    <netlifyForm />
    <about v-if="showModal" @close="showModal = false" />
    <particles />
  </main>
</template>

<script>
import shapes from '~/components/global/Shapes'
import about from '~/components/home/About'
import particles from '~/components/home/Particles'
import netlifyForm from '~/static/form'

export default {
  layout: 'default',
  components: {
    shapes,
    about,
    particles,
    netlifyForm
  },
  data() {
    return {
      showModal: false
    }
  },
  watch: {
    $route() {
      this.showModal = this.$route.hash
    }
  },
  mounted() {
    this.showModal = this.$route.hash
  }
}
</script>

<style lang="scss" scoped>
.above-fold {
  margin: auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  color: white;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.subtitle {

  ul {
    display: inline-block;
    position: relative;
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
    vertical-align: top;
    overflow: hidden;
    height: 2rem;

    &::after {
      content: 'semantic';
      display: block;
      animation: listUp 20s linear 1s infinite;
    }

    li {
      animation: listUp 20s linear 1s infinite;
    }
  }
}

@keyframes listUp {
  0%        { transform: translateY(0px); }
  5%, 10%   { transform: translateY(-1.5em); }
  15%, 20%  { transform: translateY(-3em); }
  25%, 30%  { transform: translateY(-4.5em); }
  35%, 40%  { transform: translateY(-6em); }
  45%, 50%  { transform: translateY(-7.5em); }
  55%, 60%  { transform: translateY(-9em); }
  65%, 70%  { transform: translateY(-10.5em); }
  75%, 80%  { transform: translateY(-12em); }
  85%, 90%  { transform: translateY(-13.5em); }
  95%, 100% { transform: translateY(-15em); }
}
</style>

<style lang="scss">
.title {
  font-size: 2.5rem;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
}

.subtitle {
  margin-bottom: 1.75rem;
  font-style: italic;
  font-weight: 400;
  font-size: 1.25rem;
}
</style>
