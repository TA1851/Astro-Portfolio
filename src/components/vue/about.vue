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
    <h2 class="text-xl mt-20 text-gray-100 text-center">プログラミングを学び始めたきっかけ</h2>
      <p class="mt-5 text-gray-100">
        札幌出身のエンジニア。<br>
        私はサイバー大学というオンライン大学で初めてプログラミングと出会いました。
        それまではプログラミングとは無縁の生活を送っていましたが、その魅力に惹かれ、積極的に学習を始めることにしました。
        実務ではExcelVBAで自動化ツールを開発したり、Pythonでデータ収集やGUI操作自動化ツールの開発を行ってきました。
        現在はフロントエンドの技術を学んでいます。
      </p>
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