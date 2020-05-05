<template>
  <div class="page-rim">
    <!-- 头部 -->
    <headerBox></headerBox>
    <div class="bigBox">
      <!-- 精选专题 -->
      <div data-v-2b04fc6e class="goodsTitle">精选专题</div>
      <div data-v-2b04fc6e class="goodsLp" v-for='item in thems' :key='item.id'>
        <div data-v-2b04fc6e class="lpMain">
          <div data-v-2b04fc6e class="imgMain">
            <div data-v-2b04fc6e style="height: 224px;">
              <div
                style="background-size: 100% 100%; background-repeat: no-repeat; background-image: url(&quot;https://s2.showstart.com/img/2020/20200426/6b4808206c6447f596e0aaabcb272121_1125_780_68564.0x0.jpg?imageMogr2/thumbnail/!600x400r/gravity/Center/crop/!600x400&quot;);"
              ></div>
              <img
                :src="item.poster"
              />
            </div>
            <div data-v-2b04fc6e class="cover"></div>
          </div>
          <div data-v-2b04fc6e class="Ltitle">{{ item.title }}</div>
          <div data-v-2b04fc6e class="Stitle">{{ item.subTitle }}</div>
        </div>
      </div>
      <!-- 热门周边 -->
      <div data-v-2b04fc6e class="goodsTitle">热门周边</div>
      <div data-v-8fbf34c8 class="goods-list">
        <div data-v-8fbf34c8 class="goods-item" v-for='items in hotParams' :key='items.goodsId'>
          <div data-v-8fbf34c8 class="poster">
            <div data-v-8fbf34c8>
              <div
                style="background-position: center center; background-size: cover; background-repeat: no-repeat; background-image: url(&quot;https://s2.showstart.com/img/2020/20200326/41423d2b617c4e0c9018d1031ce4d5e8_1200_1200_403427.0x0.jpg?imageMogr2/thumbnail/!600x600r/gravity/Center/crop/!600x600&quot;);"
              ></div>
              <img
                :src="items.goodsPoster"
              />
              <!---->
            </div>
            <!---->
          </div>
          <div data-v-8fbf34c8 class="name">{{ items.goodsName }}</div>
          <div data-v-8fbf34c8 class="price theme-color">
            <span>{{ items.price }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <indexButtom></indexButtom>
  </div>
</template>

<script>
import indexButtom from './components/indexButtom'
import headerBox from '@/components/header'
import { getHotP } from '@/api/searchp'
export default {
  name: 'Rim',

  components: {
    headerBox: headerBox,
    indexButtom: indexButtom
  },

  data () {
    return {
      hotParams: [],
      thems: []
    }
  },

  created () {
    getHotP()
      .then(res => {
        // console.log(res)
        this.hotParams = res.result.hotGoods
        this.thems = res.result.themes
      })
      .catch((err) => {
        console.log(err)
        alert('网络异常，请稍后重试')
      })
  }
}
</script>

<style lang="scss">
.goodsTitle {
  font-family: "微软雅黑";
  font-size: 18px;
  font-weight: 900;
  display: block;
  padding: 20px 0 20px 20px;
}
.goodsLp {
  display: flex;
  justify-content: center;
  text-emphasis: center;
}
.lpMain {
  width: 335px;
}
.Ltitle {
  font-family: "微软雅黑";
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 5px;
}
.Stitle {
  font-family: "微软雅黑";
  font-size: 12px;
}
.imgMain {
  border-radius: 8px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.imgMain img {
  height: 224px;
  width: 335px;
}
</style>
<style lang="scss">
.name{
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 10px 0 5px 0;
}
.page-rim{
  display: flex;
  flex-direction: column;
  height: 100%;
}
.bigBox{
  flex: 1;
  overflow: auto;
}
.goods-list{
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-content: flex-start;
    align-content: flex-start;
    padding: 0 20px;
}
.goods-item{
  width: 47%;
  margin-bottom: 20px;
}
.poster{
  width: 100%;
  img{
    width: 100%;
  }
}
.price{
  height: 20px;
  span{
    color:#eb484a;
    font-size: 16px;
  }
}
</style>
