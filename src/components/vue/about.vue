<template>
  <div class="about-container">
    <div
      data-aos="fade-right"
      data-aos-duration="1800"
      data-aos-delay="400"
      data-aos-once="true"
    >
      <h2 class="secondary-title text-center custom:mx-5 text-5xl text-green-300">ABOUT ME</h2>
    </div>
    <div
      data-aos="fade-right"
      data-aos-duration="1800"
      data-aos-delay="1500"
      data-aos-once="true"
      class="mt-36"
    >
      <h2 class="text-xl text-gray-100 text-center">
        プログラミングを学び始めたきっかけ
      </h2>
        <p class="mt-5 text-gray-100 max-w-2xl mx-auto">
          札幌出身のエンジニア。私はサイバー大学というオンライン大学で初めてプログラミングと出会いました。
          それまではプログラミングとは無縁の生活を送っていましたが、その魅力に惹かれ、積極的に学習を始めることにしました。
          以前は、半導体製造メーカに勤務しており、実務ではExcelVBAで自動化ツールを開発したり、Pythonでデータ収集やGUI操作自動化ツールの開発を行ってきました。
          その後、技術派遣会社に転職し、各社Slarでの開発に携わりながらながら、自己学習を続けてきました。
          その中で、フロントエンド開発にも興味を持ち、ReactやVue.jsを使ったプロジェクトに取り組むようになりました。
          Reactを学んだ後に、バックエンドにFastAPIを使用したブログAPIを開発し、フロントエンドはReact.jsとNext.jsでアプリを作成しました。
          このポートフォリオサイトは、Astro.jsを使用して作成しました。
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