<template>
  <article class="case-content container">
    <above-fold :style="'background-image: url(' + banner + ')'">
      <h1 slot="heading" class="item-title">Louenhide</h1>
      <h2 slot="subheading" class="item-subtitle">WooCommerce e-commerce site.</h2>
    </above-fold>
    <section id="content" class="row content">
      <div class="content-small">
        <h2 class="font-accent">What is it?</h2>
        <p>Louenhide's retail site, putting forward their global accessory brand, focusing on women's apparel.</p>
        <ul class="list">
          <li>2019</li>
          <li>WooCommerce site.</li>
          <li>Accentis product integration.</li>
        </ul>
        <h2 class="font-accent">The Challenge</h2>
        <p>This site needed to be bespoke, highly presentable and easily editable by the client, while also including up-to-date product data from their Accentis product server.</p>
      </div>
      <div class="content-big">
        <img src="~/static/images/lh1-op.jpg" alt="Example Home Page">
      </div>
    </section>
    <section>
      <div>
        <h2 class="font-accent text-center">The Tech Stack</h2>
        <ul class="list tech-list">
          <li class="row">
            <div class="content-small">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="167.42" height="167.41"><path fill="#464342" d="M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8.9 0 1.8.1 2.8.2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7.3 13.7.3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256 8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z"/></svg>
            </div>
            <div class="content-big">
              <h3 class="font-accent">WordPress</h3>
              <p>This site is mainly built on WordPress. There's some extra logic including VueJS components in the right places, as well as some WordPress navigation and breadcrumb hacks for dynamically generated pages based on back-end data.</p>
            </div>
          </li>
          <li class="row">
            <div class="content-small">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 153" width="167.41" height="100.05"><path d="M23.759 0h208.38c13.187 0 23.863 10.675 23.863 23.863v79.542c0 13.187-10.675 23.863-23.863 23.863h-74.727l10.257 25.118-45.109-25.118H23.865c-13.187 0-23.863-10.675-23.863-23.863V23.863C-.103 10.78 10.573 0 23.76 0z" fill="#9B5C8F"/><path d="M14.578 21.75c1.457-1.977 3.642-3.018 6.556-3.226 5.307-.416 8.325 2.081 9.054 7.493 3.226 21.75 6.764 40.169 10.51 55.259l22.79-43.395c2.082-3.955 4.684-6.036 7.806-6.244 4.579-.312 7.388 2.601 8.533 8.741 2.602 13.841 5.932 25.6 9.886 35.59 2.706-26.433 7.285-45.476 13.737-57.236 1.561-2.913 3.85-4.37 6.868-4.579 2.394-.208 4.58.52 6.557 2.082 1.977 1.56 3.018 3.538 3.226 5.931.104 1.874-.209 3.434-1.041 4.995-4.059 7.493-7.389 20.085-10.094 37.567-2.602 16.964-3.538 30.18-2.914 39.65.208 2.601-.208 4.89-1.249 6.868-1.248 2.29-3.122 3.538-5.515 3.746-2.706.208-5.515-1.04-8.221-3.85-9.678-9.886-17.38-24.663-22.998-44.332-6.764 13.32-11.76 23.31-14.985 29.97-6.14 11.76-11.343 17.796-15.714 18.108-2.81.208-5.203-2.186-7.285-7.18-5.307-13.634-11.03-39.962-17.17-78.986-.417-2.705.207-5.099 1.664-6.972zm223.64 16.338c-3.746-6.556-9.262-10.511-16.65-12.072-1.977-.416-3.85-.624-5.62-.624-9.99 0-18.107 5.203-24.455 15.61-5.41 8.845-8.117 18.628-8.117 29.346 0 8.013 1.665 14.88 4.995 20.605 3.747 6.556 9.262 10.51 16.65 12.072 1.978.416 3.85.624 5.62.624 10.094 0 18.211-5.203 24.455-15.61 5.411-8.95 8.117-18.732 8.117-29.45.104-8.117-1.665-14.881-4.995-20.501zm-13.112 28.826c-1.457 6.868-4.059 11.967-7.909 15.402-3.018 2.706-5.827 3.85-8.43 3.33-2.497-.52-4.578-2.706-6.139-6.764-1.249-3.226-1.873-6.452-1.873-9.47 0-2.602.208-5.203.728-7.597.937-4.266 2.706-8.429 5.516-12.384 3.434-5.099 7.076-7.18 10.823-6.452 2.497.52 4.579 2.706 6.14 6.765 1.248 3.226 1.873 6.452 1.873 9.47 0 2.705-.208 5.307-.729 7.7zm-52.033-28.826c-3.746-6.556-9.366-10.511-16.65-12.072-1.977-.416-3.85-.624-5.62-.624-9.99 0-18.107 5.203-24.455 15.61-5.41 8.845-8.117 18.628-8.117 29.346 0 8.013 1.665 14.88 4.995 20.605 3.747 6.556 9.262 10.51 16.65 12.072 1.978.416 3.85.624 5.62.624 10.094 0 18.211-5.203 24.455-15.61 5.411-8.95 8.117-18.732 8.117-29.45 0-8.117-1.665-14.881-4.995-20.501zm-13.216 28.826c-1.457 6.868-4.059 11.967-7.909 15.402-3.018 2.706-5.828 3.85-8.43 3.33-2.497-.52-4.578-2.706-6.139-6.764-1.249-3.226-1.873-6.452-1.873-9.47 0-2.602.208-5.203.728-7.597.937-4.266 2.706-8.429 5.516-12.384 3.434-5.099 7.076-7.18 10.823-6.452 2.497.52 4.579 2.706 6.14 6.765 1.248 3.226 1.873 6.452 1.873 9.47.104 2.705-.208 5.307-.729 7.7z" fill="#fff"/></svg>
            </div>
            <div class="content-big">
              <h3 class="font-accent">WooCommerce</h3>
              <p>We've had a lot of success with the WooCommerce platform. It's easy to override, either through adding files to the child theme or through hooks. There was also the added benefit of the client already being familiar with WooCommerce, so this was a win-win.</p>
            </div>
          </li>
          <li class="row">
            <div class="content-small">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="167.42" height="191.3"><path fill="#563d7c" d="M292.3 311.93c0 42.41-39.72 41.43-43.92 41.43h-80.89v-81.69h80.89c42.56 0 43.92 31.9 43.92 40.26zm-50.15-73.13c.67 0 38.44 1 38.44-36.31 0-15.52-3.51-35.87-38.44-35.87h-74.66v72.18h74.66zM448 106.67v298.66A74.89 74.89 0 0 1 373.33 480H74.67A74.89 74.89 0 0 1 0 405.33V106.67A74.89 74.89 0 0 1 74.67 32h298.66A74.89 74.89 0 0 1 448 106.67zM338.05 317.86c0-21.57-6.65-58.29-49.05-67.35v-.73c22.91-9.78 37.34-28.25 37.34-55.64 0-7 2-64.78-77.6-64.78h-127v261.33c128.23 0 139.87 1.68 163.6-5.71 14.21-4.42 52.71-17.98 52.71-67.12z"/></svg>
            </div>
            <div class="content-big">
              <h3 class="font-accent">Bootstrap</h3>
              <p>This project needed to be as maintainable as possible, which meant using a CSS framework with which the agency was most familiar, and that meant Bootstrap.</p>
              <p>We tend to use a WordPress starter theme called Understrap, which includes Bootstrap and Gulp for SCSS compilation, however we've since created our own fork of this theme, which uses webpack instead of gulp.</p>
            </div>
          </li>
          <li class="row">
            <div class="content-small">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="167.42" height="133.9"><path fill="#CF649A" d="M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.29-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4.8-.7 1.3-.9 1.7.3-.5.5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.79-38.2-101.87-65.2-99.07-116.5 1-18.7 7.5-67.8 127.07-127.4 98-48.8 176.35-35.4 189.84-5.6 19.4 42.5-41.89 121.6-143.66 133-38.79 4.3-59.18-10.7-64.28-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.79 28.9 18.7 6.1 64.18 9.5 119.17-11.8 61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4-48.69 45.6-56.48 85.3-53.28 101.9 11.39 58.9 92.57 97.3 125.06 125.7-1.6.9-3.1 1.7-4.5 2.5-16.29 8.1-78.18 40.5-93.67 74.7-17.5 38.8 2.9 66.6 16.29 70.4 41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.29-4.9 16.39-9.4 23.49-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.49 5 15.39 5 13.8 0 20-11.4 26.89-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46 16.2-31.8 31.69-71.5 31.69-71.5a201.24 201.24 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.31.31 0 0 0 .1.2c-3 4-6.4 8.3-9.9 12.5-12.79 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.69 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201.24 201.24 0 0 0 6.2 25.8c2.4 8.1 7.09 17 11.39 25.7-18.59 15.1-30.09 32.6-34.09 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0 0 21.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.09-10.2 62.09-7.2 55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.19-11.8 30.29-38.7 1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4 2.7-1.6 6.6-4 11.4-6.9.8-.5 1.2-.7 1.2-.7.9-.6 1.9-1.1 2.9-1.7 8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.09-11.3 21.19-14.9 23.79-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9 0 .5.1 1 .1 1.6-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.59-15.3 19-24.5a36.18 36.18 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z"/></svg>
            </div>
            <div class="content-big">
              <h3 class="font-accent">Sass</h3>
              <p>Sass (specifically, SCSS) has been standard in my projects for years.</p>
              <p>I've tried a few other solutions but It Just Works™.</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="row">
        <div class="content-big">
          <h3 class="font-accent">Other noteable tech</h3>
          <ul class="list">
            <li><b>Webpack</b>: We've forked the Understrap theme we usualy use to fit our own purposes. In the process we replaced gulp with webpack. We find it's less buggy, more performant and more versatile.</li>
            <li><b>Docker</b>: We've been getting in to Docker more and more lately for our development environment after having sub-par results with Vagrant. It works great when it works, but there are sometimes a few kinks to work out.</li>
          </ul>
          <h3 class="font-accent">Key Lesson</h3>
          <p><b>Using Webpack packages with a jQuery dependancy</b>: We had issues including packages which required jQuery. It felt quite finniky trying to include jQuery which would be recognised by the npm packages, as well as other WordPress plugins which also required it. As a short-term solution we had to include jQuery using a wordpress enqueue script, as well as an npm package. This is clearly not ideal and more research will be required.</p>
          <p>Since BootStrap 5 is slated to not require jQuery, this shouldn't be an issue in the future, as that was the only npm package that required it.</p>
        </div>
        <div class="content-small">
          <img src="~/static/images/lh2-op.jpg" alt="Example Title Standings Page">
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import aboveFold from '~/components/case-study/above-fold'

export default {
  name: 'Louenhide',
  layout: 'case-study',
  components: {
    'above-fold': aboveFold
  },
  data() {
    return {
      banner: require('~/static/images/lh-lg-op.jpg')
    }
  }
}
</script>
