<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import Vue from "vue"
import getMeta from "assets/get-meta.js"

export default {
  name: "App",

  meta: {
    title: "Quasar Framework",
    titleTemplate: (title) => `${title} | Xpi`,

    meta: getMeta(
      "Quasar Framework - Xây dựng giao diện người dùng VueJS hiệu suất cao trong thời gian kỷ lục",
      "Khuôn khổ giao diện người dùng, hướng đến nhà phát triển với các thành phần VueJS cho các trang web đáp ứng, hiệu suất cao tốt nhất trong lớp, ứng dụng PWA, SSR, Di động và Máy tính để bàn, tất cả đều từ cùng một cơ sở mã. Những người nhạy cảm chọn Vue. Những người năng suất chọn Quasar. Hãy là cả hai."
    )
  },

  created () {
    const store = {
      toc: []
    }

    this.$root.store = process.env.SERVER === true ? store : Vue.observable(store)
  }
}
</script>
