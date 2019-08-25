<template>
  <main>
    <section class="page-heading">
      <h1 class="title text-center">Skills</h1>
      <h2 class="subtitle text-center">What can I do?</h2>
    </section>
    <section class="content">
      <div class="container">
        <div class="row">
          <div class="skills content-big">
            <h2 id="thebasics">The Basics</h2>
            <h3 class="skills-heading" id="html">
              <html5 width="50"/>
              HTML
            </h3>
            <blockquote>
              "I know HTML"
              <cite>Most people</cite>
            </blockquote>
            <p>I don't mean what most people mean when they say "I know HTML".</p>
            <p>What I mean is not only what HTML tags are available and how to lay them out, I also know why you should be concerned about <strong>Semantic HTML</strong> and <strong>Accessibility</strong>, as well as what do to about it.</p>
            <p class="code-desc">Semantic Code</p>
            <code class="code-good">{{codeGood}}</code>
            <p class="code-desc">Bad Code</p>
            <code class="code-bad">{{codeBad}}</code>
            <p>There are a lot of traps that inexperienced developers fall in to. I won't.</p>
            <h3 class="skills-heading" id="css">
              <css width="50" />
              CSS
            </h3>
            <p>There are right ways and wrong ways to write CSS. I see plenty of people list CSS as a skill on their résumé, but their code just screams "technical debt" or "code smell".</p>
            <p>I've developed developer guides at my current agency to steer other devs toward a sensible approach.</p>
            <p><strong>Example</strong>: we've done a lot of styling with Functional CSS (i.e., using lots of re-usable helper classes). This became unwieldy when we had to add many classes to a single element (observant readers will recognise the use of Bootstrap's utility classes).</p>
            <p class="code-desc">Functional CSS</p>
            <code>{{codeFunctional}}</code>
            <p>To remedy this, I came up with a system of selective abstraction. If you're using the same list of classes for multiple elements (like a series of list tags) or if you have more than five utility classes on the same element, it's time to abstract these classes into components (extra points if the component is re-usable, so code-bases don't balloon in size).</p>
            <p class="code-desc">Abstracted HTML</p>
            <code class="code-good">{{codeWClass}}</code>
            <p class="code-desc">Associated CSS</p>
            <code class="code-good">{{codeCSSGood}}</code>
            <p class="code-desc">Problematic Alternative CSS</p>
            <code class="code-bad">{{codeCSSBad}}</code>
            <p>We'll always use <strong>SCSS</strong> in projects.</p>
            <h3 class="skills-heading" id="js">
              <javascript width="50" />
              JavaScript
            </h3>
            <p>To keep code tidy, in projects using Babel, I've kept to more advanced JS concepts (ES6+) for brevity and clarity. It's important to only do this in Babel projects so you can have this code converted in to formats that older browsers can read.</p>
            <p class="code-desc">Succinct Destructuring Example</p>
            <code>{{codeJS}}</code>
            <p class="code-desc">Babel Translated for older browsers</p>
            <code>{{codeJSVerbose}}</code>
            <p>Most of my JS is written in <a href="#vue">VueJS</a> prjects.</p>
            <h2 id="cms">Content Management Systems</h2>
            <h3 class="skills-heading" id="wp">
              <wordpress width="50" color="#32373c" />
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
            <h3 class="skills-heading" id="magento">
              <magento width="50" />
              Magento
            </h3>
            <p>I've worked on quite a lot of Magento sites (some Magento 1 but mostly Magento 2) sites over the years, my poster-child for which is <nuxt-link class="nav-link" to="case-studies/tus">Total Uniform Solutions</nuxt-link>.</p>
            <p>We've been using a docker container for setting up a dev environment but I think there's more to investigate performance-wise for ease of development.</p>
            <p>We've eschewed the default Magento LESS functionality for SCSS and Bootstrap, with the noteable exceptions of layout and buttons (sort of).</p>
            <p>I'm fairly confident with the Magento front-end, though there are some things in the XML and JS arenas where I need to learn more about the Magento way of doing things. I'm undertaking certified Magento training to accomplish this.</p>
            <h3 class="skills-heading" id="magento">
              <joomla width="50" />
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
            </ul>
            <h2>Frameworks</h2>
            <h3 class="skills-heading" id="bootstrap">
              <bootstrap width="50" />
              Bootstrap
            </h3>
            <p>Bootstrap has been a staple in my projects since Bootstrap 3. It's customisation options are of a very high standard, their supplied code-snippets are semantic and accessible, and I completely reject the critisism that some devs will have about it, that all Bootstrap sites look alike.</p>
            <p>While some of their components could be improved (like allowing parent menu items to actually be links), I'd say it's almost perfect.</p>
            <p>We'll always use the SCSS implementation on every project.</p>
            <h3 class="skills-heading" id="vue">
              <vuejs width="50" />
              VueJS
            </h3>
            <p>I've used VueJS as the JS framework in a few very large, data-heavy projects, one of which is e-commerce and I find it's a great way to lay out a project in a simple way.</p>
          </div>
          <aside class="content-small content-top content-sticky">
            <h2>Navigation</h2>
            <nav>
              <ul>
                <li>
                  <a href="#thebasics">The Basics</a>
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
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import html5 from '~/components/global/shapes/HTML'
import css from '~/components/global/shapes/CSS'
import javascript from '~/components/global/shapes/Javascript'
import wordpress from '~/components/global/shapes/WP'
import magento from '~/components/global/shapes/Magento'
import joomla from '~/components/global/shapes/Joomla'
import bootstrap from '~/components/global/shapes/Bootstrap'
import vuejs from '~/components/global/shapes/Vue'

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
}

.skills-heading {
  display: flex;
  align-items: center;

  svg {
    margin-right: 1rem;
  }
}

code {
  display: block;
  white-space: pre;
  overflow-y: auto;
  margin-bottom: 1rem;
  padding: 1rem;
  font-size: .875rem;
  background-color: $dark;
  color: $accent;

  &.code-good {
    color: #40d640;
  }

  &.code-bad {
    color: #ff3f3f;
  }
}

.code-desc {
  margin-bottom: 0;
  font-weight: 500;
}
</style>