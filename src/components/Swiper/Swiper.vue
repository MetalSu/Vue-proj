<template>
  <div class="swiper-container"  ref="swiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Swiper',

  props: {
    autoplay: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: false
    }
  },

  mounted () {
    const that = this

    /* eslint-disable no-new */
    new Swiper(this.$refs.swiper, {
      pagination: {
        el: '.swiper-pagination'
      },

      loop: this.loop,

      autoplay: this.autoplay
        ? {
          delay: this.autoplay,
          stopOnLastSlide: false,
          disableOnInteraction: true
        }
        : false,

      on: {
        slideChangeTransitionEnd: function () {
          that.$emit('change', this.realIndex)
        }
      }
    })
  }
}
</script>

<style lang="scss">
.swiper-container {
  height: 150px;
  width: 100%;
}
.swiper-pagination-bullet-active {
  background: #eb484a;
}
</style>
