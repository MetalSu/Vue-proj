<template>
  <div class="page-home">
    <!-- 头部 -->
    <div data-v-12c11301 data-v-95df9396 class="app-download-bar">
      <div data-v-12c11301 class="ll">
        <div data-v-12c11301 class="logo">
          <div
            style="background-position: center center; background-size: contain; background-repeat: no-repeat; background-image: url(&quot;../../assets/logo.png&quot;);"
          ></div>
          <img src="../../assets/logo.png" />
          <!---->
        </div>
      </div>
      <div
        data-v-12c11301
        id="openApp"
        class="btn"
        url="https://4v0q.t4m.cn/zUVVR3?mobDownload=https://itunes.apple.com/cn/app/id923912459?mt=8"
      >打开APP</div>
    </div>
    <!-- 搜索 -->

    <!-- 轮播 -->
    <Swiper class="my-swiper" :autoplay="3000"  ref="my-swiper">
      <SwiperItem class="swiper-slide">
        <img
          src="https://s2.showstart.com/img/2020/20200426/99c15cdcbb514ec7beac6a33cb689c8c_1125_450_322077.0x0.jpg?imageMogr2/thumbnail/!750x300r/gravity/Center/crop/!750x300"
          alt
        />
      </SwiperItem>
      <SwiperItem class="swiper-slide">
        <img
          src="https://s2.showstart.com/img/2020/20200417/e90961193fc14e33a9234a2919371590_1125_450_140741.0x0.jpg?imageMogr2/thumbnail/!750x300r/gravity/Center/crop/!750x300"
          alt
        />
      </SwiperItem>
      <SwiperItem class="swiper-slide">
        <img
          src="https://s2.showstart.com/img/2020/20200426/ed4e1359ec814df5b6ff5f17b4f47058_1125_450_237767.0x0.jpg?imageMogr2/thumbnail/!750x300r/gravity/Center/crop/!750x300"
          alt
        />
      </SwiperItem>
      <SwiperItem class="swiper-slide">
        <img
          src="https://s2.showstart.com/img/2020/20200424/97c11711f5d04b57b80c172c76df3f34_1125_450_94256.0x0.jpg?imageMogr2/thumbnail/!750x300r/gravity/Center/crop/!750x300"
          alt
        />
      </SwiperItem>
      <SwiperItem class="swiper-slide">
        <img
          src="https://s2.showstart.com/img/2020/20200413/ba55e5d09bf0407e86a51aa9b77b2a5b_1125_450_89100.0x0.jpg?imageMogr2/thumbnail/!750x300r/gravity/Center/crop/!750x300"
          alt
        />
      </SwiperItem>
    </Swiper>

  </div>
</template>

<script>
// 引入swiper组件
// import Swiper from '@/components/Swiper/Swiper.vue'
// import SwiperItem from '@/components/Swiper/SwiperItem.vue'
// =》简化
import { Swiper, SwiperItem } from '@/components/Swiper'

export default {
  name: 'Home',

  components: {
    Swiper: Swiper,
    SwiperItem: SwiperItem
  },

  methods: {
    onChange (index) {
      console.log('hello', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.my-swiper img {
  width: 100%;
}
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.app-download-bar[data-v-12c11301] {
  padding: 12px 20px;
  border-bottom: 0.5px #ebebeb solid;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  background: #fff;
}
.app-download-bar .ll[data-v-12c11301] {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.app-download-bar .logo[data-v-12c11301] {
  vertical-align: middle;
  width: 86px;
  height: 32px;
}
.app-download-bar .logo[data-v-12c11301] img {
  width: 86px;
  height: 32px;
}
.app-download-bar .text[data-v-12c11301] {
  vertical-align: middle;
  font-size: 14px;
  color: #999;
}
.app-download-bar .btn[data-v-12c11301] {
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color: #fff;
  padding: 0 15px;
  background: #eb484a;
  border-radius: 40px;
}
</style>
