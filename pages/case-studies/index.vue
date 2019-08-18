<template>
  <main>
    <section class="case-heading">
      <h1 class="title text-center">Case Studies</h1>
      <h2 class="subtitle text-center">Notable works</h2>
    </section>
    <section class="container case-listing">
      <article
      v-if="images"
      class="item"
      :style="{ parentDimensions: transitioning }">
        <a
        ref="campdraft-one"
        :href="'case-studies-' + 'campdraft-one'"
        :class="['item-link', { 'item-transitioning': transitioning }]"
        :style="'background-image: url(' + images.campdraft + ')'"
        @click.prevent="nextPage('campdraft-one')">
          <div class="item-content">
            <h2 class="item-title">Campdraft One</h2>
            <h3 class="item-subtitle">Back-end management system.</h3>
          </div>
        </a>
      </article>
    </section>
  </main>
</template>

<script>
import TweenMax from "gsap/TweenMax"

export default {
  data() {
    return {
      images: {
        campdraft: require('~/static/images/cd-lg-op.jpg')
      },
      transitioning: false,
      parentDimensions: null
    }
  },
  methods: {
    nextPage(caseStudy) {
      // Getting dimensions and setting transition logic
      const el = this.$refs[caseStudy]
      const dimensions = el.getBoundingClientRect()
      this.parentDimensions = `width: ${dimensions.width}px; height: ${dimensions.height}px;`
      this.transitioning = true
      // Transition thumbnail to full-screen
      TweenMax.fromTo(el, .45, {
        top: dimensions.top,
        left: dimensions.left,
        width: dimensions.width,
        height: dimensions.height
      }, {
        top: 0,
        left: 0,
        width: Math.max(document.documentElement.clientWidth, window.innerWidth),
        height: Math.max(document.documentElement.clientHeight, window.innerHeight)
      })
      // After transition time, change the route
      setTimeout(() => {
        this.$router.push({ name: 'case-studies-' + caseStudy, params: { dimensions } })
      }, 450);
    }
  }
}
</script>

<style lang="scss" scoped>
.case-heading {
  color: white;
}

.case-listing {
  padding-top: 2rem;
  padding-bottom: 2rem;
  background: white;

  .item {
    display: block;
    width: 80%;
    height: 480px;
    opacity: 1;
    background-color: #1c1d25;
    box-shadow: 0 20px 80px 0 rgba(0,0,0,.45);
    margin: 5rem auto;

    .item-link {
      display: block;
      height: 100%;
      position: relative;
      background-position: top left;
      background-size: cover;
      background-repeat: no-repeat;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        display: block;
        background: #1c1d25;
        opacity: .6;
        transition: opacity .3s ease;
        z-index: 2;
      }

      &:hover::after {
        opacity: .75;
      }
    }

    .item-transitioning {
      position: fixed;
    }
  }
}
</style>

<style lang="scss">
.item-content {
  position: absolute;
  left: 90px;
  bottom: 90px;
  color: #fff;
  z-index: 10;
  max-width: 550px;
  transform: scale(1) translateX(0);
  transition: transform .45s,opacity .25s;
}

.item-title {
  margin-bottom: 0;
  font-family: League Spartan, Helvetica,Arial, sans-serif;
  font-size: 3rem;
}

.item-subtitle {
  font-style: italic;
  font-weight: 400;
  font-size: 1rem;
}
</style>