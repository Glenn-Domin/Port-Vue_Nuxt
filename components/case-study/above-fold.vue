<template>
  <header class="above-fold">
    <div class="item-content">
      <slot name="heading" />
      <slot name="subheading" />
    </div>
    <a href="#content" class="scroll-down" @click.prevent="anchorMove()">
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" width="20"><path fill="currentColor" d="M252.485 343.03l-7.07-7.071c-4.686-4.686-12.284-4.686-16.971 0L145 419.887V44c0-6.627-5.373-12-12-12h-10c-6.627 0-12 5.373-12 12v375.887l-83.444-83.928c-4.686-4.686-12.284-4.686-16.971 0l-7.07 7.071c-4.686 4.686-4.686 12.284 0 16.97l116 116.485c4.686 4.686 12.284 4.686 16.971 0l116-116.485c4.686-4.686 4.686-12.284-.001-16.97z"/></svg>
      Details
    </a>
  </header>
</template>

<script>
export default {
  methods: {
    anchorMove() {
      document.getElementById('content').scrollIntoView({
        behavior: 'smooth', // smooth scroll
        block: 'start' // the upper border of the element will be aligned at the top of the visible part of the window of the scrollable area.
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.above-fold {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background-color: #1c1d25;
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
    opacity: .75;
    transition: opacity .3s ease;
    z-index: 2;
  }
}

.scroll-down {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  color: white;
  z-index: 3;
  width: 70px;
  text-align: center;
  padding-bottom: .5rem;
  animation: fadeIn .3s ease 0s 1 forwards;

  svg {
    margin-bottom: 1rem;
    transition: transform .3s ease;
  }

  &:hover {
    text-decoration: none;

    svg {
      transform: translateY(1rem);
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>