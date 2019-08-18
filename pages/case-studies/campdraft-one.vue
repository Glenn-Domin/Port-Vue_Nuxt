<template>
  <article class="case-content container">
    <above-fold :style="'background-image: url(' + banner + ')'">
      <h1 slot="heading" class="item-title">Campdraft One</h1>
      <h2 slot="subheading" class="item-subtitle">Back-end management system.</h2>
    </above-fold>
    <section id="content" class="row">
      <div class="content">
        <h2 class="font-accent">What is it?</h2>
        <p>Campdraft One is a bespoke, massively scalable back-end web application we built for Australian Campdrafting Association Admins and Members.</p>
        <ul class="list">
          <li>2018 onwards</li>
          <li>Over 20,000 members</li>
          <li>Six-figure budget</li>
        </ul>
        <h2 class="font-accent">The Challenge</h2>
        <p>The major challenges on this project were two-fold:</p>
        <ul class="list">
          <li><b>Front-end</b>: I was solely responsible for architecting what would be by far my largest project to-date. I needed to ensure my code could scale and the project wouldn't blow out in size when more features were added later. In this task I think I was successful.</li>
          <li><b>Back-end</b>: I only played a minor role here but it was a challenge to compile the client's logic (which includes many exceptions and edge-cases) into fixed rules. This required a lot of planning and communication, both with the team and the client. This is an on-going challenge as we add more features to the live site but we're improving.</li>
        </ul>
      </div>
      <div class="side">
        <img src="~/static/images/cd1-op.jpg">
        <img src="~/static/images/cd3-op.jpg">
      </div>
    </section>
    <section>
      <h2 class="font-accent">The Tech Stack</h2>
      <ul class="list tech-list">
        <li class="row">
          <div class="content">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69" width="167.42" height="145"><path d="M161.096.001l-30.224 52.35L100.647.002H-.005L130.872 226.69 261.749 0z" fill="#41b883"/><path d="M161.096.001l-30.224 52.35L100.647.002H52.346l78.526 136.01L209.398.001z" fill="#34495e"/></svg>
          </div>
          <div class="side">
            <h3 class="font-accent">VueJS</h3>
            <p>This project was one of two major web applications we had built, so this was a major learning experience. We chose VueJS as it's extremely performant and has a narrower learning curve than other JS frameworks.</p>
            <p>After some trial and error I came to an optimal workflow, which leant heavily on re-usable components. This resulted in a lot of saved time and effort when it came to rolling out new features. We could simply re-use or extend an existing component rather than build something new.</p>
          </div>
        </li>
        <li class="row">
          <div class="content">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 774 875.7" width="167.42"><path fill="#FFF" d="M387 0l387 218.9v437.9L387 875.7 0 656.8V218.9z"/><path fill="#8ed6fb" d="M704.9 641.7L399.8 814.3V679.9l190.1-104.6 115 66.4zm20.9-18.9V261.9l-111.6 64.5v232l111.6 64.4zM67.9 641.7L373 814.3V679.9L182.8 575.3 67.9 641.7zM47 622.8V261.9l111.6 64.5v232L47 622.8zm13.1-384.3L373 61.5v129.9L172.5 301.7l-1.6.9-110.8-64.1zm652.6 0l-312.9-177v129.9l200.5 110.2 1.6.9 110.8-64z"/><path fill="#1c78c0" d="M373 649.3L185.4 546.1V341.8L373 450.1v199.2zm26.8 0l187.6-103.1V341.8L399.8 450.1v199.2zm-13.4-207zM198.1 318.2l188.3-103.5 188.3 103.5-188.3 108.7-188.3-108.7z"/></svg>
          </div>
          <div class="side">
            <h3 class="font-accent">Webpack</h3>
            <p>Webpack and Vue go hand-in-glove. It makes compiling CSS and JS really simple in 99% of cases.</p>
          </div>
        </li>
        <li class="row">
          <div class="content">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="167.42"><path fill="#563d7c" d="M292.3 311.93c0 42.41-39.72 41.43-43.92 41.43h-80.89v-81.69h80.89c42.56 0 43.92 31.9 43.92 40.26zm-50.15-73.13c.67 0 38.44 1 38.44-36.31 0-15.52-3.51-35.87-38.44-35.87h-74.66v72.18h74.66zM448 106.67v298.66A74.89 74.89 0 0 1 373.33 480H74.67A74.89 74.89 0 0 1 0 405.33V106.67A74.89 74.89 0 0 1 74.67 32h298.66A74.89 74.89 0 0 1 448 106.67zM338.05 317.86c0-21.57-6.65-58.29-49.05-67.35v-.73c22.91-9.78 37.34-28.25 37.34-55.64 0-7 2-64.78-77.6-64.78h-127v261.33c128.23 0 139.87 1.68 163.6-5.71 14.21-4.42 52.71-17.98 52.71-67.12z"/></svg>
          </div>
          <div class="side">
            <h3 class="font-accent">Bootstrap</h3>
            <p>This project needed to be as maintainable as possible, which meant using a CSS framework with which the agency was most familiar, and that meant Bootstrap.</p>
            <p>Bootstrap has been a tried and true addition to our front-end stack.</p>
          </div>
        </li>
        <li class="row">
          <div class="content">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="167.42"><path fill="#CF649A" d="M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.29-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4.8-.7 1.3-.9 1.7.3-.5.5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.79-38.2-101.87-65.2-99.07-116.5 1-18.7 7.5-67.8 127.07-127.4 98-48.8 176.35-35.4 189.84-5.6 19.4 42.5-41.89 121.6-143.66 133-38.79 4.3-59.18-10.7-64.28-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.79 28.9 18.7 6.1 64.18 9.5 119.17-11.8 61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4-48.69 45.6-56.48 85.3-53.28 101.9 11.39 58.9 92.57 97.3 125.06 125.7-1.6.9-3.1 1.7-4.5 2.5-16.29 8.1-78.18 40.5-93.67 74.7-17.5 38.8 2.9 66.6 16.29 70.4 41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.29-4.9 16.39-9.4 23.49-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.49 5 15.39 5 13.8 0 20-11.4 26.89-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46 16.2-31.8 31.69-71.5 31.69-71.5a201.24 201.24 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.31.31 0 0 0 .1.2c-3 4-6.4 8.3-9.9 12.5-12.79 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.69 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201.24 201.24 0 0 0 6.2 25.8c2.4 8.1 7.09 17 11.39 25.7-18.59 15.1-30.09 32.6-34.09 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0 0 21.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.09-10.2 62.09-7.2 55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.19-11.8 30.29-38.7 1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4 2.7-1.6 6.6-4 11.4-6.9.8-.5 1.2-.7 1.2-.7.9-.6 1.9-1.1 2.9-1.7 8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.09-11.3 21.19-14.9 23.79-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9 0 .5.1 1 .1 1.6-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.59-15.3 19-24.5a36.18 36.18 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z"/></svg>
          </div>
          <div class="side">
            <h3 class="font-accent">Sass</h3>
            <p>Sass (specifically, SCSS) has been standard in my projects for years.</p>
            <p>I've tried a few other solutions but It Just Works™.</p>
          </div>
        </li>
      </ul>
      <div class="row">
        <div class="side">
          <h3 class="font-accent">Other noteable tech</h3>
          <ul class="list">
            <li><b>Laravel</b>: The back-end devs used Laravel to build out the back-end of the site. Requests are all API-based. I'd use those APIs to do CRUD calls (Create, Read, Update, Delete).</li>
            <li><b>Docker</b>: We've been getting in to Docker more and more lately for our development environment after having sub-par results with Vagrant. It works great when it works, but there are sometimes a few kinks to work out.</li>
          </ul>
          <h3 class="font-accent">Key Lesson</h3>
          <p><b>Data Management</b>: I initially went for a 3rd party plugin to handle tabulated data (we have paginated pages of tens of thousands of records). This initally went pretty well and it was a very smooth experience being able to click a filter or type a search term and have the results populate instantly since all the records are present in the browser, but given the expanding amount of data and the low-end devices and Internet connections of a large proportion of our client's customer-base, we opted for a custom solution, where only a single page of data (approximately 20 records) would be sent by the back-end.</p>
          <p>This resulted in a massive improvement in user experience, due to the end-user now only needing to wait for 20 records to download instead of tens of thousands. It also simplified the front-end logic, though now things like searching, paginating, filtering are now handled in the back-end.</p>
        </div>
        <div class="content">
          <img src="~/static/images/cd2-op.jpg">
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import aboveFold from '~/components/case-study/above-fold'

export default {
  name: 'CampdraftOne',
  layout: 'case-study',
  components: {
    'above-fold': aboveFold
  },
  data() {
    return {
      banner: require('~/static/images/cd-lg-op.jpg')
    }
  }
}
</script>

<style lang="scss">
.page {
  position: relative;
  overflow-x: hidden;
}

.case-content {
 margin-top: 100vh;

 section {
  padding-bottom: 60px;
 }
}
</style>

<style lang="scss" scoped>
.list {
  margin-bottom: 3rem;
  padding-left: 0;

  &:last-child {
    margin-bottom: 0;
  }
}

.tech-list {
  margin-bottom: 3rem;

  li {
    padding-top: .5rem;
  }
}
</style>