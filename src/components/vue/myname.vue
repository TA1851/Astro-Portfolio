<template>
  <div class="top-container">
    <div
      data-aos="zoom-in"
      data-aos-duration="3000"
      data-aos-delay="700"
    >
      <h1 class="text-2xl text-center text-yellow-50 pt-10 mt-5 customFont:text-xl">
        <span class="inline-block text-2xl bg-gradient-to-r
          from-gray-400 via-emerald-500 via-green-500 via-emerald-500 to-gray-400
          bg-clip-text text-transparent w-fit"
        >
          Tatuhiko Osaka's Portfolio
        </span>
      </h1>
        <p class="text-center text-white">
          welcome to my portfolio site
        </p>
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