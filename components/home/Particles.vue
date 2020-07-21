<template>
  <div class="particleContainer">
    <canvas id="map"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three'
setTimeout(() => {
    let renderer
    let scene
    let camera
    const ww = 800
    const wh = 800
    let particles
    let imgData = require('~/static/images/icon-code.png')

    const centerVector = new THREE.Vector3(0, 0, 0)
    const speed = 10
    let isMouseDown = false

    const getImageData = (image) => {
        const canvas = document.createElement("canvas")
        canvas.width = image.width
        canvas.height = image.height

        const ctx = canvas.getContext("2d")
        ctx.drawImage(image, 0, 0)

        return ctx.getImageData(0, 0, image.width, image.height);
    }

    const drawTheMap = () => {

        const geometry = new THREE.Geometry()
        const material = new THREE.PointsMaterial({
            size: 3,
            color: 0xFF0A78,
            sizeAttenuation: false
        })
        for (let y = 0, y2 = imgData.height; y < y2; y += 2) {
            for (let x = 0, x2 = imgData.width; x < x2; x += 2) {
                if (imgData.data[(x * 4 + y * 4 * imgData.width)] < 128) {

                    const vertex = new THREE.Vector3()
                    vertex.x = x - imgData.width / 2
                    vertex.y = -y + imgData.height / 2
                    vertex.z = -Math.random()*500

                    vertex.speed = Math.random() / speed + 0.015

                    geometry.vertices.push(vertex)
                }
            }
        }
        particles = new THREE.Points(geometry, material)

        scene.add(particles)

        requestAnimationFrame(render)
    }

    const init = () => {
        renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById("map"),
        antialias: true,
        alpha: true
        })
        renderer.setSize(ww, wh)

        scene = new THREE.Scene()

        camera = new THREE.OrthographicCamera( ww / - 2, ww / 2, wh / 2, wh / - 2, 1, 1000 )
        camera.position.set(1, 0, 1)
        camera.lookAt(centerVector)
        scene.add(camera)
        camera.zoom = 2
        camera.updateProjectionMatrix()

        imgData = getImageData(image)
        drawTheMap()

        window.addEventListener('mouseup', onMouseup, false)

    }

    const onMouseup = () => {
        isMouseDown = false
    }

    const render = a => {

        requestAnimationFrame(render)


        particles.geometry.verticesNeedUpdate = true
        if(!isMouseDown){
            camera.position.x += (0-camera.position.x)*0.06
            camera.position.y += (0-camera.position.y)*0.06
            camera.lookAt(centerVector)
        }

        renderer.render(scene, camera)
    }

    const image = document.createElement("img")
    image.onload = init
    image.src = imgData
}, 1)
export default {}
</script>

<style>
.particleContainer {
  position: absolute;
  z-index: -1;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 800px;
  height: 800px;
}
</style>