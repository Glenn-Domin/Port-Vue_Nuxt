<template>
  <main class="case-listing">
    <section class="container">
      <h1 class="title text-center">Campdraft One</h1>
      Dimensions: {{ dimensions }} {{ $route.params.dimensions }}<br>
      {{ $route.params }}
    </section>
  </main>
</template>

<script>
export default {
  name: 'CampdraftOne',
  layout: 'case-study',
  props: {
    dimensions: {
      type: String,
      default: '0'
    }
  }
}
</script>
