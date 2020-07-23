<template>
  <div :class="['modal modal-about', mountedClass]" tabindex="-1" role="dialog">
    <button aria-label="Close" class="close" @click="closeModal()">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="25" height="40"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"/></svg>
    </button>
    <div class="about">
      <h2 class="font-accent">About Me.</h2>
      <span class="presentation-text" aria-hidden="true">About</span>
      <p>I've been a Front-End Developer doing agency work for roughly seven years. Prior to that I've done freelance work, as well as creating websites for businesses I've worked at in other capacities.</p>
      <p>I've gained exposure in as many facets of web development as I can, as well as dipping my toe in to design/UX/UI. I've also managed to specialise in a few key areas:</p>
      <ul class="proficiency-list">
        <li>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="22.84"><path fill="currentColor" d="M292.3 311.93c0 42.41-39.72 41.43-43.92 41.43h-80.89v-81.69h80.89c42.56 0 43.92 31.9 43.92 40.26zm-50.15-73.13c.67 0 38.44 1 38.44-36.31 0-15.52-3.51-35.87-38.44-35.87h-74.66v72.18h74.66zM448 106.67v298.66A74.89 74.89 0 0 1 373.33 480H74.67A74.89 74.89 0 0 1 0 405.33V106.67A74.89 74.89 0 0 1 74.67 32h298.66A74.89 74.89 0 0 1 448 106.67zM338.05 317.86c0-21.57-6.65-58.29-49.05-67.35v-.73c22.91-9.78 37.34-28.25 37.34-55.64 0-7 2-64.78-77.6-64.78h-127v261.33c128.23 0 139.87 1.68 163.6-5.71 14.21-4.42 52.71-17.98 52.71-67.12z"/></svg>
          Standards-compliant Front-End Development (Bootstrap, SASS, Git, etc)
          </li>
        <li>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20"><path fill="currentColor" d="M256 8C119.3 8 8 119.2 8 256c0 136.7 111.3 248 248 248s248-111.3 248-248C504 119.2 392.7 8 256 8zM33 256c0-32.3 6.9-63 19.3-90.7l106.4 291.4C84.3 420.5 33 344.2 33 256zm223 223c-21.9 0-43-3.2-63-9.1l66.9-194.4 68.5 187.8c.5 1.1 1 2.1 1.6 3.1-23.1 8.1-48 12.6-74 12.6zm30.7-327.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-21.9 0-58.7-2.8-58.7-2.8-12-.7-13.4 17.7-1.4 18.4 0 0 11.4 1.4 23.4 2.1l34.7 95.2L200.6 393l-81.2-241.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-4.2 0-9.1-.1-14.4-.3C109.6 73 178.1 33 256 33c58 0 110.9 22.2 150.6 58.5-1-.1-1.9-.2-2.9-.2-21.9 0-37.4 19.1-37.4 39.6 0 18.4 10.6 33.9 21.9 52.3 8.5 14.8 18.4 33.9 18.4 61.5 0 19.1-7.3 41.2-17 72.1l-22.2 74.3-80.7-239.6zm81.4 297.2l68.1-196.9c12.7-31.8 17-57.2 17-79.9 0-8.2-.5-15.8-1.5-22.9 17.4 31.8 27.3 68.2 27.3 107 0 82.3-44.6 154.1-110.9 192.7z"/></svg>
          WordPress/WooCommerce site development
        </li>
        <li>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20" height="26.6"><path fill="currentColor" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
          Semantic HTML and Accessibility
        </li>
        <li>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="26.59"><path fill="currentColor" d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"/></svg>
          Tricky CSS problems and browser compliance
        </li>
        <li>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69" width="20" height="17.31"><path d="M161.096.001l-30.224 52.35L100.647.002H-.005L130.872 226.69 261.749 0z" fill="#9e9e9e"/><path d="M161.096.001l-30.224 52.35L100.647.002H52.346l78.526 136.01L209.398.001z" fill="currentColor"/></svg>
          Advanced JS Framework builds
        </li>
        <li>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20" height="17.77"><path fill="currentColor" d="M228.5 511.8l-25-7.1c-3.2-.9-5-4.2-4.1-7.4L340.1 4.4c.9-3.2 4.2-5 7.4-4.1l25 7.1c3.2.9 5 4.2 4.1 7.4L235.9 507.6c-.9 3.2-4.3 5.1-7.4 4.2zm-75.6-125.3l18.5-20.9c1.9-2.1 1.6-5.3-.5-7.1L49.9 256l121-102.5c2.1-1.8 2.4-5 .5-7.1l-18.5-20.9c-1.8-2.1-5-2.3-7.1-.4L1.7 252.3c-2.3 2-2.3 5.5 0 7.5L145.8 387c2.1 1.8 5.3 1.6 7.1-.5zm277.3.4l144.1-127.2c2.3-2 2.3-5.5 0-7.5L430.2 125.1c-2.1-1.8-5.2-1.6-7.1.4l-18.5 20.9c-1.9 2.1-1.6 5.3.5 7.1l121 102.5-121 102.5c-2.1 1.8-2.4 5-.5 7.1l18.5 20.9c1.8 2.1 5 2.3 7.1.4z"/></svg>
          Site Optimisation
        </li>
      </ul>
    </div>
    <div class="contact">
      <h2 class="font-accent">Let's Talk.</h2>
      <span class="presentation-text" aria-hidden="true">Contact</span>
      <form
      name="contact"
      method="post">
        <input type="hidden" name="form-name" value="contact-form" />
        <div class="form-group">
          <input id="name" type="text" name="name" placeholder=" " class="form-control" required />
          <label for="name">Name</label>
        </div>
        <div class="form-group">
          <input id="email" type="email" name="email" placeholder=" " class="form-control" required />
          <label for="email">Email</label>
        </div>
        <div class="form-group">
          <textarea id="message" name="message" placeholder=" " class="form-control" required></textarea>
          <label for="message">Message</label>
        </div>
        <button type="submit" class="btn">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mountedClass: ''
    }
  },
  mounted() {
    setTimeout(() => {
      this.mountedClass = 'mounted'
    }, 10);
  },
  methods: {
    closeModal() {
      this.mountedClass = ''
        setTimeout(() => {
          this.$emit('close')
      }, 1000);
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/_variables.scss';

.proficiency-list {
  margin-bottom: 0;
  padding-left: 0;

  li {
    display: flex;
    align-items: flex-start;

    + li {
      margin-top: 0.5rem;
    }

    svg {
      flex-shrink: 0;
      margin-top: 0;
      margin-bottom: 0.1rem;
      margin-right: 1rem;
    }
  }
}

.modal {

  @media (max-width: 767px) {
    overflow-y: scroll;
  }

  @media (min-width: 768px) {
    display: flex;
  }

  .close {
    opacity: 0;
  }

  .presentation-text {
    position: absolute;
    z-index: -1;
    font-family: $font-family-accent;
    font-weight: 700;
    font-size: 190px;
    opacity: 0.05;
    line-height: 1;
    pointer-events: none;
  }

  .about, .contact {
    padding: 5rem;
  }

  .about {
    background-color: $white;
    color: $dark;
    flex: 1 0 50%;
    transform: translateY(-100%);
    transition: transform .5s cubic-bezier(.694,.048,.335,1),opacity .3s,-webkit-transform .5s cubic-bezier(.694,.048,.335,1);

    .presentation-text {
      top: 1rem;
      left: 20%;
    }
  }

  .contact {
    flex: 1 1 50%;
    background-color: $dark;
    transform: translateY(100%);
    transition: transform .45s cubic-bezier(.694,.048,.335,1),opacity .3s,-webkit-transform .45s cubic-bezier(.694,.048,.335,1);
    transition-delay: .2s;

    .presentation-text {
      bottom: 1rem;
      left: 3%;
    }
  }

  &.mounted {
    box-shadow: 0 20px 80px 0 rgba(0,0,0,.55);

    .close {
      opacity: .8;

      &:hover {
        opacity: 1;
        cursor: pointer;
      }

      &:focus {
        opacity: 1;
      }

      @media (min-width: 768px) {
        color: white;
      }
    }

    .about, .contact {
      transform: translateY(0);
    }
  }
}
</style>