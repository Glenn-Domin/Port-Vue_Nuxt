<template>
  <main class="case-listing">
    <section class="container">
      <h1 class="title text-center">Case Studies</h1>
      <h2 class="subtitle text-center">Notable works</h2>
      <article v-if="images" class="item" :style="'background-image: url(' + images.campdraft + ')'">
        <nuxt-link
          :to="{ name: 'case-studies-campdraft-one', params: { dimensions: '1' } }"
          class="item-link">
          <div class="item-content">
            <h2 class="item-title">Campdraft One</h2>
            <h3 class="item-subtitle">Back-end management system.</h3>
          </div>
        </nuxt-link>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      images: {
        campdraft: require('~/static/images/cd-lg-op.jpg')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.case-listing {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background: white;

  .item {
    display: block;
    width: 80%;
    height: 480px;
    opacity: 1;
    background-color: #1c1d25;
    box-shadow: 0 20px 80px 0 rgba(0,0,0,.45);
    margin: 5rem auto 0;
    background-position: top left;
    background-size: cover;
    background-repeat: no-repeat;

    .item-link {
      display: block;
      height: 100%;
      position: relative;

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
    }

    .item-content {
      position: absolute;
      left: 90px;
      bottom: 90px;
      color: #fff;
      z-index: 10;
      max-width: 550px;
      -webkit-transform: scale(1) translateX(0);
      transform: scale(1) translateX(0);
      transition: opacity .25s,-webkit-transform .45s;
      transition: transform .45s,opacity .25s;
      transition: transform .45s,opacity .25s,-webkit-transform .45s;
    }

    .item-title {
      margin-bottom: 0;
      font-family: League Spartan,Helvetica,Arial,sans-serif;
      font-size: 3rem;
    }

    .item-subtitle {
      font-style: italic;
      font-weight: 400;
      font-size: 1rem;
    }
  }
}
</style>