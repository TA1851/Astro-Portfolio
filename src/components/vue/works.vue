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