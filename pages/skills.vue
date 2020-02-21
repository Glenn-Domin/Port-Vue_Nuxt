<template>
  <main>
    <section class="page-heading">
      <h1 class="title text-center">Skills</h1>
      <h2 class="subtitle text-center">What can I do?</h2>
    </section>
    <section class="content">
      <div class="container">
        <div class="skills row">
          <aside class="content-small content-top content-sticky">
            <h2>Navigation</h2>
            <nav>
              <ul>
                <li>
                  <a href="#thebasics">"The Basics"</a>
                  <ul>
                    <li><a href="#html">HTML</a></li>
                    <li><a href="#css">CSS</a></li>
                    <li><a href="#js">JavaScript</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#cms">Content Management Systems</a>
                  <ul>
                    <li><a href="#wp">WordPress</a></li>
                    <li><a href="#magento">Magento</a></li>
                    <li><a href="#joomla">Joomla</a></li>
                    <li><a href="#cmsothers">Others</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#frameworks">Frameworks</a>
                  <ul>
                    <li><a href="#bootstrap">Bootstrap</a></li>
                    <li><a href="#vue">VueJS</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#accreditations">Accreditations</a>
                  <ul>
                    <li><a href="#accreditations">AWS</a></li>
                    <li><a href="#accreditations">Magento 2</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </aside>
          <div class="content-big">
            <h2 id="thebasics">"The Basics"</h2>
            <h3 id="html" class="skills-heading">
              <html5 width="50" height="66.66" />
              HTML
            </h3>
            <figure class="blockquote-container">
              <blockquote>
                "I know HTML"
              </blockquote>
              <figcaption>Most people</figcaption>
            </figure>
            <p>I don't mean what most people mean when they say "I know HTML".</p>
            <p>What I mean is not only what HTML tags are available but also how to use them appropriately.</p>
            <p>Take my <pre v-highlightjs class="code-inline"><code class="code-html">blockquote</code></pre> above for example and compare it to the following. Most people might consider this correct from MDN:</p>
            <figure>
              <figcaption class="code-desc">MDN Example (at time of writing): Incorrect</figcaption>
              <pre v-highlightjs><code class="lang-html">{{codeMDNBlockquote}}</code></pre>
            </figure>
            <p>Or perhaps the following from Bootstrap:</p>
            <figure>
              <figcaption class="code-desc">Bootstrap Example (at time of writing): Incorrect</figcaption>
              <pre v-highlightjs><code class="lang-html">{{codeBootstrapBlockquote}}</code></pre>
            </figure>
            <p>Both of these are incorrect because as <a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element" target="_blank">the spec</a> says, <q cite="https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element">Attribution for the quotation, if any, must be placed outside the blockquote element</q>. I currently have a GitHub Pull Request to fix this in Bootstrap which is in their list of inclusions for version 5, as well as a GitHub issue for MDN.</p>
            <p>I did the research to ensure I was using valid HTML, rather than the majority of developers, who would simply defer to the judgement of the (admittedly very reputable) MDN and Bootstrap.</p>
            <p>I also know why you should be concerned about <strong>Semantic HTML</strong> and <strong>Accessibility</strong>, as well as what do to about it.</p>

            <figure>
              <figcaption class="code-desc">Semantic Code</figcaption>
              <pre v-highlightjs><code class="lang-html">{{codeGood}}</code></pre>
            </figure>
            <figure>
              <figcaption class="code-desc">Bad Code</figcaption>
              <pre v-highlightjs><code class="lang-html">{{codeBad}}</code></pre>
            </figure>
            <p>There are a lot of traps that inexperienced developers fall in to. I won't.</p>
            <h3 id="css" class="skills-heading">
              <css width="50" height="50" />
              CSS
            </h3>
            <p>There are right ways and wrong ways to write CSS. I see plenty of people list CSS as a skill on their résumé, but their code just screams "technical debt" or "code smell".</p>
            <p>I've written developer guides at my current agency to steer other devs toward a sensible approach.</p>
            <p><strong>Example</strong>: we've done a lot of styling with Functional CSS (i.e., using lots of re-usable helper classes). This became unwieldy when we had to add many classes to a single element (observant readers will recognise the use of Bootstrap's utility classes).</p>
            <figure>
              <figcaption class="code-desc">Functional CSS</figcaption>
              <pre v-highlightjs><code class="lang-html">{{codeFunctional}}</code></pre>
            </figure>
            <p>To remedy this, I came up with a system of selective abstraction. If you're using the same list of classes for multiple elements (like a series of list tags) or if you have more than five utility classes on the same element, it's time to abstract these classes into components (extra points if the component is re-usable, so code-bases don't balloon in size).</p>
            <figure>
              <p class="code-desc">Abstracted HTML</p>
              <pre v-highlightjs><code class="lang-html">{{codeWClass}}</code></pre>
            </figure>
            <figure>
              <figcaption class="code-desc">Associated CSS</figcaption>
              <pre v-highlightjs><code>{{codeCSSGood}}</code></pre>
            </figure>
            <figure>
              <figcaption class="code-desc">Problematic Alternative CSS</figcaption>
              <pre v-highlightjs><code>{{codeCSSBad}}</code></pre>
            </figure>
            <p>We'll always use <strong>SCSS</strong> in projects.</p>
            <h3 id="js" class="skills-heading">
              <javascript width="50" height="57.13" />
              JavaScript
            </h3>
            <p>To keep code tidy, in projects using Babel, I've kept to more advanced JS concepts (ES6+) for brevity and clarity. It's important to only do this in Babel projects so you can have this code converted in to formats that older browsers can read.</p>
            <figure>
              <p class="code-desc">Succinct Destructuring Example</p>
              <pre v-highlightjs><code>{{codeJS}}</code></pre>
            </figure>
            <figure>
              <p class="code-desc">Babel Translated for older browsers</p>
              <pre v-highlightjs><code>{{codeJSVerbose}}</code></pre>
            </figure>
            <p>Most of my JS is written in <a href="#vue">VueJS</a> prjects.</p>
            <h2 id="cms">Content Management Systems</h2>
            <h3 id="wp" class="skills-heading">
              <wordpress width="50" height="50" color="#32373c" />
              WordPress
            </h3>
            <p>I've built a zillion sites in WordPress. As I consider most of them relatively basic (brochure sites or basic e-commerce sites), I haven't included <nuxt-link class="nav-link" to="/case-studies">case studies</nuxt-link> for most of them. I'll be including sites that are particularly special.</p>
            <p>I think we've got a very good procedure for developing WordPress sites.</p>
            <ol>
              <li>Spin up custom docker container.</li>
              <li>Use the WP CLI to install plugins not available in the WP Plugins Directory.</li>
              <li>Push to Git/Bitbucket/CodeBuild.</li>
              <li>You're done!</li>
            </ol>
            <p>The docker container will generate some starter plugins we've decided should be mandatory; Adavanced Custom Fields, a security plugin and a logging plugin. There's also our forked version of the starter "Understrap" theme and child theme (the biggest difference is the use of Webpack but there are many changes). Finally it includes sensible WP settings such as locking off updates and file edits except on local.</p>
            <h4>Our Approach</h4>
            <ul class="list">
              <li>We haven't found a good use-case for Gutenberg.</li>
              <li>Use custom fields (text/WYSIWYG/repeaters/groups/global options) for client-editable content.</li>
              <li>Use standards-based SCSS/Bootstrap, as well as WP templates.</li>
              <li>Make it harder for the client to break and keep logs to say who did what in the back-end.</li>
            </ul>
            <h3 id="magento" class="skills-heading">
              <magento width="50" height="59.17" />
              Magento
            </h3>
            <p>I've worked on quite a lot of Magento sites (some Magento 1 but mostly Magento 2) sites over the years, my poster-child for which is <nuxt-link class="nav-link" to="case-studies/tus">Total Uniform Solutions</nuxt-link>.</p>
            <p>We've been using a docker container for setting up a dev environment but I think there's more to investigate performance-wise for ease of development.</p>
            <p>We've eschewed the default Magento LESS functionality for SCSS and Bootstrap, with the noteable exceptions of layout and buttons (sort of).</p>
            <p>I'm fairly confident with the Magento front-end, though there are some things in the XML and JS arenas where I need to learn more about the Magento way of doing things. I've completed certified <a href="https://u.magento.com/certification/directory/dev/3340373" target="_blank" rel="noreferrer">M2 Front End Developer</a> training to accomplish this.</p>
            <h3 id="joomla" class="skills-heading">
              <joomla width="50" height="50.39" />
              Joomla
            </h3>
            <p><strong>Disclaimer:</strong> I'm aware Joomla is basically dead.</p>
            <p>This is a shame because I got very good at it. Roughly half of the sites I've worked on over the years have been Joomla, though they obviously skewed towards the beginning of my career.</p>
            <p>We had a custom template I and a co-worker developed in-house.</p>
            <h3 id="cmsothers">Others</h3>
            <p>CMSes where I have <em>some</em> experience.</p>
            <ul class="list">
              <li>Shopify</li>
              <li>Drupal</li>
              <li>BigCommerce</li>
              <li>Neato</li>
            </ul>
            <h2>Frameworks</h2>
            <h3 id="bootstrap" class="skills-heading">
              <bootstrap width="50" height="50" />
              Bootstrap
            </h3>
            <p>Bootstrap has been a staple in my projects since Bootstrap 3. It's customisation options are of a very high standard, their supplied code-snippets are semantic and accessible, and I completely reject the critisism that some devs will have about it, that all Bootstrap sites look alike.</p>
            <p>While some of their components could be improved (like allowing parent menu items to actually be links), I'd say it's almost perfect.</p>
            <p>We'll always use the SCSS implementation on every project.</p>
            <h3 id="vue" class="skills-heading">
              <vuejs width="50" height="43.3" />
              VueJS
            </h3>
            <p>I've used VueJS as the JS framework in a few very large, data-heavy projects, one of which is e-commerce and I find it's a great way to lay out a project in a simple way.</p>
            <p>We tend to pair VueJS with a Laravel back-end and it works well.</p>
            <h2 id="accreditations">Accreditations</h2>
            <p><em>Only internationally recognised accreditations are included.</em></p>
            <ul>
              <li><a href="https://www.certmetrics.com/amazon/public/transcript.aspx?transcript=MFM07HQ121R11GCT" target="_blank" rel="noreferrer">AWS Certified Cloud Practitioner</a></li>
              <li><a href="https://u.magento.com/certification/directory/dev/3340373/" target="_blank" rel="noreferrer">Magento 2 Front End Developer</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import 'highlight.js/scss/a11y-dark.scss'
import Vue from 'vue'
import hljs from 'highlight.js/lib/highlight'
import langscss from 'highlight.js/lib/languages/scss'
import langhtml from 'highlight.js/lib/languages/xml'
import langjs from 'highlight.js/lib/languages/javascript'
import html5 from '~/components/global/shapes/HTML'
import css from '~/components/global/shapes/CSS'
import javascript from '~/components/global/shapes/Javascript'
import wordpress from '~/components/global/shapes/WP'
import magento from '~/components/global/shapes/Magento'
import joomla from '~/components/global/shapes/Joomla'
import bootstrap from '~/components/global/shapes/Bootstrap'
import vuejs from '~/components/global/shapes/Vue'

hljs.registerLanguage('lang-scss', langscss)
hljs.registerLanguage('lang-html', langhtml)
hljs.registerLanguage('lang-js', langjs)

Vue.directive('highlightjs', {
  deep: true,
  bind: (el, binding) => {
    // on first bind, highlight all targets
    const targets = el.querySelectorAll('code')
    targets.forEach((target) => {
      // if a value is directly assigned to the directive, use this
      // instead of the element content.
      if (binding.value) {
        target.textContent = binding.value
      }
      hljs.highlightBlock(target)
    })
  },
  componentUpdated: (el, binding) => {
    // after an update, re-fill the content and then highlight
    const targets = el.querySelectorAll('code')
    targets.forEach((target) => {
      if (binding.value) {
        target.textContent = binding.value
        hljs.highlightBlock(target)
      }
    })
  }
})

export default {
  components: {
    html5,
    css,
    javascript,
    wordpress,
    magento,
    joomla,
    bootstrap,
    vuejs
  },
  data() {
    return {
      codeMDNBlockquote: `<blockquote cite="https://www.huxley.net/bnw/four.html">
    <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
    <footer>—Aldous Huxley, <cite>Brave New World</cite></footer>
</blockquote>`,
      codeBootstrapBlockquote: `<blockquote class="blockquote">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>`,
      codeGood: `<article>
  <header>
    <h1>Article Heading</h1>
    <p>Published on <time datetime="2016-08-09 08:00">Tuesday at 8:00 AM</time>.</p>
    <nav>
      <ul>
        <li><a href="#firstSection">First Section</a></li>
        <li><a href="#secondSection">Second Section</a></li>
      </ul>
    </nav>
  </header>
  <section id="firstSection">
    <h2>First Section</h2>
  </section>
  <section id="secondSection">
    <h2>Second Section</h2>
  </section>
</article>`,
      codeBad: `<div>
  <div>
    <h2>Article Heading</h2>
    <p>Published on Tuesday at 8:00 AM.</p>
    <a href="#firstSection">First Section</a>
    <a href="#secondSection">Second Section</a>
  </div>
  <div id="firstSection">
    <h4>First Section</h4>
  </div>
  <div id="secondSection">
    <p>Second Section</p>
  </div>
</div>`,
      codeFunctional: `<div class="mb-4 p-4 border-radius-sm bg-dark text-white"></div>`,
      codeWClass: `<div class="swatches-container mb-4"></div>`,
      codeCSSGood: `/* GOOD : All of the variables used here directly correspond to the values used in the utility classes in the example above, making this functionally identical and (in theory) equally maintainable. */
.swatches-container {
  padding: map-get($spacers, 4); // Gets the spacer value used for generating your handy margin/padding classes (obviously the 4 corresponds to the 4 in .p-4)
  border-radius: $border-radius-sm; // Using global small variable to keep the site looking consistent
  background-color: $dark;
  color: $white; // $white should be the only colour variable you access directly. The others should be referenced using variables like primary/secondary/tertiary/success/warning/danger/info/muted, etc
}`,
      codeCSSBad: `/* BAD: You're adding technical debt to the project, also known as a "code smell".
   The idea is to stay as close to the utility class functionality as possible. */
.swatches-container {
  padding: 2.5rem;
  border-radius: .25rem;
  background-color: #333;
  color: white;
}`,
      codeJS: `const numbers = [1, 2, 3, 4, 5];
[first, second, ...others] = numbers;`,
      codeJSVerbose: `function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var numbers = [1, 2, 3, 4, 5];
var _numbers = numbers;

var _numbers2 = _toArray(_numbers);

first = _numbers2[0];
second = _numbers2[1];
others = _numbers2.slice(2);
_numbers;`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';

.skills {

  h3 {
    margin-top: 3rem;
  }

  aside {
    margin-left: 0;

    @media (min-width: 768px) {
      order: 1;
    }
  }
}

.skills-heading {
  display: flex;
  align-items: center;

  svg {
    margin-right: 1rem;
  }
}

code {
  font-size: .875rem;
}

.code-desc {
  margin-bottom: 0;
  font-weight: 500;
}

.code-inline {
  padding: 3px 5px;

  &, code {
    display: inline;
  }
}
</style>