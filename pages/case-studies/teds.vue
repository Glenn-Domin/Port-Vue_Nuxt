<template>
  <article class="case-content container">
    <above-fold :style="'background-image: url(' + banner + ')'">
      <h1 slot="heading" class="item-title">Ted's Cameras</h1>
      <h2 slot="subheading" class="item-subtitle">Magento e-commerce site.</h2>
    </above-fold>
    <section id="content" class="row content">
      <div class="content-small">
        <h2 class="font-accent">What is it?</h2>
        <p>The Ted's Cameras site is a very large, multi-store e-commerce shop for cameras and accessories.</p>
        <ul class="list">
          <li>2021 e-commerce build</li>
          <li>Integration with 3rd party product repository</li>
        </ul>
        <h2 class="font-accent">The Challenge</h2>
        <p>This site needed an easily manageable and flexible back-end for specific client needs, as some stores had differing requirements.</p>
        <p>Magento 2 was the obvious choice given the considerable requirements, but close communication between the many developers and with the client would be required, as well as careful planning.</p>
      </div>
      <div class="content-big">
        <img src="~/static/images/teds-sm-op.png" alt="Example Search">
      </div>
    </section>
    <section>
      <div>
        <h2 class="font-accent text-center">The Tech Stack</h2>
        <ul class="list tech-list">
          <li class="row">
            <div class="content-small">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 303" width="167.42" height="198.13" preserveAspectRatio="xMidYMid"><path d="M144.852 90.67v172.192l-16.933 10.349-16.946-10.404V90.803l-43.878 27.016v147.255l60.824 37.217 61.339-37.482V117.725L144.852 90.67zM127.919 0L0 77.502v147.274l33.223 19.572V97.06l94.722-57.596 94.81 57.512.391.223-.042 146.929L256 224.776V77.502L127.919 0z" fill="#EC6737"/></svg>
            </div>
            <div class="content-big">
              <h3 class="font-accent">Magento</h3>
              <p>Magento 2 was an obvious choice given the considerable requirements. Given the scale of the project an elegant approach to styles and components was called for, hence the integration of SCSS over the default LESS, as well as a Bootstrap DOM replacing much (but not all) of the default Magento DOM.</p>
            </div>
          </li>
          <li class="row">
            <div class="content-small">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="167.42" height="191.3"><path fill="#563d7c" d="M292.3 311.93c0 42.41-39.72 41.43-43.92 41.43h-80.89v-81.69h80.89c42.56 0 43.92 31.9 43.92 40.26zm-50.15-73.13c.67 0 38.44 1 38.44-36.31 0-15.52-3.51-35.87-38.44-35.87h-74.66v72.18h74.66zM448 106.67v298.66A74.89 74.89 0 0 1 373.33 480H74.67A74.89 74.89 0 0 1 0 405.33V106.67A74.89 74.89 0 0 1 74.67 32h298.66A74.89 74.89 0 0 1 448 106.67zM338.05 317.86c0-21.57-6.65-58.29-49.05-67.35v-.73c22.91-9.78 37.34-28.25 37.34-55.64 0-7 2-64.78-77.6-64.78h-127v261.33c128.23 0 139.87 1.68 163.6-5.71 14.21-4.42 52.71-17.98 52.71-67.12z"/></svg>
            </div>
            <div class="content-big">
              <h3 class="font-accent">Bootstrap</h3>
              <p>This project needed to be as maintainable as possible, which meant using a CSS framework with which the agency was most familiar, and that meant Bootstrap.</p>
              <p>We maintained the existing default Magento classes for things like layout and buttons to an extent, but for much of the rest we found that Bootstrap was a more elegant solution than conforming to the default Magento LESS framework.</p>
            </div>
          </li>
          <li class="row">
            <div class="content-small">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="167.42" height="133.9"><path fill="#CF649A" d="M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.29-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4.8-.7 1.3-.9 1.7.3-.5.5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.79-38.2-101.87-65.2-99.07-116.5 1-18.7 7.5-67.8 127.07-127.4 98-48.8 176.35-35.4 189.84-5.6 19.4 42.5-41.89 121.6-143.66 133-38.79 4.3-59.18-10.7-64.28-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.79 28.9 18.7 6.1 64.18 9.5 119.17-11.8 61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4-48.69 45.6-56.48 85.3-53.28 101.9 11.39 58.9 92.57 97.3 125.06 125.7-1.6.9-3.1 1.7-4.5 2.5-16.29 8.1-78.18 40.5-93.67 74.7-17.5 38.8 2.9 66.6 16.29 70.4 41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.29-4.9 16.39-9.4 23.49-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.49 5 15.39 5 13.8 0 20-11.4 26.89-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46 16.2-31.8 31.69-71.5 31.69-71.5a201.24 201.24 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.31.31 0 0 0 .1.2c-3 4-6.4 8.3-9.9 12.5-12.79 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.69 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201.24 201.24 0 0 0 6.2 25.8c2.4 8.1 7.09 17 11.39 25.7-18.59 15.1-30.09 32.6-34.09 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0 0 21.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.09-10.2 62.09-7.2 55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.19-11.8 30.29-38.7 1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4 2.7-1.6 6.6-4 11.4-6.9.8-.5 1.2-.7 1.2-.7.9-.6 1.9-1.1 2.9-1.7 8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.09-11.3 21.19-14.9 23.79-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9 0 .5.1 1 .1 1.6-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.59-15.3 19-24.5a36.18 36.18 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z"/></svg>
            </div>
            <div class="content-big">
              <h3 class="font-accent">Sass</h3>
              <p>We've attempted to adhere to the existing Magento LESS framework for projects in the past but found that it was more trouble than it was worth.</p>
              <p>Simply plugging in SCSS and running our Bootstrap variables file and some class overrides was a much easier solution.</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="row">
        <div class="content-big">
          <h3 class="font-accent">Other noteable tech</h3>
          <ul class="list">
            <li><b>Windows Subsystem for Linux</b>: This turned out to be a must for windows devs; it allows for a much more performant experience.</li>
            <li><b>Docker</b>: This multi-dev solution continues to be a must for Magento builds.</li>
          </ul>
          <h3 class="font-accent">Key Lesson</h3>
          <p><b>Standardising has time benefits</b>: By now we've committed to a process for Magento 2 builds and all developers on the project understands this process.</p>
          <p>This led to significant efficiencies and time optimisation, since we can do things using the same methodology as in past projects.</p>
        </div>
        <div class="content-small">
          <img src="~/static/images/teds-mob-op.png" alt="Example Menu">
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import aboveFold from '~/components/case-study/above-fold'

export default {
  name: 'Teds',
  layout: 'case-study',
  components: {
    'above-fold': aboveFold
  },
  data() {
    return {
      banner: require('~/static/images/teds-bg-op.png')
    }
  }
}
</script>