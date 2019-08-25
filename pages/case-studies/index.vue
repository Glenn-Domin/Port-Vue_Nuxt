<template>
  <main>
    <section class="page-heading">
      <h1 class="title text-center">Case Studies</h1>
      <h2 class="subtitle text-center">Notable works</h2>
    </section>
    <section class="case-listing">
      <div class="container">
        <client-only>
          <article
          v-for="image in images"
          :key="image.name"
          class="item"
          :style="{ parentDimensions: transitioning }">
            <a
            :ref="image.name"
            :href="'case-studies-' + image.name"
            :class="['item-link', { 'item-transitioning': transitioning }]"
            :style="'background-image: url(' + image.path + ')'"
            @click.prevent="nextPage(image.name)">
              <div class="item-content">
                <h2 class="item-title">{{ image.label }}</h2>
                <h3 class="item-subtitle">{{ image.sub }}</h3>
              </div>
            </a>
          </article>
        </client-only>
      </div>
    </section>
  </main>
</template>

<script>
import { TweenMax } from "gsap/TweenMax"

export default {
  data() {
    return {
      images: [{
          name: 'campdraft-one',
          label: 'Campdraft One',
          sub: 'Back-end management system.',
          path: require('~/static/images/cd-lg-op.jpg')
        },
        {
          name: 'campdraft',
          label: 'Australian Campdrafting Association',
          sub: 'Public-facing site.',
          path: require('~/static/images/cd4-lg-op.jpg')
      },
        {
          name: 'tus',
          label: 'Total Uniform Solutions',
          sub: 'Magento multi-store e-commerce site.',
          path: require('~/static/images/tus-lg-op.jpg')
      }],
      transitioning: false,
      parentDimensions: null
    }
  },
  methods: {
    nextPage(caseStudy) {
      // Getting dimensions and setting transition logic
      const el = this.$refs[caseStudy][0]
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
        scroll(0,0)
        this.$router.push({ name: 'case-studies-' + caseStudy, params: { dimensions } })
      }, 450);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
.case-listing {

  .item {
    display: block;
    width: 80%;
    height: 480px;
    opacity: 1;
    background-color: $dark;
    box-shadow: 0 20px 80px 0 rgba(0,0,0,.45);
    margin: 5rem auto;

    &:nth-child(odd) {
      margin-left: 0;
    }

    &:nth-child(even) {
      margin-right: 0;
    }

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
        background: $dark;
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
.case-listing {
  padding-top: 2rem;
  padding-bottom: 2rem;
  background: white;
}

.item-content {
  position: absolute;
  left: 90px;
  right: 90px;
  bottom: 90px;
  color: #fff;
  z-index: 10;
  max-width: 650px;
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