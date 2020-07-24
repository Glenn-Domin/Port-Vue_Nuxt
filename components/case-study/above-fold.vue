<template>
  <header class="above-fold">
    <hgroup class="item-content">
      <slot name="heading" />
      <slot name="subheading" />
    </hgroup>
    <a href="#content" class="scroll-down" @click.prevent="anchorMove()">
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="20" height="32"><path d="M300.3 327.5l-19.6-19.6c-4.8-4.8-12.5-4.7-17.1.2L186 388.8V44c0-6.6-5.4-12-12-12h-28c-6.6 0-12 5.4-12 12v344.8l-77.5-80.7c-4.7-4.8-12.4-4.9-17.1-.2l-19.6 19.6c-4.7 4.7-4.7 12.3 0 17l131.8 131.8c4.7 4.7 12.3 4.7 17 0l131.8-131.8c4.6-4.7 4.6-12.3-.1-17z" fill="currentColor"/></svg>
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