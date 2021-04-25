<template>
  <div id="mapContainer" class="particleContainer">
    <canvas id="map"></canvas>
  </div>
</template>

<script>
import { PointsMaterial, BufferGeometry, Vector3, Points, Scene, WebGLRenderer, OrthographicCamera } from 'three'
import brackets2 from '~/static/images/icon-brackets2.png'
import css2 from '~/static/images/icon-css2.png'
import bracketsCurly2 from '~/static/images/icon-bracketsCurly2.png'
import code2 from '~/static/images/icon-code2.png'
import terminal2 from '~/static/images/icon-terminal2.png'

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
      bracketsCurly2,
      brackets2,
      css2,
      code2,
      terminal2
    ]
    let currentIndex = images.length - 1
    let particles
    const vertexes = []
    let imgData = images[currentIndex]
    let loaded = false
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const material = new PointsMaterial({
      size: 2,
      color: 0xE34F26,
      sizeAttenuation: false
    })

    const centerVector = new Vector3(0, 0, 0)
    const speed = 10

    const getImageData = (image) => {
      canvas.width = image.width
      canvas.height = image.height
      ctx.drawImage(image, 0, 0)
      return ctx.getImageData(0, 0, image.width, image.height)
    }

    const drawTheMap = () => {
      const geometry = new BufferGeometry()
      const points = []
      let count = 0

      for (let y = 0, y2 = imgData.height; y < y2; y += 2) {
        count = count + 1
        for (let x = 0, x2 = imgData.width; x < x2; x += 2) {
          count = count + 1
          if (!vertexes[count]) {
            vertexes[count] = new Vector3()
          }
          const rando = Math.random()
          if (imgData.data[x * 4 + y * 4 * imgData.width] < 8) {
            vertexes[count].x = x - imgData.width / 2
            vertexes[count].y = -y + imgData.height / 2
            vertexes[count].z = -rando * 900

            vertexes[count].speed = rando / speed + 0.015

            points.push(vertexes[count])
            geometry.setFromPoints( points );
            
          }
        }
      }

      particles = new Points(geometry, material)
      scene.add(particles)

      if (!loaded) {
        loaded = true
        requestAnimationFrame(render)
      }
    }

    const init = () => {
      scene = new Scene()
      if (!loaded) {
        renderer = new WebGLRenderer({
          canvas: document.getElementById('map'),
          antialias: true,
          alpha: true
        })
        renderer.setSize(this.viewportWidth, this.viewportWidth)
        camera = new OrthographicCamera(
          this.viewportWidth / -2,
          this.viewportWidth / 2,
          this.viewportWidth / 2,
          this.viewportWidth / -2,
          1,
          1000
        )

        camera.zoom = 3

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
      particles.geometry.attributes.position.needsUpdate = true
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
      }, 6700);
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
