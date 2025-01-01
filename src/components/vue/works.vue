<template>
  <div
    data-aos="fade-right"
    data-aos-duration="1800"
    data-aos-delay="400"
    data-aos-once="true"
  >
  <h2 class="secondary-title text-center custom:mx-5 text-5xl text-green-300">WORKS</h2>
  </div>
  <div
    data-aos="fade-up"
    data-aos-duration="1800"
    data-aos-delay="400"
    data-aos-once="true">
      <img src="" alt="">
      <img src="" alt="">
  </div>
  <div class="card flex mt-20">
    <img src="https://via.placeholder.com/300" alt="Card Image" class="card-img">
    <div class="card-content">
      <h2 class="card-title">Card Title</h2>
      <p class="card-description text-gray-200 ml-4">
        このポートフォリオサイト<br>
        このポートフォリオサイトはAstro.jsにVue3とTailwindCSSを使用して作成しました。<br>
        アニメーションはAOS.jsを使用しています。
      </p>
      <a href="#" class="card-button text-gray-100">Read More</a>
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted() {
    AOS.init()
  }
}
</script>