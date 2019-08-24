<template>
  <nav class="navbar">
    <ul class="navbar-nav">
      <li v-if="$route.path !== '/'">
        <nuxt-link class="nav-link" to="/">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20"><path fill="currentColor" d="M136.97 380.485l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113l83.928-83.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-116.485 116c-4.686 4.686-4.686 12.284 0 16.971l116.485 116c4.686 4.686 12.284 4.686 16.97-.001z"/></svg>
          Back Home
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="nav-link" to="/skills">Skills</nuxt-link>
      </li>
      <li>
        <nuxt-link class="nav-link" to="/case-studies">Case Studies</nuxt-link>
      </li>
      <li>
        <nuxt-link class="nav-link" to="/#contact">Contact</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.navbar {
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
}

.navbar-nav {
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin-right: 1rem;

  a {
    display: flex;
    padding: 1rem;
    font-weight: 500;
    color: white;

    svg {
      margin-right: .5rem;
    }
  }
}
</style>