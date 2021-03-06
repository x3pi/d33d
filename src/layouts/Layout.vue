<template lang="pug">
q-layout.doc-layout(view="lHh LpR lff", @scroll="onScroll")
  q-header.header(elevated)
    q-toolbar
      q-space

      //- q-btn.q-ml-xs(
      //-   v-show="showRightDrawerToggler"
      //-   flat,
      //-   dense,
      //-   round,
      //-   @click="toggleRightDrawer",
      //-   aria-label="Menu"
      //-   :icon="mdiClipboardText"
      //- )

  q-drawer(
    side="left"
    v-model="leftDrawerState"
    show-if-above
    bordered
    content-class="doc-left-drawer"
  )
    q-scroll-area(style="height: calc(100% - 50px); margin-top: 50px")
      //- survey-link.layout-link(
      //-   color="primary"
      //-   align-class="justify-start"
      //-   padding-class="q-py-md"
      //- )
      //- q-separator.q-mb-lg

      //- .row.justify-center.q-my-lg
      //-   q-btn(
      //-     type="a"
      //-     href="https://donate.quasar.dev"
      //-     target="_blank"
      //-     rel="noopener"
      //-     size="13px"
      //-     color="primary"
      //-     :icon="mdiHeartOutline"
      //-     label="Donate to Quasar"
      //-
      app-menu.q-my-lg

    .absolute-top.bg-white.layout-drawer-toolbar
      form(
        autocorrect="off"
        autocapitalize="off"
        autocomplete="off"
        spellcheck="false"
      ).form-logo
        q-toolbar.full-width.doc-algolia.bg-primary.toolbar-logo
          q-btn.quasar-logo.text-bold(key="logo", flat, no-caps, no-wrap, stretch, to="/")
            q-avatar.doc-layout-avatar
              img(src="demo.png")
            q-toolbar-title(shrink).q-layout__section--marginal Demo
  //- q-drawer(
  //-   v-if="hasRightDrawer"
  //-   side="right"
  //-   v-model="rightDrawerState"
  //-   show-if-above
  //-   content-class="bg-grey-1"
  //-   :width="180"
  //-   @on-layout="updateRightDrawerOnLayout"
  //- )
  //-   q-scroll-area.fit
  //-     header-menu.q-mt-sm.text-primary.column(v-if="$q.screen.lt.sm", align="right")

  //-     q-list.doc-toc.q-my-lg.text-grey-8
  //-       q-item(
  //-         v-for="tocItem in tocList",
  //-         :key="tocItem.id",
  //-         clickable,
  //-         v-ripple,
  //-         dense,
  //-         @click="scrollTo(tocItem.id)",
  //-         :active="activeToc === tocItem.id"
  //-       )
  //-         q-item-section(v-if="tocItem.sub === true", side) •
  //-         q-item-section {{ tocItem.title }}

  q-page-container
    transition(
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
      @leave="resetScroll"
    )
      router-view

  q-page-scroller
    q-btn(fab-mini, color="primary", glossy, :icon="mdiChevronUp")
</template>

<script>
import { scroll } from "quasar"
import {
  mdiMenu,
  mdiClipboardText,
  mdiHeartOutline,
  mdiMagnify,
  mdiChevronUp
} from "@quasar/extras/mdi-v5"

import AppMenu from "components/AppMenu"
import HeaderMenu from "components/HeaderMenu"
import SurveyLink from "components/SurveyLink"

const { setScrollPosition, getScrollPosition } = scroll

export default {
  name: "Layout",

  created () {
    this.preventTocUpdate = this.$route.hash.length > 1

    this.mdiMenu = mdiMenu
    this.mdiClipboardText = mdiClipboardText
    this.mdiHeartOutline = mdiHeartOutline
    this.mdiMagnify = mdiMagnify
    this.mdiChevronUp = mdiChevronUp
  },

  components: {
    AppMenu,
    SurveyLink,
    HeaderMenu
  },

  data () {
    return {
      search: "",
      searchFocused: false,

      leftDrawerState: false,
      rightDrawerState: false,
      rightDrawerOnLayout: false,

      activeToc:
        this.$route.hash.length > 1 ? this.$route.hash.substring(1) : void 0
    }
  },

  computed: {
    searchPlaceholder () {
      return this.searchFocused === true
        ? "Type to start searching..."
        : this.$q.platform.is.desktop === true
          ? `Type ' / ' to focus here...`
          : "Search..."
    },

    hasRightDrawer () {
      return this.tocList.length > 0 || this.$q.screen.lt.sm
    },

    showRightDrawerToggler () {
      return this.hasRightDrawer === true && this.rightDrawerOnLayout === false
    },

    tocList () {
      const toc = this.$root.store.toc
      return toc.length > 0
        ? [
          { id: "Introduction", title: "Introduction" },
          ...this.$root.store.toc
        ]
        : toc
    }
  },

  watch: {
    $route (newRoute, oldRoute) {
      this.leftDrawerState = this.$q.screen.width > 1023
      setTimeout(() => {
        this.scrollToCurrentAnchor(newRoute.path !== oldRoute.path)
      })
    },

    hasRightDrawer (shown) {
      if (shown === false) {
        this.rightDrawerState = false
      }
    }
  },

  methods: {
    toggleLeftDrawer () {
      this.leftDrawerState = !this.leftDrawerState
    },

    toggleRightDrawer () {
      this.rightDrawerState = !this.rightDrawerState
    },

    resetScroll (el, done) {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      done()
    },

    changeRouterHash (hash) {
      if (this.$route.hash !== hash) {
        this.$router.push({ hash }).catch(() => {})
      }
      else {
        this.scrollToCurrentAnchor()
      }
    },

    scrollTo (id) {
      clearTimeout(this.scrollTimer)

      if (this.rightDrawerOnLayout !== true) {
        this.rightDrawerState = false
        this.scrollTimer = setTimeout(() => {
          this.changeRouterHash("#" + id)
        }, 300)
      }
      else {
        this.changeRouterHash("#" + id)
      }
    },

    scrollPage (el, delay) {
      const { top } = el.getBoundingClientRect()
      const offset = Math.max(0, getScrollPosition(window) + top - 66)

      clearTimeout(this.scrollTimer)

      this.preventTocUpdate = true
      setScrollPosition(window, offset, delay)

      this.scrollTimer = setTimeout(() => {
        this.preventTocUpdate = false
      }, delay + 10)
    },

    updateRightDrawerOnLayout (state) {
      this.rightDrawerOnLayout = state
    },

    onScroll ({ position }) {
      if (
        this.preventTocUpdate !== true &&
        (this.rightDrawerOnLayout === true || this.rightDrawerState !== true)
      ) {
        this.updateActiveToc(position)
      }
    },

    updateActiveToc (position) {
      if (position === void 0) {
        position = getScrollPosition(window)
      }

      const toc = this.tocList
      let last

      for (const i in toc) {
        const section = toc[i]
        const item = document.getElementById(section.id)

        if (item === null) {
          continue
        }

        if (item.offsetTop >= position + 155) {
          if (last === void 0) {
            last = section.id
          }
          break
        }
        else {
          last = section.id
        }
      }

      if (last !== void 0) {
        this.activeToc = last
      }
    },

    focusOnSearch (evt) {
      if (
        evt.target.tagName !== "INPUT" &&
        String.fromCharCode(evt.keyCode) === "/"
      ) {
        evt.preventDefault()
        this.search = ""
        if (!this.leftDrawerState) {
          this.leftDrawerState = true
        }
        setTimeout(() => {
          this.$refs.docAlgolia.focus()
        })
      }
    },

    onSearchFocus () {
      this.searchFocused = true
    },

    onSearchBlur () {
      this.searchFocused = false
    },

    scrollToCurrentAnchor (immediate) {
      const { hash } = this.$route
      const el =
        hash.length > 1 ? document.getElementById(hash.substring(1)) : null

      if (el !== null) {
        if (immediate === true) {
          let anchorEl = el
          while (
            anchorEl.parentElement !== null &&
            anchorEl.parentElement.classList.contains("q-page") !== true
          ) {
            anchorEl = anchorEl.parentElement
          }

          document.body.classList.add("q-scroll--lock")
          anchorEl.classList.add("q-scroll--anchor")

          setTimeout(() => {
            document.body.classList.remove("q-scroll--lock")
            anchorEl && anchorEl.classList.remove("q-scroll--anchor")
          }, 2000)
        }

        this.scrollPage(el, immediate === true ? 0 : 500)
      }
      else {
        this.preventTocUpdate = false
        this.updateActiveToc()
      }
    },

    initializeAlgolia () {
      // If we have a search string in the query (mostly from tab-to-search functionality),
      // we need to open the drawer to fill in the search string in the input later
      const searchQuery = this.$route.query.search

      if (searchQuery) {
        this.leftDrawerState = true
      }

      import(
        /* webpackChunkName: "algolia" */
        "docsearch.js"
      ).then(docsearch => {
        docsearch.default({
          apiKey: "5c15f3938ef24ae49e3a0e69dc4a140f",
          indexName: "quasar-framework",
          inputSelector: ".doc-algolia input",
          algoliaOptions: {
            hitsPerPage: 7
          },
          handleSelected: (a, b, suggestion, c, context) => {
            const url = suggestion.url.replace("https://quasar.dev", "")

            this.search = ""
            this.$router.push(url).catch(() => {})
            this.$refs.docAlgolia.blur()
          }
        })

        if (this.$q.platform.is.desktop === true) {
          window.addEventListener("keypress", this.focusOnSearch)
        }

        if (searchQuery) {
          // Here we put search string from query into the input and open the search popup.
          // Unfortunately, this input is managed completely by Algolia and their code doesn't seem to
          // have a method of opening the popup programmatically, so we need to simulate typing on that input element.
          // We also need to dispatch the event only after the input text is populated and Vue will
          // do that in next render, so we schedule it on the next event loop iteration with setTimeout.
          this.search = searchQuery
          this.$refs.docAlgolia.focus()
          setTimeout(() => {
            this.$refs.docAlgolia.$refs.input.dispatchEvent(
              new Event("input", {})
            )
          })
        }
      })
    }
  },

  mounted () {
    this.scrollToCurrentAnchor(true)
    this.initializeAlgolia()
  },

  beforeDestroy () {
    clearTimeout(this.scrollTimer)

    if (this.$q.platform.is.desktop === true) {
      window.removeEventListener("keypress", this.focusOnSearch)
    }
  }
}
</script>

<style lang="sass">
@import '../css/docsearch'

.q-layout__shadow:after
  box-shadow: none !important
.header
  background: $primary

.header-logo
  width: 25px
  height: 25px

.doc-layout-avatar > div
  border-radius: 0

.layout-drawer-toolbar
  > form
    margin-right: -2px
  &__shadow
    bottom: -10px
    &:after
      content: ''
      position: absolute
      top: 0
      right: 0
      bottom: 10px
      left: 0
      box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2), 0 0px 10px rgba(0, 0, 0, 0.24)

.doc-algolia
  .q-field__control
    padding: 0 18px 0 16px !important
  &.q-field--focused
    .q-icon
      color: #fff

.q-drawer--mobile
  .layout-drawer-toolbar form
    margin-right: -1px
  .doc-algolia .q-field__control
    padding-right: 17px !important
  .doc-toc
    .q-item
      margin-left: 3px
    .q-item--active
      font-weight: 600

.doc-toc .q-item
  border-radius: 10px 0 0 10px
  margin-top: 1px
  margin-bottom: 1px

  &.q-item--active
    background: scale-color($primary, $lightness: 90%)

.doc-left-drawer
  overflow: inherit !important

.quasar-logo
  img
    transform: rotate(0deg)
    transition: transform .8s ease-in-out
  &:hover img
    transform: rotate(-360deg)

.q-page-container :target
  scroll-margin-top: ($toolbar-min-height + 16px)

// keep the button on top of sticky in examples
.q-page-scroller > .q-page-sticky
  z-index: 1

.doc-layout
  .countdown
    .heading
      font-size: 18px
    .time
      font-size: 38px

.layout-link
  background: linear-gradient(45deg, #e6f1fc 25%, #c3e0ff 25%, #c3e0ff 50%, #e6f1fc 50%, #e6f1fc 75%, #c3e0ff 75%, #c3e0ff)
  background-size: 40px 40px
  text-align: center
</style>
