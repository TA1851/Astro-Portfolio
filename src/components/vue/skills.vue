<template>
  <div class="skill-container">
    <div
      data-aos="fade-up"
      data-aos-duration="1800"
      data-aos-delay="600"
      data-aos-once="true"
      class="mt-2"
    >
      <h2 class="secondary-title text-center custom:mx-5 text-5xl text-green-300">SKILLS</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
      <!-- VBA Card -->
      <div
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        data-aos-delay="1000"
        data-aos-once="true"
        class="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
      >
        <div class="p-6">
          <div class="flex items-center mb-4">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDMyIDMyIj48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjNjQ4M2MwIiBkPSJtMTAuNDU3IDExLjA5Mmw1LjU1NyAyLjc0N3Y0LjQ2OGwtNS41NTctMi45MjV6Ii8+PHBhdGggZD0ibTE2LjIgMTguNjEzbC01LjkyNi0zLjEyVjEwLjhsNS45MjYgMi45MjRabS01LjU1OC0zLjM0M0wxNS44MyAxOHYtNC4wNDdsLTUuMTg4LTIuNTY0WiIvPjxwYXRoIGZpbGw9IiM2NDgzYzAiIGQ9Ik0xNi4zNzEgMTMuODM5djQuNDY4bDQuOTQ0LTIuNDkzdi00LjQ2eiIvPjxwYXRoIGQ9Ik0xNi4xODYgMTguNjA3di00Ljg4Mmw1LjMxMy0yLjY3djQuODczWm0uMzY5LTQuNjU1djQuMDU1TDIxLjEzIDE1Ljd2LTQuMDQ3WiIvPjxwYXRoIGZpbGw9IiM2NDgzYzAiIGQ9Im0xMC43MDMgMTAuNzk3bDUuNDgzIDIuNzgzbDQuODk2LTIuNTE2bC01LjMwNS0yLjY3NXoiLz48cGF0aCBkPSJtMTYuMTg3IDEzLjc4OGwtNS45LTNsNS41LTIuNjA4bDUuNzA5IDIuODc5Wk0xMS4xMjIgMTAuOGw1LjA2NCAyLjU3bDQuNDktMi4zMDhsLTQuOS0yLjQ3MVoiLz48cGF0aCBmaWxsPSIjOTUyNzgxIiBkPSJtMTguOTU3IDE1LjgyOWw1LjU1OCAyLjc0NnY0LjQ2OGwtNS41NTgtMi45MjV6Ii8+PHBhdGggZD0ibTI0LjcgMjMuMzQ5bC01LjkyNi0zLjEydi00LjdMMjQuNyAxOC40NlptLTUuNTU3LTMuMzQzbDUuMTg4IDIuNzMxdi00LjA0OGwtNS4xODgtMi41NjRaIi8+PHBhdGggZmlsbD0iIzk1Mjc4MSIgZD0iTTI0Ljg3MSAxOC41NzV2NC40NjhsNC45NDQtMi40OTN2LTQuNDZ6Ii8+PHBhdGggZD0iTTI0LjY4NyAyMy4zNDN2LTQuODgyTDMwIDE1Ljc5MXY0Ljg3M1ptLjM2OS00LjY1NXY0LjA1NWw0LjU3NS0yLjMwOHYtNC4wNDZaIi8+PHBhdGggZmlsbD0iIzk1Mjc4MSIgZD0ibTE5LjIwMyAxNS41NDZsNS40ODQgMi43ODNsNC44OTYtMi41MTdsLTUuMjE5LTIuNDY2eiIvPjxwYXRoIGQ9Im0yNC42ODcgMTguNTM2bC01LjkyLTMuMDA1bDUuNi0yLjM4N0wzMCAxNS44MDVaTTE5LjY0IDE1LjU2bDUuMDQ2IDIuNTYxbDQuNDc5LTIuM2wtNC44MDYtMi4yN1oiLz48cGF0aCBmaWxsPSIjZDg3YjMwIiBkPSJtMi4xOSAxNS40OTZsNS41NTggMi43NDd2NC40NjhMMi4xOSAxOS43ODZ6Ii8+PHBhdGggZD0iTTcuOTMyIDIzLjAxN0wyLjAwNiAxOS45di00LjdsNS45MjYgMi45MjlabS01LjU1Ny0zLjM0M2w1LjE4OCAyLjczMXYtNC4wNDhsLTUuMTg4LTIuNTY0WiIvPjxwYXRoIGZpbGw9IiNkODdiMzAiIGQ9Ik04LjEwNCAxOC4yNDN2NC40NjhsNC45NDQtMi40OTN2LTQuNDZ6Ii8+PHBhdGggZD0iTTcuOTIgMjMuMDExdi00Ljg4Mmw1LjMxMy0yLjY3djQuODczWm0uMzY5LTQuNjU1djQuMDU1bDQuNTc1LTIuMzExdi00LjA0M1oiLz48cGF0aCBmaWxsPSIjZDg3YjMwIiBkPSJtMi40MzYgMTUuMjEzbDUuNDg0IDIuNzg0bDQuODk2LTIuNTE3bC01LjIxOS0yLjQ2NnoiLz48cGF0aCBkPSJNNy45MiAxOC4yTDIgMTUuMmw1LjYtMi4zODdsNS42MzIgMi42NjFabS01LjA0Ny0yLjk3Mmw1LjA0NiAyLjU2MWw0LjQ3OS0yLjNsLTQuODA2LTIuMjdaIi8+PHBhdGggZmlsbD0iI2UwZDQwMCIgZD0ibTEwLjg3NSAxNi4yOTZsNS41NTcgMi43NDZ2NC40NjlsLTUuNTU3LTIuOTI2eiIvPjxwYXRoIGQ9Ik0xNi42MTcgMjMuODE2TDEwLjY5MSAyMC43VjE2bDUuOTI2IDIuOTI5Wm0tNS41NTctMy4zNDJsNS4xODggMi43MzF2LTQuMDQ4bC01LjE4OC0yLjU2NFoiLz48cGF0aCBmaWxsPSIjZTBkNDAwIiBkPSJNMTYuNzg5IDE5LjA0MnY0LjQ2OWw0Ljk0NC0yLjQ5NHYtNC40NnoiLz48cGF0aCBkPSJNMTYuNiAyMy44MTF2LTQuODgybDUuMzEzLTIuNjd2NC44NzNabS4zNjktNC42NTV2NC4wNTVsNC41OC0yLjMxMXYtNC4wNDNaIi8+PHBhdGggZmlsbD0iI2UwZDQwMCIgZD0ibTExLjEyMSAxNi4wMDFsNS40ODQgMi43ODNsNC44OTYtMi41MTdsLTUuMzA1LTIuNjc0eiIvPjxwYXRoIGQ9Im0xNi42MDUgMTguOTkxbC01LjktM2w1LjUtMi42MDhsNS43MDkgMi44NzlabS01LjA2NS0yLjk4NWw1LjA2NCAyLjU3bDQuNDktMi4zMDhsLTQuOS0yLjQ3MVoiLz48L3N2Zz4=" class="w-12 h-12 mr-4">
            <h3 class="text-2xl font-bold text-white">VBA：2020-2024</h3>
          </div>
          <p class="text-gray-100">
            一番最初に触れた言語で、社内の業務効率化のために習得しました。
            環境構築が不要で、教材や情報がありふれていたので学習には困りませんでした。
            データクレンジングやグラフ作成ツールやログ集計やログ解析を行うためのツールを作成していました。
          </p>
          <div class="mt-4 flex justify-end">
            <span class="px-3 py-1 bg-green-600 text-white text-sm rounded-full">Excel 自動化</span>
          </div>
        </div>
      </div>
      <!-- Python Card -->
      <div
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        data-aos-delay="700"
        data-aos-once="true"
        class="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
      >
        <div class="p-6">
          <div class="flex items-center mb-4">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDMyIDMyIj48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9InZzY29kZUljb25zRmlsZVR5cGVQeXRob24wIiB4MT0iLTEzMy4yNjgiIHgyPSItMTMzLjE5OCIgeTE9Ii0yMDIuOTEiIHkyPSItMjAyLjg0IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDE4OS4zOCAwIDAgMTg5LjgxIDI1MjQzLjA2MSAzODUxOS4xNykiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzODdlYjgiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzNjY5OTQiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0idnNjb2RlSWNvbnNGaWxlVHlwZVB5dGhvbjEiIHgxPSItMTMzLjU3NSIgeDI9Ii0xMzMuNDk1IiB5MT0iLTIwMy4yMDMiIHkyPSItMjAzLjEzMyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxODkuMzggMCAwIDE4OS44MSAyNTMwOS4wNjEgMzg1ODMuNDIpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZlMDUyIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZjMzMxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD0idXJsKCN2c2NvZGVJY29uc0ZpbGVUeXBlUHl0aG9uMCkiIGQ9Ik0xNS44ODUgMi4xYy03LjEgMC02LjY1MSAzLjA3LTYuNjUxIDMuMDd2My4xOWg2Ljc1MnYxSDYuNTQ1UzIgOC44IDIgMTYuMDA1czQuMDEzIDYuOTEyIDQuMDEzIDYuOTEySDguMzN2LTMuMzYxcy0uMTMtNC4wMTMgMy45LTQuMDEzaDYuNzYyczMuNzcyLjA2IDMuNzcyLTMuNjUyVjUuOHMuNTcyLTMuNzEyLTYuODQyLTMuNzEyWm0tMy43MzIgMi4xMzdhMS4yMTQgMS4yMTQgMCAxIDEtMS4xODMgMS4yNDR2LS4wMmExLjIxNCAxLjIxNCAwIDAgMSAxLjIxNC0xLjIxNFoiLz48cGF0aCBmaWxsPSJ1cmwoI3ZzY29kZUljb25zRmlsZVR5cGVQeXRob24xKSIgZD0iTTE2LjA4NSAyOS45MWM3LjEgMCA2LjY1MS0zLjA4IDYuNjUxLTMuMDh2LTMuMThoLTYuNzUxdi0xaDkuNDdTMzAgMjMuMTU4IDMwIDE1Ljk5NXMtNC4wMTMtNi45MTItNC4wMTMtNi45MTJIMjMuNjRWMTIuNHMuMTMgNC4wMTMtMy45IDQuMDEzaC02Ljc2NVM5LjIgMTYuMzU2IDkuMiAyMC4wNjhWMjYuMnMtLjU3MiAzLjcxMiA2Ljg0MiAzLjcxMmguMDRabTMuNzMyLTIuMTQ3QTEuMjE0IDEuMjE0IDAgMSAxIDIxIDI2LjUxOXYuMDNhMS4yMTQgMS4yMTQgMCAwIDEtMS4yMTQgMS4yMTR6Ii8+PC9zdmc+" class="w-12 h-12 mr-4">
            <h3 class="text-2xl font-bold text-white">Python：2023-2025</h3>
          </div>
          <p class="text-gray-100">
            VBAの次に習得した言語で、社内SE時代にGUI自動化ツールを作成したり、データ収集してデータの可視化を行っていました。
            IT業界にジョブチェンジ後は、サイバーセキュリティプラットフォームの開発案件を経験しました。
            個人開発では、FastAPIを使用してブログシステムの構築を行いました。
          </p>
          <div class="mt-4 flex justify-end space-x-2">
            <span class="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">FastAPI</span>
            <span class="px-3 py-1 bg-yellow-600 text-white text-sm rounded-full">自動化</span>
          </div>
        </div>
      </div>
      <!-- JS&TS Card -->
      <div
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        data-aos-delay="750"
        data-aos-once="true"
        class="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
      >
        <div class="p-6">
          <div class="flex items-center mb-4">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSJub25lIi8+PGcgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiIGZpbGw9IiNmMGRiNGYiIHJ4PSI2MCIvPjxwYXRoIGZpbGw9IiMzMjMzMzAiIGQ9Im02Ny4zMTIgMjEzLjkzMmwxOS41OS0xMS44NTZjMy43OCA2LjcwMSA3LjIxOCAxMi4zNzEgMTUuNDY1IDEyLjM3MWM3LjkwNSAwIDEyLjg4OS0zLjA5MiAxMi44ODktMTUuMTJ2LTgxLjc5OGgyNC4wNTh2ODIuMTM4YzAgMjQuOTE3LTE0LjYwNiAzNi4yNTktMzUuOTE2IDM2LjI1OWMtMTkuMjQ1IDAtMzAuNDE2LTkuOTY3LTM2LjA4Ny0yMS45OTZtODUuMDctMi41NzZsMTkuNTg4LTExLjM0MWM1LjE1NyA4LjQyMSAxMS44NTkgMTQuNjA3IDIzLjcxNSAxNC42MDdjOS45NjkgMCAxNi4zMjUtNC45ODQgMTYuMzI1LTExLjg1OGMwLTguMjQ4LTYuNTMtMTEuMTctMTcuNTI4LTE1Ljk4bC02LjAxMy0yLjU3OWMtMTcuMzU3LTcuMzg4LTI4Ljg3MS0xNi42NjgtMjguODcxLTM2LjI1OGMwLTE4LjA0NCAxMy43NDgtMzEuNzkyIDM1LjIyOS0zMS43OTJjMTUuMjk0IDAgMjYuMjkyIDUuMzI4IDM0LjE5NiAxOS4yNDdsLTE4LjczMSAxMi4wMjljLTQuMTI1LTcuMzg5LTguNTkxLTEwLjMxLTE1LjQ2NS0xMC4zMWMtNy4wNDYgMC0xMS41MTQgNC40NjgtMTEuNTE0IDEwLjMxYzAgNy4yMTcgNC40NjggMTAuMTM5IDE0Ljc3OCAxNC42MDhsNi4wMTQgMi41NzdjMjAuNDQ5IDguNzY1IDMxLjk2MyAxNy42OTkgMzEuOTYzIDM3LjgwNGMwIDIxLjY1NC0xNy4wMTIgMzMuNTEtMzkuODY3IDMzLjUxYy0yMi4zMzkgMC0zNi43NzQtMTAuNjU0LTQzLjgxOS0yNC41NzQiLz48L2c+PC9zdmc+" class="w-12 h-12 mr-4">
            <h3 class="text-2xl font-bold text-white">Javascript：2024-2025</h3>
          </div>
          <p class="text-gray-100">
            AstroプロジェクトでVue3,AOS使いポートフォリオサイトを作成しました。
            Vueを学んだ後にReactとTypeScriptを学習し、ブログサービスの開発でReact、Nextjsを使用して作成しました。
            個人的に好きな言語なので、今後も学習を続けていきたいと思っています。
          </p>
          <div class="mt-4 flex justify-end space-x-2">
            <span class="px-3 py-1 bg-teal-600 text-white text-sm rounded-full">Vue</span>
            <span class="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">React</span>
            <span class="px-3 py-1 bg-gray-600 text-white text-sm rounded-full">NextJS</span>
          </div>
        </div>
      </div>
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

<style scoped>
.skill-container {
  padding: 1rem;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>