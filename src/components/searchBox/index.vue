<template>
  <div data-v-75b6f434 class="search">
      <div data-v-75b6f434 class="s-left">
        <div data-v-75b6f434 class="icon">
          <div data-v-75b6f434>
            <div
              style="background-position: 0% 0%; background-size: 100% 100%; background-repeat: no-repeat; background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAMAAADX9CSSAAAAM1BMVEUAAAC8vLy8vLy9vb27u7u8vLy/v7+9vb2/v7+8vLy8vLy8vLy7u7u9vb27u7u7u7u7u7uNEF5lAAAAEHRSTlMA89tTpH4wHwy9iprlyYdxyi6iUQAAAIZJREFUKM91kVkOwyAMBbFZszSd+5+2SHEVt8D7imbCA0y4E5OKaIrBYlSxqDc7LvsPllxaK1mciMBW7++6AValHT+dXej3d6kPr2ILEuTgkiFZTfG8WJFA87yBrPiqZ7Xv8pzjvV6gkzl0TJzPjWM2ZxPjuyQTwzua+IuJayYOOMMs1/n+ALRtCdMh8+jaAAAAAElFTkSuQmCC&quot;);"
            ></div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAMAAADX9CSSAAAAM1BMVEUAAAC8vLy8vLy9vb27u7u8vLy/v7+9vb2/v7+8vLy8vLy8vLy7u7u9vb27u7u7u7u7u7uNEF5lAAAAEHRSTlMA89tTpH4wHwy9iprlyYdxyi6iUQAAAIZJREFUKM91kVkOwyAMBbFZszSd+5+2SHEVt8D7imbCA0y4E5OKaIrBYlSxqDc7LvsPllxaK1mciMBW7++6AValHT+dXej3d6kPr2ILEuTgkiFZTfG8WJFA87yBrPiqZ7Xv8pzjvV6gkzl0TJzPjWM2ZxPjuyQTwzua+IuJayYOOMMs1/n+ALRtCdMh8+jaAAAAAElFTkSuQmCC"
            />
            <!---->
          </div>
        </div>
        <div data-v-75b6f434 class="input">
          <div data-v-75b6f434 class="input-div" auto-focus="true">
            <div class="uni-input-wrapper">
              <div class="uni-input-placeholder input-placeholder" data-v-75b6f434 v-show="show">搜索演出关键字</div>
              <form action class="uni-input-form">
                <input
                  maxlength="140"
                  step
                  autocomplete="off"
                  type="search"
                  class="uni-input-input"
                  @keyup.enter="toInputSearch"
                  @focus="getValue"
                  @blur="getValue"
                  @input="searchValue($event)"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div data-v-75b6f434 class="s-right" @click="goToIndex">取消</div>
    </div>
</template>

<script>
export default {
  name: 'searchBox',

  data () {
    return {
      show: true,
      word: ''
    }
  },

  methods: {
    goToIndex () {
      this.$router.push('/home')
    },

    getValue () {
      this.show = !this.show
    },

    searchValue (keyword) {
      this.word = event.currentTarget.value
    },

    toInputSearch (keyword) {
      this.$router.push({
        path: '/searchresult',
        query: {
          keyword: this.word
        }
      })
    }
  }
}
</script>

<style>

</style>
<style type="scss">
.uni-input-form {
  height: 100%;
}
.uni-input-input{
  width: 238px;
  height: 30px;
}
.input-div {
  display: block;
  height: 100%;
  background: none;
  color: inherit;
  opacity: 1;
  -webkit-text-fill-color: currentcolor;
  font: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-align: center;
  text-indent: inherit;
  text-transform: inherit;
  text-shadow: inherit;
}
.uni-input-wrapper {
  display: flex;
  position: relative;
  justify-content: center;
}
.uni-input-placeholder {
  font-size: 16px;
  color: gray;
  position: absolute;
  top: auto !important;
  left: 0;
  color: grey;
  overflow: hidden;
  text-overflow: clip;
  white-space: pre;
  word-break: keep-all;
  pointer-events: none;
  line-height: inherit;
}
.icon {
  height: 30px;
  width: 35px;
  display: flex;
  justify-content: center;
  text-align: center;
}
.icon img {
  height: 11px;
}
.search[data-v-75b6f434] {
  border-bottom: 0.5px #ebebeb solid;
  padding: 10px 0;
  overflow: hidden;
}
.search .s-left[data-v-75b6f434] {
  float: left;
  height: 30px;
  background: #f8f8f8;
  border-radius: 15px;
  margin-left: 20px;
  width: calc(100% - 20px - 70px);
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.search .s-left .icon[data-v-75b6f434] {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  height: 30px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.search .s-left .icon uni-image[data-v-75b6f434] {
  width: 11px;
  height: 11px;
  padding: 0px 12px 0 12px;
  vertical-align: middle;
}
.search .s-left .input[data-v-75b6f434] {
  padding-right: 12px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
.search .s-left .input .input-div[data-v-75b6f434] {
  font-size: 13px;
  vertical-align: middle;
}
.search .s-right[data-v-75b6f434] {
  float: right;
  font-size: 16px;
  width: 70px;
  text-align: center;
  height: 30px;
  line-height: 30px;
}
.group[data-v-75b6f434] {
  padding: 0 20px;
}
.group .group-title[data-v-75b6f434] {
  font-size: 18px;
  padding: 20px 0;
}
.group .group-list .tag[data-v-75b6f434] {
  display: inline-block;
  background: #f8f8f8;
  border-radius: 12px;
  height: 25px;
  line-height: 25px;
  padding: 0 15px;
  font-size: 13px;
  color: #666;
  margin: 0 12px 12px 0;
}
</style>
<style type="scss">
.input-div {
  display: block;
  height: 100%;
  background: none;
  color: inherit;
  opacity: 1;
  -webkit-text-fill-color: currentcolor;
  font: inherit;
  border: none;
  line-height: inherit;
  letter-spacing: inherit;
  text-align: inherit;
  text-indent: inherit;
  text-transform: inherit;
  text-shadow: inherit;
}
.search[data-v-75b6f434] {
  border-bottom: 0.5px #ebebeb solid;
  padding: 10px 0;
  overflow: hidden;
}
.search .s-left[data-v-75b6f434] {
  float: left;
  background: #f8f8f8;
  border-radius: 15px;
  margin-left: 20px;
  width: calc(100% - 20px - 70px);
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.search .s-left .icon[data-v-75b6f434] {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  height: 30px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.search .s-left .icon uni-image[data-v-75b6f434] {
  width: 11px;
  height: 11px;
  padding: 0px 12px 0 12px;
  vertical-align: middle;
}
.search .s-left .input[data-v-75b6f434] {
  padding-right: 12px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
.search .s-left .input uni-input[data-v-75b6f434] {
  font-size: 13px;
  vertical-align: middle;
}
.search .s-right[data-v-75b6f434] {
  float: right;
  font-size: 16px;
  width: 70px;
  text-align: center;
  height: 30px;
  line-height: 30px;
}
.group[data-v-75b6f434] {
  padding: 0 20px;
}
.group .group-title[data-v-75b6f434] {
  font-size: 18px;
  padding: 20px 0;
}
.group .group-list .tag[data-v-75b6f434] {
  display: inline-block;
  background: #f8f8f8;
  border-radius: 12px;
  height: 25px;
  line-height: 25px;
  padding: 0 15px;
  font-size: 13px;
  color: #666;
  margin: 0 12px 12px 0;
}
</style>
