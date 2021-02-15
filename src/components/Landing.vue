<template>
  <div class="q-page doc-page" id="container">
    <div >
      <canvas class="q-page doc-page" id="artifactCanvas" myattr="myattr"></canvas>
    </div>

  </div>
</template>

<script>
import * as Three from 'three'

export default {
  name: 'ThreeTest',
  data () {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  methods: {
    init: function () {
      this.$root.store.toc = [ { id: 'Introduction2', title: 'Introduction2' } ]
      const container = document.getElementById('container')
      const canva = document.getElementById('artifactCanvas')

      this.camera = new Three.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 10)
      this.camera.position.z = 1

      this.scene = new Three.Scene()

      const geometry = new Three.BoxGeometry(0.2, 0.2, 0.2)
      const material = new Three.MeshNormalMaterial()

      this.mesh = new Three.Mesh(geometry, material)
      this.scene.add(this.mesh)

      this.renderer = new Three.WebGLRenderer({ canvas: canva, antialias: true })
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      this.renderer.render(this.scene, this.camera)
    },
    animate: function () {
      requestAnimationFrame(this.animate)
      this.mesh.rotation.x += 0.01
      this.mesh.rotation.y += 0.02
      this.renderer.render(this.scene, this.camera)
    },
    myScript: function () {
      this.init()
      this.animate()
    }
  },
  mounted () {
    this.myScript()
    const canva = document.getElementById('canva')
    this.w = canva.clientWidth
    setInterval(() => {
      if (this.w !== canva.clientWidth) this.init()
      this.w = canva.clientWidth
    }, 500)
  }
}
</script>

<style scoped>
   #canva {
    height: 90vh;
   }

   #artifactCanvas{
    height: 90vh;
   }
</style>
