<template>
  <div v-bind="$attrs" class="works-wrapper">
    <div
      data-aos="fade-left"
      data-aos-duration="1800"
      data-aos-delay="400"
      data-aos-once="true"
    >
      <h2 class="secondary-title text-center custom:mx-5 text-5xl text-green-300">WORKS</h2>
    </div>
    <div
      data-aos="fade-left"
      data-aos-duration="1800"
      data-aos-delay="1400"
      data-aos-once="true"
      >
        <div class="card flex mt-20">
          <!-- <img src="" alt="Card Image" class="card-img"> -->
          <div class="card-content">
            <!-- <h2 class="card-title">Card Title</h2> -->
            <p class="card-description text-gray-200 ml-4">
              このポートフォリオサイトはAstro.jsにVue3とTailwindCSSを使用して作成しました。<br>
            </p>
            <p class="mt-2 ml-4 text-gray-100">
              使用技術<br>
              Vue3, HTML, TailwindCSS, AOS.js, Astro.js
            </p>
            <p class="mt-2 ml-4 mb-2 text-gray-100">
              ソースコードは下記のアイコンをクリックしてください。
            </p>
            <a href="https://github.com/TA1851" class="card-button text-gray-100 ml-4 inline-block">
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgMkExMCAxMCAwIDAgMCAyIDEyYzAgNC40MiAyLjg3IDguMTcgNi44NCA5LjVjLjUuMDguNjYtLjIzLjY2LS41di0xLjY5Yy0yLjc3LjYtMy4zNi0xLjM0LTMuMzYtMS4zNGMtLjQ2LTEuMTYtMS4xMS0xLjQ3LTEuMTEtMS40N2MtLjkxLS42Mi4wNy0uNi4wNy0uNmMxIC4wNyAxLjUzIDEuMDMgMS41MyAxLjAzYy44NyAxLjUyIDIuMzQgMS4wNyAyLjkxLjgzYy4wOS0uNjUuMzUtMS4wOS42My0xLjM0Yy0yLjIyLS4yNS00LjU1LTEuMTEtNC41NS00LjkyYzAtMS4xMS4zOC0yIDEuMDMtMi43MWMtLjEtLjI1LS40NS0xLjI5LjEtMi42NGMwIDAgLjg0LS4yNyAyLjc1IDEuMDJjLjc5LS4yMiAxLjY1LS4zMyAyLjUtLjMzczEuNzEuMTEgMi41LjMzYzEuOTEtMS4yOSAyLjc1LTEuMDIgMi43NS0xLjAyYy41NSAxLjM1LjIgMi4zOS4xIDIuNjRjLjY1LjcxIDEuMDMgMS42IDEuMDMgMi43MWMwIDMuODItMi4zNCA0LjY2LTQuNTcgNC45MWMuMzYuMzEuNjkuOTIuNjkgMS44NVYyMWMwIC4yNy4xNi41OS42Ny41QzE5LjE0IDIwLjE2IDIyIDE2LjQyIDIyIDEyQTEwIDEwIDAgMCAwIDEyIDIiLz48L3N2Zz4=">
            </a>
          </div>
        </div>
        <div class="card flex mt-20">
          <img src="" alt="Card Image" class="card-img">
          <div class="card-content">
            <h2 class="card-title">Card Title</h2>
            <p class="card-description text-gray-200 ml-4">
              このポートフォリオサイトはAstro.jsにVue3とTailwindCSSを使用して作成しました。<br>
            </p>
            <p class="mt-2 ml-4 text-gray-100">
              使用技術<br>
              Vue3, HTML, TailwindCSS, AOS.js, Astro.js
            </p>
            <p class="mt-2 ml-4 mb-2 text-gray-100">
              ソースコードは下記のアイコンをクリックしてください。
            </p>
            <a href="https://github.com/TA1851" class="card-button text-gray-100 ml-4 inline-block">
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIgMkExMCAxMCAwIDAgMCAyIDEyYzAgNC40MiAyLjg3IDguMTcgNi44NCA5LjVjLjUuMDguNjYtLjIzLjY2LS41di0xLjY5Yy0yLjc3LjYtMy4zNi0xLjM0LTMuMzYtMS4zNGMtLjQ2LTEuMTYtMS4xMS0xLjQ3LTEuMTEtMS40N2MtLjkxLS42Mi4wNy0uNi4wNy0uNmMxIC4wNyAxLjUzIDEuMDMgMS41MyAxLjAzYy44NyAxLjUyIDIuMzQgMS4wNyAyLjkxLjgzYy4wOS0uNjUuMzUtMS4wOS42My0xLjM0Yy0yLjIyLS4yNS00LjU1LTEuMTEtNC41NS00LjkyYzAtMS4xMS4zOC0yIDEuMDMtMi43MWMtLjEtLjI1LS40NS0xLjI5LjEtMi42NGMwIDAgLjg0LS4yNyAyLjc1IDEuMDJjLjc5LS4yMiAxLjY1LS4zMyAyLjUtLjMzczEuNzEuMTEgMi41LjMzYzEuOTEtMS4yOSAyLjc1LTEuMDIgMi43NS0xLjAyYy41NSAxLjM1LjIgMi4zOS4xIDIuNjRjLjY1LjcxIDEuMDMgMS42IDEuMDMgMi43MWMwIDMuODItMi4zNCA0LjY2LTQuNTcgNC45MWMuMzYuMzEuNjkuOTIuNjkgMS44NVYyMWMwIC4yNy4xNi41OS42Ny41QzE5LjE0IDIwLjE2IDIyIDE2LjQyIDIyIDEyQTEwIDEwIDAgMCAwIDEyIDIiLz48L3N2Zz4=">
            </a>
          </div>
        </div>
    </div>
  </div>

</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'Works',
  inheritAttrs: false,
  mounted() {
    AOS.init()
  }
}
</script>