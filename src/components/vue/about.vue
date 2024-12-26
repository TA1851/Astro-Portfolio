<template>
  <div
    data-aos="fade-right"
    data-aos-duration="1800"
    data-aos-delay="400"
    data-aos-once="true"
  >
  <h2 class="secondary-title text-center custom:mx-5 text-5xl text-green-300">ABOUT ME</h2>
  </div>
  <div
    data-aos="fade-up"
    data-aos-duration="1800"
    data-aos-delay="400"
    data-aos-once="true">
    <h2 class="text-xl mt-20 text-gray-100">プログラミングを学び始めたきっかけ</h2>
      <p class="mt-5 text-gray-100">
        私はサイバー大学というオンライン大学で初めてプログラミングと出会いました。<br>
        それまではプログラミングとは無縁の生活を送っていましたが、その魅力に惹かれ、積極的に学習を始めることにしました。
      </p>
      <p class="indent-3 text-gray-100">実務ではExcelVBAでツールを開発したり、web Scrapingによるデータ収集やGUI操作自動化ツールの開発を行ってきました。
        10数年ぶりに地元の札幌に戻ってきました。
      </p><br>
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