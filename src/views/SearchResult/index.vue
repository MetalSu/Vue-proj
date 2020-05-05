<template>
  <div class="page-search-result">
    <!-- 头部 -->
    <headerBox></headerBox>
    <!-- 搜索框 -->
    <searchBox></searchBox>
    <!-- 列表 -->
    <uni-view data-v-95df9396 class="activity">
      <uni-view data-v-46f15074 data-v-95df9396 class="activity-list">
        <uni-navigator v-for="item in resultParm" :key="item.sequence" data-v-46f15074 class="list-item">
          <uni-view data-v-46f15074 class="poster">
            <uni-image data-v-46f15074>
              <div
                style="background-position: center center; background-size: cover; background-repeat: no-repeat; background-image: url(&quot;https://s2.showstart.com/img/2020/20200218/db0b0a2e163941a4bc826a383af18c9c_600_800_262825.0x0.jpg?imageMogr2/thumbnail/!240x320r/gravity/Center/crop/!240x320&quot;);"
              ></div>
              <img :src="item.avatar" />
              <!---->
            </uni-image>
            <uni-view data-v-46f15074 class="sole-icon"></uni-view>
          </uni-view>
          <uni-view data-v-46f15074 class="info">
            <uni-view data-v-46f15074 class="name">
              <uni-text data-v-46f15074>
                <span>{{item.title}}</span>
              </uni-text>
            </uni-view>
            <uni-view data-v-46f15074 class="detail">
              <uni-view data-v-46f15074>{{item.showTime}}</uni-view>
              <uni-view data-v-46f15074>{{item.city}} {{item.siteName}}</uni-view>
            </uni-view>
            <uni-view data-v-46f15074 class="tag">
              <uni-view data-v-46f15074 class="tag-item">{{item.styles[0]}}</uni-view>
            </uni-view>
            <uni-view data-v-46f15074 class="price">
              <uni-rich-text data-v-46f15074>
                <div>
                  ¥{{item.price}}
                  <label class="price-mini-icon" style="font-size:11px;">起</label>
                </div>
              </uni-rich-text>
            </uni-view>
          </uni-view>
        </uni-navigator>
      </uni-view>
    </uni-view>
  </div>
</template>

<script>
import headerBox from '@/components/header'
import searchBox from '@/components/searchBox'
import { getResultP, getInputP } from '@/api/searchp'
import {
  uniView,
  uniImage,
  uniNavigator,
  uniText,
  uniRichText
} from '@/components/uni'

export default {
  name: 'SearchResult',

  components: {
    headerBox: headerBox,
    searchBox: searchBox,
    uniView: uniView,
    uniImage: uniImage,
    uniNavigator: uniNavigator,
    uniText: uniText,
    uniRichText: uniRichText
  },

  data () {
    return {
      style: this.$route.query.style,
      keyword: this.$route.query.keyword,
      resultParm: []
    }
  },

  created () {
    if (this.style) {
      getResultP(this.style)
        .then(res => {
          console.log(res)
          this.resultParm = res.result.activityList
        })
        .catch(err => {
          console.log(err)
          alert('网络异常，请稍后重试')
        })
    }
    if (this.keyword) {
      getInputP(this.keyword)
        .then(res => {
          console.log(res)
          this.resultParm = res.result.activityList
        })
        .catch(err => {
          console.log(err)
          alert('网络异常，请稍后重试')
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.bigBox {
  flex: 1;
  overflow: auto;
}
.title {
  margin: 20px;
  width: 335.2px;
  display: block;
}
.poster img {
  width: 107px;
  height: 143px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://s2.showstart.com/img/2020/20200218/db0b0a2e163941a4bc826a383af18c9c_600_800_262825.0x0.jpg?imageMogr2/thumbnail/!240x320r/gravity/Center/crop/!240x320");
}
.activity-list .list-item[data-v-46f15074] {
  padding: 0 20px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  margin-bottom: 30px;
}
.activity-list .list-item .poster[data-v-46f15074] {
  width: 107px;
  height: 143px;
  margin-right: 18px;
  position: relative;
  background-color: #f8f8f8;
  overflow: hidden;
  border-radius: 6px;
}
.activity-list .list-item .poster uni-image[data-v-46f15074] {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  vertical-align: middle;
}
.activity-list .list-item .poster .sole-icon[data-v-46f15074] {
  position: absolute;
  right: 0;
  top: 0;
  width: 42px;
  height: 42px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABWCAMAAABmfUH4AAABCFBMVEUAAADsSErrSErrSErrSEvtSkvuSUzsSUrsSUztSkztSkzsSUzuSUztSkztSkzsSUvsSErsSEvtSUvtSEvvSk7xTk7sSUvxUFD/XFzrSErsSEvsSEvsSUvtSkvsSkzsSErvSU7vSkrrSEr////+/f3rTU/sUlTrS03++vr++Pj72tvwe33weHntWVv98/PzkpP85OT73+DuZmj0nZ7sVFb5zM34xsb+9/f4wsPyjI3xhofxgoT5z8/zlZbwdnfvcXPtXF7sV1j61tb4v7/2rq/1qKn0n6D0mpvvbG7uamzuY2XtX2H97+/60tP3u7z2s7Tyh4nxf4H86uv85ub5ycn1pKX5zMz3uLkE02cgAAAAInRSTlMA+vj28z9K8lBGOUM8TVLt5NhoVCYbiBIIzsKxnll5eDEw4c7VwQAAAxxJREFUWMPV1Vl3mlAUhuHdeZ7nuf32QTAIKFqHxHmMGk3M0P7/f9IDdkEs7YoHPBd9L0S4eBZrA2vTHSj1mrbpvqL6RYv6/P9RzU861Gt3taj3dKg3bulQb97fSn24jWpG/5582069eaXZFV6svtyROuUTRD3dhZoDCtzGJfVVZrUrSsslX4wG36NLzzKr8+N+jZmts2YlVt9kn0AlP3Cw0bvs6tDygS4u9/5tarXQmedm9kSMADvvAXA8RfVWQjUtDjszYFt54cEpihl+9yGlahZOWo1VsTaVZrFbF+WiOAAilVTVuIGwA9OBWefAjPuYVjUH7K1NVPZYTiCbOi/Ln1yTx5Ep9ut/qK9VVY8nsEuiBRy6EpXmAcy06o3o7eQaH7WBUPUDExhzFRt9VlUPBuMcsFZFaJa5asqDkVNYsbEauQ6CeiU+dWLzx14WtVI7nYamuJBzjUy2LqnmJ1W14Lp2YJ7ICRytTTR4UshLNV7cquq8JMqBCefQlWZYG9hUb2+nPohUo87ckJA1m61N6R8bodqRx2hxq6mYWMVDLBYIy0lnJb6HarVWiRa3sjotiSV3ENY49Uzsr1Uexiv2q7JqHPM51vlNLp6E6uZcn7xUVltiCllnVAEKfS41vIT6VFnt1xHkidqoJ+2BlXc5ob5SVM3e+tv0l1ZtaBtoiJ+lxL0+U1Vl++7IAbrDI843m2fyPKm+UVan58L66QPwW3XrHL9Vm/eMeHHTdt27jqjZcV40yx0DXVE3Q3VsVvkCcZRCRaXct9jqL4R1OskBbbOxYYKU1DijPS7xcC4ne97qAjYSqKpa9oMpHO2Zjpi0FmKEP6I0at9dYeW6PjxRAXp+BjRWc1Wu8Zm0mgv8LUqlorEM9lZPlLOiyafVYTsrmlTbu0Hp9mXV5lVWNKke8H5WNKn6rXlmNFaviHSopEMlHSrpUCmtek0Nza6SDpXS9+ifKulQSYdKOlTSoZIOlXSopEOl7N1NqKRDJR0q6VBJh0o6VNKhkg6VdtfjSCUdKulQSYdKOlTSodKueyFV0qESaVBJQy9IR78AO1OY4/QVOUgAAAAASUVORK5CYII=)
    50% no-repeat;
  background-size: 100%;
}
.activity-list .list-item .info[data-v-46f15074] {
  width: calc(100% - 125px);
}
.activity-list .list-item .info .name[data-v-46f15074] {
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 40px;
  line-height: 20px;
}
.activity-list .list-item .info .detail[data-v-46f15074] {
  font-size: 11px;
  color: #aaa;
  margin: 7px 0;
}
.activity-list .list-item .info .detail uni-view[data-v-46f15074] {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.activity-list .list-item .info .tag[data-v-46f15074] {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.activity-list .list-item .info .tag .tag-item[data-v-46f15074] {
  background: #f8f8f8;
  border-radius: 50px;
  font-size: 10px;
  color: #bbb;
  height: 20px;
  line-height: 20px;
  padding: 0 10px;
  margin: 5px 5px 0 0;
}
.activity-list .list-item .info .price[data-v-46f15074] {
  font-size: 16px;
  margin-top: 7px;
}
</style>
