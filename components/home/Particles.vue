<template>
  <div id="mapContainer" class="particleContainer">
    <canvas id="map"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three'

export default {
  computed: {
    viewportWidth() {
      const vWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
      return vWidth >= 900 ? 1200 : 900
    }
  },
  mounted() {
    let renderer
    let scene
    let camera
    const images = [
      require('~/static/images/icon-brackets.png'),
      require('~/static/images/icon-css.png'),
      require('~/static/images/icon-js.png'),
      require('~/static/images/icon-terminal.png'),
      require('~/static/images/icon-bracketsCurly.png'),
      require('~/static/images/icon-code.png')
    ]
    let currentIndex = images.length - 1
    let particles
    let imgData = images[currentIndex]
    let loaded = false
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const material = new THREE.PointsMaterial({
      size: 2,
      color: 0xE34F26,
      sizeAttenuation: false
    })

    const centerVector = new THREE.Vector3(0, 0, 0)
    const speed = 10

    const getImageData = (image) => {
      canvas.width = image.width
      canvas.height = image.height
      ctx.drawImage(image, 0, 0)
      return ctx.getImageData(0, 0, image.width, image.height)
    }

    const drawTheMap = () => {
      const geometry = new THREE.Geometry()

      for (let y = 0, y2 = imgData.height; y < y2; y += 2) {
        for (let x = 0, x2 = imgData.width; x < x2; x += 2) {
          const rando = Math.random()
          if (imgData.data[x * 4 + y * 4 * imgData.width] < 64) {
            const vertex = new THREE.Vector3()
            vertex.x = x - imgData.width / 2
            vertex.y = -y + imgData.height / 2
            vertex.z = -rando * 500

            vertex.speed = rando / speed + 0.015

            geometry.vertices.push(vertex)
          }
        }
      }

      particles = new THREE.Points(geometry, material)
      scene.add(particles)

      if (!loaded) {
        loaded = true
        requestAnimationFrame(render)
      }
    }

    const init = () => {
      scene = new THREE.Scene()
      if (!loaded) {
        renderer = new THREE.WebGLRenderer({
          canvas: document.getElementById('map'),
          antialias: true,
          alpha: true
        })
        renderer.setSize(this.viewportWidth, this.viewportWidth)
        camera = new THREE.OrthographicCamera(
          this.viewportWidth / -2,
          this.viewportWidth / 2,
          this.viewportWidth / 2,
          this.viewportWidth / -2,
          1,
          1000
        )

        camera.zoom = 2.5

        scene.add(camera)
        camera.lookAt(centerVector)
        camera.updateProjectionMatrix()
      }
      camera.position.set(-1, 0, 1)

      imgData = getImageData(image)
      drawTheMap()
    }

    function changeImage() {
      currentIndex = currentIndex < 1 ? images.length - 1 : currentIndex - 1
      image.src = images[currentIndex]
    }

    const render = (a) => {
      requestAnimationFrame(render)
      particles.geometry.verticesNeedUpdate = true
      camera.position.x += (0 - camera.position.x) * 0.05
      camera.position.y += (0 - camera.position.y) * 0.05
      camera.lookAt(centerVector)
      renderer.render(scene, camera)
    }

    const image = document.createElement('img')
    image.onload = init
    image.src = imgData

    function loopImage() {
      setTimeout(() => {
        changeImage()
        loopImage()
      }, 5700);
    }
    loopImage()
  }
}
</script>

<style lang="scss">
.particleContainer {
  position: absolute;
  z-index: -1;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  opacity: 0.6;

  @media (min-width: 900px) {
    width: 1200px;
    height: 1200px;
  }
}
</style>
