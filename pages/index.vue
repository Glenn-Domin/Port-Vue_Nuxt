<template>
  <main class="container home">
    <section class="home-section">
      <h1 class="title">Glenn Domin</h1>
      <p class="subtitle">A Senior Front-End Developer who makes websites 
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
      <div class="text-center">
        <button class="btn" @click="showModal = true">About Me</button>
      </div>
      <div v-if="!isAble" style="margin-top: 20px;">
        Hi! I'm so glad you're visiting my wonderful portfolio site. <br>
        I wish you'd visit using a wonderful browser. <br>
        There are features I'd love to show you if only you'd visit using 
        Chrome, Firefox, Edge, Safari, or any other <a href="https://www.techopedia.com/definition/31094/evergreen-browser" target="_blank" rel="noreferrer">Evergreen browser</a>.
      </div>
    </section>
    <netlifyForm />
    <about v-if="showModal" @close="showModal = false" />
    <particles v-if="isAble" />
  </main>
</template>

<script>
import about from '~/components/home/About'
import netlifyForm from '~/static/form'
const particles = () => window.NodeList && NodeList.prototype.forEach
  ? import('~/components/home/Particles.vue')
  : false

export default {
  layout: 'default',
  components: {
    about,
    netlifyForm,
    particles
  },
  data() {
    return {
      isAble: window.NodeList && NodeList.prototype.forEach,
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
.home {
  margin: auto;
  display: flex;
  align-items:center;
  justify-content: center;
  color: white;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;

  .btn {
    font-weight: 500;
    font-size: 18px;
    margin: 0 auto;
  }
}

.home-section {
  transition: opacity 0.5s;
  opacity: 1;
}

.title {
  text-transform: uppercase;
  line-height: 1;

  @media (max-width: 767px) {
    text-align: left;
  }

  @media (min-width: 768px) {
    font-size: 8rem;
  }
}

.subtitle {
  margin: 0 0 1.5rem;
  font-size: 1.25rem;

  @media (min-width: 768px) {
    text-align: center;
    margin: -14px 0 1.5rem 90px;
  }

  ul {
    display: inline-block;
    position: relative;
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
    vertical-align: top;
    overflow: hidden;
    height: 2rem;
    text-align: left;

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
.subtitle {
  font-weight: 400;
}

@media (max-width: 768px) {
  .home .title {
    font-size: 3rem;
  }
}
</style>
