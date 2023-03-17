<template>
  <main>
    <header class="page-heading">
      <hgroup>
        <h1 class="title text-center">Case Studies</h1>
        <h2 class="subtitle text-center">Notable works</h2>
      </hgroup>
    </header>
    <section class="case-listing">
      <div class="container">
        <article
          v-for="image in images"
          :key="image.name"
          class="item"
          :style="{ parentDimensions: transitioning }"
        >
          <a
            :ref="image.name"
            :href="'case-studies-' + image.name"
            :class="['item-link', { 'item-transitioning': transitioning }]"
            :style="'background-image: url(' + image.path + ')'"
            @click.prevent="nextPage(image.name)"
          >
            <hgroup class="item-content">
              <h2 class="item-title">{{ image.label }}</h2>
              <h3 class="item-subtitle">{{ image.sub }}</h3>
            </hgroup>
          </a>
        </article>
      </div>
    </section>
  </main>
</template>

<script>
import { TweenMax } from 'gsap/TweenMax'

export default {
  data() {
    return {
      images: [
        {
          name: 'peak',
          label: "Peak Marketing",
          sub: 'Magento e-commerce site.',
          path: require('~/static/images/peak-lg-op.jpg')
        },
        {
          name: 'teds',
          label: "Ted's Cameras",
          sub: 'Magento e-commerce site.',
          path: require('~/static/images/teds-bg-op.png')
        },
        {
          name: 'highgrove',
          label: "Highgrove Bathrooms",
          sub: 'Magento e-commerce site.',
          path: require('~/static/images/highgrove-bg-op.png')
        },
        {
          name: 'qtco',
          label: 'QTCo.',
          sub: 'VueJS/Laravel admin/client portal.',
          path: require('~/static/images/qtco-bg.png')
        },
        {
          name: 'louenhide',
          label: 'Louenhide',
          sub: 'WooCommerce e-commerce site.',
          path: require('~/static/images/lh-lg-op.jpg')
        },
        {
          name: 'tus',
          label: 'Total Uniform Solutions',
          sub: 'Magento multi-store e-commerce site.',
          path: require('~/static/images/tus-lg-op.jpg')
        },
        {
          name: 'campdraft-one',
          label: 'Campdraft One',
          sub: 'VueJS/Laravel Back-end management system.',
          path: require('~/static/images/cd-lg-op.jpg')
        },
        {
          name: 'campdraft',
          label: 'Australian Campdrafting Association',
          sub: 'WordPress Public-facing site.',
          path: require('~/static/images/cd4-lg-op.jpg')
        }
      ],
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
      TweenMax.fromTo(
        el,
        0.45,
        {
          top: dimensions.top,
          left: dimensions.left,
          width: dimensions.width,
          height: dimensions.height
        },
        {
          top: 0,
          left: 0,
          width: Math.max(
            document.documentElement.clientWidth,
            window.innerWidth
          ),
          height: Math.max(
            document.documentElement.clientHeight,
            window.innerHeight
          )
        }
      )
      // After transition time, change the route
      setTimeout(() => {
        scroll(0, 0)
        this.$router.push({
          name: 'case-studies-' + caseStudy,
          params: { dimensions }
        })
      }, 450)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
.case-listing {
  .item {
    display: block;
    height: 320px;
    opacity: 1;
    background-color: $dark;
    box-shadow: 0 20px 80px 0 rgba(0, 0, 0, 0.45);
    margin: 5rem auto;

    @media (min-width: 768px) {
      width: 80%;
      height: 480px;
    }

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
        opacity: 0.6;
        transition: opacity 0.3s ease;
        z-index: 2;
      }

      &:hover::after {
        opacity: 0.75;
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
}

.item-content {
  position: absolute;
  left: 6vw;
  right: 6vw;
  bottom: 90px;
  color: #fff;
  z-index: 10;
  max-width: 650px;
  transform: scale(1) translateX(0);
  transition: transform 0.45s, opacity 0.25s;

  @media (min-width: 768px) {
    left: 90px;
    right: 90px;
  }
}

.item-title {
  margin-bottom: 0;
  font-family: 'League Spartan', Helvetica, Arial, sans-serif;
  font-size: 1.75rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
}

.item-subtitle {
  font-weight: 400;
  font-size: 1rem;
}
</style>
