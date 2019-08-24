<template>
  <div class="shapes" aria-hidden="true">
    <vue class="shape vue" width="30" height="25.97" />
    <bootstrap class="shape bootstrap" width="25" height="25" />
    <javascript class="shape js" width="35" height="40" />
    <css class="shape css" width="25" height="25" />
    <html5 class="shape html" width="25" height="33.33" />
    <wordpress class="shape wp" width="25" height="25" />
    <sass class="shape sass" width="33" height="24.75" />
  </div>
</template>

<script>
import vue from './shapes/Vue'
import bootstrap from './shapes/Bootstrap'
import javascript from './shapes/Javascript'
import css from './shapes/CSS'
import html5 from './shapes/HTML'
import wordpress from './shapes/WP'
import sass from './shapes/Sass'

export default {
  components: {
    vue,
    bootstrap,
    javascript,
    css,
    html5,
    wordpress,
    sass
  }
}
</script>

<style lang="scss">
.shapes {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

.shape {
  position: absolute;
}

.vue {
  top: 50%;
  left: 50%;
  transform: rotate3d(1, 1, 1, 45deg);
  animation: vue 120s linear 0s infinite forwards;
}

.bootstrap {
  top: 20%;
  left: 12%;
  transform: rotate3d(1, 1, 1, 45deg);
  animation: bootstrap 90s linear 0s infinite forwards;
}

.js {
  bottom: 8%;
  left: 20%;
  transform: rotate3d(1, 1, 1, 25deg);
  animation: js 45s linear 0s infinite forwards;
}

.css {
  top: 50%;
  right: 12%;
  transform: rotate3d(1, 1, 10, 70deg);
  animation: css 35s linear 0s infinite forwards;
}

.html {
  bottom: 6%;
  right: 20%;
  transform: rotate3d(1, 1, 10, -20deg);
  animation: html 150s linear 0s infinite forwards;
}

.wp {
  bottom: 15%;
  left: 3%;
  transform: rotate3d(1, 1, 10, -20deg);
  animation: wp 180s linear 0s infinite forwards;
}

.sass {
  top: 15%;
  right: 10%;
  transform: rotate3d(1, 1, 5, -10deg);
  animation: sass 120s linear 0s infinite forwards;
}

@keyframes vue {
  0% {
    transform: rotate3d(1, 1, 1, 45deg);
    opacity: 1;
  }
  25% {
    transform: rotate3d(1, 1, 0, 55deg) translate3d(70px, -100px, 100px)
      scale(0.85);
    opacity: 0.85;
  }
  50% {
    transform: rotate3d(0, 1, 1, 60deg) translate3d(152px, -170px, 100px)
      scale(0.8);
    opacity: 0.8;
  }
  75% {
    transform: rotate3d(1, 0, 1, 65deg) translate3d(230px, -80px, -30px)
      scale(0.9);
    opacity: 0.9;
  }
  100% {
    transform: rotate3d(1, 1, 1, 45deg);
    opacity: 1;
  }
}

@keyframes bootstrap {
  0% {
    transform: rotate3d(1, 1, 1, 45deg);
    opacity: 1;
  }
  25% {
    transform: rotate3d(1, 0, 1, 50deg) translate3d(30px, -20px, -10px)
      scale(0.75);
    opacity: 0.75;
  }
  50% {
    transform: rotate3d(0, 1, 1, 55deg) translate3d(12px, -10px, 10px)
      scale(0.6);
    opacity: 0.6;
  }
  75% {
    transform: rotate3d(1, 1, 0, 50deg) translate3d(7px, -10px, 10px) scale(0.8);
    opacity: 0.8;
  }
  100% {
    transform: rotate3d(1, 1, 1, 45deg);
    opacity: 1;
  }
}

@keyframes js {
  0% {
    transform: rotate3d(1, 1, 1, 25deg);
    opacity: 1;
  }
  25% {
    transform: rotate3d(3, 5, 0.5, 25deg) translate3d(90px, -20px, -10px)
      scale(0.95);
    opacity: 0.95;
  }
  50% {
    transform: rotate3d(-1, -1, -1, 25deg) translate3d(190px, 30px, 20px)
      scale(1);
    opacity: 1;
  }
  75% {
    transform: rotate3d(3, 5, 0.5, 25deg) translate3d(90px, -20px, -10px)
      scale(0.95);
    opacity: 0.95;
  }
  100% {
    transform: rotate3d(1, 1, 1, 25deg);
    opacity: 1;
  }
}

@keyframes css {
  0% {
    transform: rotate3d(1, 1, 10, 70deg);
    opacity: 1;
  }
  25% {
    transform: rotate3d(2, 3, 8, 60deg) translate3d(38px, -23px, -25px)
      scale(0.95);
    opacity: 0.95;
  }
  50% {
    transform: rotate3d(2.5, 4, 7, 55deg) translate3d(55px, -45px, -55px)
      scale(1);
    opacity: 1;
  }
  75% {
    transform: rotate3d(1.5, 2.5, 9, 65deg) translate3d(29px, -22px, -15px)
      scale(0.95);
    opacity: 0.95;
  }
  100% {
    transform: rotate3d(1, 1, 10, 70deg);
    opacity: 1;
  }
}

@keyframes html {
  0% {
    transform: rotate3d(1, 1, 10, -20deg);
    opacity: 1;
  }
  25% {
    transform: rotate3d(1, 1, 0, -35deg) translate3d(178px, -33px, -65px)
      scale(0.9);
    opacity: 0.9;
  }
  50% {
    transform: rotate3d(0, 1, 0, -25deg) translate3d(198px, 17px, -45px)
      scale(0.85);
    opacity: 0.85;
  }
  75% {
    transform: rotate3d(1, 0, 0, -22deg) translate3d(110px, 20px, -15px)
      scale(0.95);
    opacity: 0.95;
  }
  100% {
    transform: rotate3d(1, 1, 10, -20deg);
    opacity: 1;
  }
}

@keyframes wp {
  0% {
    transform: rotate3d(1, 1, 10, -20deg);
    opacity: 1;
  }
  33% {
    transform: rotate3d(1, 0.1, 0.3, -35deg) translate3d(108px, -93px, -115px)
      scale(0.9);
    opacity: 0.9;
  }
  66% {
    transform: rotate3d(0.4, 0.1, 0.3, -35deg) translate3d(88px, -73px, -95px)
      scale(0.85);
    opacity: 0.85;
  }
  100% {
    transform: rotate3d(1, 1, 10, -20deg);
    opacity: 1;
  }
}

@keyframes sass {
  0% {
    transform: rotate3d(1, 1, 5, -10deg);
    opacity: 1;
  }
  33% {
    transform: rotate3d(0.5, 0.6, 0.2, -40deg) translate3d(88px, -33px, -35px)
      scale(0.75);
    opacity: 0.75;
  }
  66% {
    transform: rotate3d(1, 0.7, -0.3, -25deg) translate3d(88px, -23px, 15px)
      scale(0.8);
    opacity: 0.8;
  }
  100% {
    transform: rotate3d(1, 1, 5, -10deg);
    opacity: 1;
  }
}
</style>
