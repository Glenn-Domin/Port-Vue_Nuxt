<template>
  <div id="mapContainer" class="particleContainer">
    <canvas id="map"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three'

export default {
  mounted() {
    setTimeout(() => {
      let renderer
      let scene
      let camera
      const ww = 1200
      const wh = 1200
      const images = [
        require('~/static/images/icon-code.png'),
        require('~/static/images/icon-terminal.png'),
        require('~/static/images/icon-css.png'),
        require('~/static/images/icon-js.png')
      ]
      let currentIndex = images.length - 1
      let particles
      let imgData = images[currentIndex]
      let loaded = false

      const centerVector = new THREE.Vector3(0, 0, 0)
      const speed = 10
      let isMouseDown = false

      const getImageData = (image) => {
        const canvas = document.createElement('canvas')
        canvas.width = image.width
        canvas.height = image.height

        const ctx = canvas.getContext('2d')
        ctx.drawImage(image, 0, 0)

        return ctx.getImageData(0, 0, image.width, image.height)
      }

      const drawTheMap = () => {
        const geometry = new THREE.Geometry()
        const material = new THREE.PointsMaterial({
          size: 2,
          color: 0xE34F26,
          sizeAttenuation: false
        })
        for (let y = 0, y2 = imgData.height; y < y2; y += 2) {
          for (let x = 0, x2 = imgData.width; x < x2; x += 2) {
            if (imgData.data[x * 4 + y * 4 * imgData.width] < 64) {
              const vertex = new THREE.Vector3()
              vertex.x = x - imgData.width / 2
              vertex.y = -y + imgData.height / 2
              vertex.z = -Math.random() * 500

              vertex.speed = Math.random() / speed + 0.015

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
          renderer.setSize(ww, wh)
          camera = new THREE.OrthographicCamera(
            ww / -2,
            ww / 2,
            wh / 2,
            wh / -2,
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

        window.addEventListener('mouseup', onMouseup, false)
        window.addEventListener('true', onMousedown, false)
      }

      function changeImage() {
        currentIndex = currentIndex < 1 ? images.length - 1 : currentIndex - 1
        image.src = images[currentIndex]
      }

      const onMouseup = () => {
        isMouseDown = false
      }

      const onMousedown = () => {
        isMouseDown = true
      }

      const render = (a) => {
        requestAnimationFrame(render)

        particles.geometry.verticesNeedUpdate = true
        if (!isMouseDown) {
          camera.position.x += (0 - camera.position.x) * 0.05
          camera.position.y += (0 - camera.position.y) * 0.05
          camera.lookAt(centerVector)
        }

        renderer.render(scene, camera)
      }

      const image = document.createElement('img')
      setTimeout(() => {
        if (document.getElementById('mapContainer')) {
          document
            .getElementById('mapContainer')
            .addEventListener('click', changeImage)
        }
      }, 5)
      image.onload = init
      image.src = imgData
    }, 5)
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

  @media (min-width: 1440px) {
    width: 1200px;
    height: 1200px;
  }
}
</style>
