<template>
  <div class="page-raise">
    <!-- 头部 -->
    <headerBox></headerBox>
    <!-- 众筹列表 -->
    <div class="bigBox">
      <div data-v-99980ade data-v-466ac5f4 class="raise-list">
        <div data-v-99980ade class="list-item" v-for='item in RaiseParams' :key='item.id'>
          <div data-v-99980ade class="poster">
            <div data-v-99980ade>
              <div
                style="background-position: center center; background-size: cover; background-repeat: no-repeat; background-image: url(&quot;https://s2.showstart.com/img/2020/20200429/a25708b536ba454b89733303d20ce59e_600_400_69005.0x0.jpg&quot;);"
              ></div>
              <img
                :src="item.poster"
              />
              <!---->
            </div>
          </div>
          <div data-v-99980ade class="info">
            <div data-v-99980ade class="name">{{ item.title }}</div>
            <div data-v-99980ade class="type">
              <div data-v-99980ade class="ll">
                <div data-v-99980ade class="status">预售</div>
                <div data-v-99980ade class="type-view">{{ item.raiseTypeView }}</div>
              </div>
              <div data-v-99980ade class="rr">{{ item.percent }}%</div>
            </div>
            <div data-v-99980ade class="percent-bar">
              <div data-v-99980ade :style="{width: item.percent + '%' }" class="uni-view"></div>
            </div>
            <div data-v-99980ade class="data-bar">
              <div data-v-99980ade class="data-item">
                ¥{{ item.hadRaisedMoneny }}
                <div data-v-99980ade>
                  <span>已筹</span>
                </div>
              </div>
              <div data-v-99980ade class="data-item">
                {{ item.supportNum }}
                <div data-v-99980ade>
                  <span>支持</span>
                </div>
              </div>
              <div data-v-99980ade class="data-item">
                {{ item.leftDay }}
                <div data-v-99980ade>
                  <span>天剩余</span>
                </div>
              </div>
            </div>
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
import { getRaiseP } from '@/api/searchp'
export default {
  name: 'Raise',

  components: {
    headerBox: headerBox,
    indexButtom: indexButtom
  },

  data () {
    return {
      RaiseParams: [],
      prienctNum: []
    }
  },

  created () {
    getRaiseP()
      .then(res => {
        // console.log(res)
        this.RaiseParams = res.result
      })
      .catch((err) => {
        console.log(err)
        alert('网络异常，请稍后重试')
      })
  }
}
</script>

<style lang="scss">
.page-raise{
  height: 100%;
  display: flex;
  flex-direction: column;
}
.bigBox {
  flex: 1;
  overflow: auto;
}
.list-item{
  background: #fff;
}
.info {
  padding: 20px;
  .name {
    font-size: 14px;
  }
}
.status{
  display: inline-block;
  border: 0.5px solid #eb484a;
  border-radius: 3px;
  color: #eb484a;
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  padding: 0 10px;
  margin-right: 10px;
}
.type{
  display: flex;
  margin: 10px 0;
}
.type-view{
  display: inline-block;
  font-size: 12px;
  color: #999;
}
.rr{
  flex: 1;
  display: flex;
  justify-content:flex-end;
  align-items:flex-end;
  width: 100%;
  font-size: 12px;
  color: #eb484a;
}
.uni-view{
    background: #eb484a;
    border-radius: 2px;
    height: 4px;
}
.data-bar{
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.data-item{
    display: flex;
    justify-content: inherit;
    width: 33.3%;
    font-size: 16px;
    text-align: center;
    span{
      margin-left: 3px;
      font-size: 12px;
      color: rgb(187,187,187);
    }
}

</style>
