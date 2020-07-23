<template>
  <nav class="navbar">
    <ul class="navbar-nav">
      <li v-if="$route.path !== '/'">
        <nuxt-link class="nav-link" to="/">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" height="20.56"><path fill="currentColor" d="M193.456 357.573L127.882 292H424c13.255 0 24-10.745 24-24v-24c0-13.255-10.745-24-24-24H127.882l65.574-65.573c9.373-9.373 9.373-24.569 0-33.941l-16.971-16.971c-9.373-9.373-24.569-9.373-33.941 0L7.029 239.029c-9.373 9.373-9.373 24.568 0 33.941l135.515 135.515c9.373 9.373 24.569 9.373 33.941 0l16.971-16.971c9.373-9.372 9.373-24.568 0-33.941z"/></svg>
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
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  margin-right: .75rem;

  a {
    display: flex;
    padding: .75rem;
    font-size: 0.95rem;
    font-weight: 500;
    color: white;

    svg {
      margin-right: .5rem;
    }
  }

  @media (min-width: 768px) {
    margin-right: 1rem;

    a {
      padding: 1rem;
      font-size: 1rem;
    }
  }
}
</style>