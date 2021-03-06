// Configuration for your app
const path = require("path")

module.exports = function (ctx) {
  return {
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // Kiểm tra hiển thị chính sách cookie
    boot: [ "components" ],

    // Css mà bạn muốn sử dụng
    css: [ "app.sass" ],

    // Nhập gì từ gói @ quasar / extras.
    extras: [ "roboto-font", "material-icons" ],

    // preFetch: true,
    // Build configuration options.
    build: {
      publicPath: "d33d",
      vueRouterMode: "hash", // Vue router mode 'hash' hoặc 'history'
      showProgress: ctx.dev, // Hiển thị thanh tiến trình trong khi biên dịch.
      distDir: "docs", // Thư mục lưu trữ khi build
      // analyze: true,

      chainWebpack (chain) {
        chain.module
          .rule("eslint")
          .pre()
          .exclude.add(/node_modules|\.md\.js$/)
          .end()
          .test(/\.(js|vue)$/)
          .use("eslint-loader")
          .loader("eslint-loader")

        chain.resolve.alias.merge({
          markup: path.resolve(__dirname, "src/markup")
        })

        chain.module
          .rule("pug")
          .test(/\.pug$/)
          .use("pug-loader")
          .loader("pug-plain-loader")

        const rule = chain.module.rule("md").test(/\.md$/)

        rule
          .use("v-loader")
          .loader("vue-loader")
          .options({
            productionMode: ctx.prod,
            compilerOptions: {
              preserveWhitespace: false
            },
            transformAssetUrls: {
              video: "src",
              source: "src",
              img: "src",
              image: "xlink:href"
            }
          })

        rule.use("md-loader").loader(require.resolve("./build/md-loader"))
      }
    },

    devServer: {
      // https: true,
      port: 9090,
      open: true // tự động mở cửa sổ trình duyệt
    },

    framework: {
      importStrategy: "all",
      iconSet: "svg-mdi-v5",

      config: {
        loadingBar: {
          color: "amber"
        }
      }
    },

    animations: [ "fadeIn", "fadeOut" ],

    ssr: {
      pwa: true
    },

    pwa: {
      // workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/cdn/,
            handler: "StaleWhileRevalidate"
          }
        ]
      },
      manifest: {
        name: "Quasar Documentation",
        short_name: "Quasar Docs",
        description: "Quasar Framework Documentation",
        display: "standalone",
        orientation: "any",
        background_color: "#ffffff",
        theme_color: "#027be3",
        icons: [
          {
            src: "https://cdn.quasar.dev/app-icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png"
          },
          {
            src: "https://cdn.quasar.dev/app-icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "https://cdn.quasar.dev/app-icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png"
          },
          {
            src: "https://cdn.quasar.dev/app-icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png"
          },
          {
            src: "https://cdn.quasar.dev/app-icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      },
      metaVariables: {
        appleTouchIcon120:
          "https://cdn.quasar.dev/app-icons/apple-icon-120x120.png",
        appleTouchIcon180:
          "https://cdn.quasar.dev/app-icons/apple-icon-180x180.png",
        appleTouchIcon152:
          "https://cdn.quasar.dev/app-icons/apple-icon-152x152.png",
        appleTouchIcon167:
          "https://cdn.quasar.dev/app-icons/apple-icon-167x167.png",
        appleSafariPinnedTab:
          "https://cdn.quasar.dev/app-icons/safari-pinned-tab.svg",
        msapplicationTileImage:
          "https://cdn.quasar.dev/app-icons/ms-icon-144x144.png"
      }
    },

    vendor: {
      remove: [
        "quasar/dist/api",

        // following are used by algolia
        "algoliasearch",
        "autocomplete.js",
        "hogan.js",
        "request",
        "stack-utils",
        "to-factory",
        "zepto",
        "es6-promise"
      ]
    }
  }
}
