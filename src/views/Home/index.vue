<template>
  <div class="page-home">
    <div class="bigBox">
      <!-- 头部 -->
      <headerBox></headerBox>
      <!-- 搜索 -->
      <uni-view data-v-95df9396 class="head">
        <uni-navigator data-v-95df9396 class="h-left">
          <uni-image data-v-95df9396>
            <div
              style="background-position: 0% 0%; background-size: 100% 100%; background-repeat: no-repeat; background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAMAAAAB8C7XAAAAY1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmaHTeAAAAIHRSTlMAHE8p89m8tgP04r+SdWwW593UzMi4npx+cFpLRyQREC06+UQAAADPSURBVCjPbdHpEoMgDATgTQGxnr3v1rz/U3YGFgeV7xebkBEQJIN31jo/CHJy19k9a+2sZuwO9NSVJ/frRpiR/bZhBcBNC26ApHX1GcdPlZJg4OqB4ME44Mr9IM5c4eLiDXrH7MAzjaCR50oNAUnMexznKy2ue4SPi0sd6/UlZo9eo64O9Y6xh1E6v4x5nVMyQKsFLb9Wft62PACYbcMg6Nf1HuSXdY/kd8rrpx9m0uisEWTMIdUPBgtfzjRfrIgL/0ewMVWq1YSCuosvHP0BxcUz6wdNeDcAAAAASUVORK5CYII=&quot;);"
            ></div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAMAAAAB8C7XAAAAY1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmaHTeAAAAIHRSTlMAHE8p89m8tgP04r+SdWwW593UzMi4npx+cFpLRyQREC06+UQAAADPSURBVCjPbdHpEoMgDATgTQGxnr3v1rz/U3YGFgeV7xebkBEQJIN31jo/CHJy19k9a+2sZuwO9NSVJ/frRpiR/bZhBcBNC26ApHX1GcdPlZJg4OqB4ME44Mr9IM5c4eLiDXrH7MAzjaCR50oNAUnMexznKy2ue4SPi0sd6/UlZo9eo64O9Y6xh1E6v4x5nVMyQKsFLb9Wft62PACYbcMg6Nf1HuSXdY/kd8rrpx9m0uisEWTMIdUPBgtfzjRfrIgL/0ewMVWq1YSCuosvHP0BxcUz6wdNeDcAAAAASUVORK5CYII="
            />
            <!---->
          </uni-image>青岛
        </uni-navigator>
        <uni-view data-v-95df9396 class="h-content">
          <uni-navigator data-v-95df9396 class="h-center">
            <uni-image data-v-95df9396 >
              <div
                style="background-position: 0% 0%; background-size: 100% 100%; background-repeat: no-repeat; background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAMAAADX9CSSAAAAM1BMVEUAAAC8vLy8vLy9vb27u7u8vLy/v7+9vb2/v7+8vLy8vLy8vLy7u7u9vb27u7u7u7u7u7uNEF5lAAAAEHRSTlMA89tTpH4wHwy9iprlyYdxyi6iUQAAAIZJREFUKM91kVkOwyAMBbFZszSd+5+2SHEVt8D7imbCA0y4E5OKaIrBYlSxqDc7LvsPllxaK1mciMBW7++6AValHT+dXej3d6kPr2ILEuTgkiFZTfG8WJFA87yBrPiqZ7Xv8pzjvV6gkzl0TJzPjWM2ZxPjuyQTwzua+IuJayYOOMMs1/n+ALRtCdMh8+jaAAAAAElFTkSuQmCC&quot;);"
              ></div>
              <img @click="goSearch"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAMAAADX9CSSAAAAM1BMVEUAAAC8vLy8vLy9vb27u7u8vLy/v7+9vb2/v7+8vLy8vLy8vLy7u7u9vb27u7u7u7u7u7uNEF5lAAAAEHRSTlMA89tTpH4wHwy9iprlyYdxyi6iUQAAAIZJREFUKM91kVkOwyAMBbFZszSd+5+2SHEVt8D7imbCA0y4E5OKaIrBYlSxqDc7LvsPllxaK1mciMBW7++6AValHT+dXej3d6kPr2ILEuTgkiFZTfG8WJFA87yBrPiqZ7Xv8pzjvV6gkzl0TJzPjWM2ZxPjuyQTwzua+IuJayYOOMMs1/n+ALRtCdMh8+jaAAAAAElFTkSuQmCC"
              />
              <!---->搜索演出关键字
            </uni-image>
          </uni-navigator>
          <uni-view data-v-95df9396 class="h-right">
            <uni-image data-v-95df9396>
              <div
                style="background-position: 0% 0%; background-size: 100% 100%; background-repeat: no-repeat; background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAMAAAB61OwbAAAAV1BMVEUgICAgICAkJCQgICAAAAAgICD////k5OSkpKR+fn7y8vJhYWGlpaVycnJHR0e+vr6ysrKsrKwsLCzr6+u4uLhlZWU6OjoyMjLt7e3Dw8NaWlpXV1dCQkI8633zAAAABXRSTlPmphztAPMTpaIAAACcSURBVCjPvdPJEsIgEEXRhqQ7CYoImZz+/ztliGUp2LiwvKtenCrYPGilAPwQCNmCbJCpkSCQTQDwAAArfQv0kLr5y6FvGa4voKOU9pdF3476N3CIuUDnIkB8XGpceaBpKoFjyEY6kS4AFTpFsI5q4Z5AnOnMA7RkeOA6ysA+pjd6yUHKbgD7J2D6LzCUZargZ3+oCKgOpzq96njvXOQVyaXF5moAAAAASUVORK5CYII=&quot;);"
              ></div>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAMAAAB61OwbAAAAV1BMVEUgICAgICAkJCQgICAAAAAgICD////k5OSkpKR+fn7y8vJhYWGlpaVycnJHR0e+vr6ysrKsrKwsLCzr6+u4uLhlZWU6OjoyMjLt7e3Dw8NaWlpXV1dCQkI8633zAAAABXRSTlPmphztAPMTpaIAAACcSURBVCjPvdPJEsIgEEXRhqQ7CYoImZz+/ztliGUp2LiwvKtenCrYPGilAPwQCNmCbJCpkSCQTQDwAAArfQv0kLr5y6FvGa4voKOU9pdF3476N3CIuUDnIkB8XGpceaBpKoFjyEY6kS4AFTpFsI5q4Z5AnOnMA7RkeOA6ysA+pjd6yUHKbgD7J2D6LzCUZargZ3+oCKgOpzq96njvXOQVyaXF5moAAAAASUVORK5CYII="
              />
              <!---->
            </uni-image>
          </uni-view>
        </uni-view>
      </uni-view>
      <!-- 轮播 -->
      <Swiper class="my-swiper" :autoplay="3000" ref="my-swiper">
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
            src="https://s2.showstart.com/img/2020/20200428/6c4d60ebee084131888d20bee8587e99_1125_450_203327.0x0.jpg?imageMogr2/thumbnail/!750x300r/gravity/Center/crop/!750x300"
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
      <!-- 演出 -->
      <uni-view data-v-95df9396 class="activity">
        <uni-view data-v-95df9396 class="title">热门演出</uni-view>
        <uni-view data-v-46f15074 data-v-95df9396 class="activity-list">
          <uni-navigator
            v-for="item in showList"
            :key="item.groupId"
            data-v-46f15074
            class="list-item"
          >
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

          <!---->
        </uni-view>
      </uni-view>
      <!-- 其他 -->
      <uni-view data-v-9bc0bf8c data-v-95df9396>
        <uni-view data-v-9bc0bf8c class="footer">
          <uni-view data-v-9bc0bf8c class="link">
            <uni-view data-v-9bc0bf8c class="link-item weibo">
              <uni-view data-v-9bc0bf8c>
                <uni-image data-v-9bc0bf8c>
                  <div
                    style="background-position: 0% 0%; background-size: 100% 100%; background-repeat: no-repeat; background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAbCAMAAAAqGX2oAAAAhFBMVEUAAABmZmZmZmZpaWlnZ2dqampnZ2dpaWlmZmZoaGh0dHRmZmZmZmZpaWloaGhvb29mZmZmZmZnZ2dnZ2dnZ2dnZ2dnZ2dqamptbW1nZ2dmZmZnZ2dnZ2doaGhnZ2doaGhoaGhmZmZmZmZnZ2dnZ2dmZmZnZ2dmZmZoaGh3d3dmZmZmZmYnC3u4AAAAK3RSTlMA9+Yf4RbbMtA4BfHsRBoM1sG7kId5aSYSrJ+MW1JLPjzItqSagEduYwdyOvn5yQAAATZJREFUKM99ktl2gkAQRGeGXRCRRZHd3eT+///lDGCCAb0vzeluCqpmxDJttnNW4gMmYH5/WFknsQLX+CSy2inMcNq5nZVyrxPZ0OQ0EXXpicftrBXCkazH8eYCQepYjcTpGwqOhkg4D3PLhXSjn7bUYXXN6vVVoawWu58bJsobVl0CNMrJTxS5DHQzj4iMvwDkNrmYuCL0A9G02s8W2xIjXlnpT1mQi+429FKCvfhHCJvfd6CZpfTAfxr8iijEDA84DroV5kbM2ZfB+GcHMrGIFXHR1cYTy3QoXSTvztRA6uLjvFmosYfwd28WYlJd7tjLN+uONPocTA5L96nkKe1JtuEshiOkYqTxkcmLFecM/mPiJwbcpPIMy9p3u8IGDq/mu5Nkgizm1vO6jG1fShUdsvX0cH4ATc4dN2lNQooAAAAASUVORK5CYII=&quot;);"
                  ></div>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAbCAMAAAAqGX2oAAAAhFBMVEUAAABmZmZmZmZpaWlnZ2dqampnZ2dpaWlmZmZoaGh0dHRmZmZmZmZpaWloaGhvb29mZmZmZmZnZ2dnZ2dnZ2dnZ2dnZ2dqamptbW1nZ2dmZmZnZ2dnZ2doaGhnZ2doaGhoaGhmZmZmZmZnZ2dnZ2dmZmZnZ2dmZmZoaGh3d3dmZmZmZmYnC3u4AAAAK3RSTlMA9+Yf4RbbMtA4BfHsRBoM1sG7kId5aSYSrJ+MW1JLPjzItqSagEduYwdyOvn5yQAAATZJREFUKM99ktl2gkAQRGeGXRCRRZHd3eT+///lDGCCAb0vzeluCqpmxDJttnNW4gMmYH5/WFknsQLX+CSy2inMcNq5nZVyrxPZ0OQ0EXXpicftrBXCkazH8eYCQepYjcTpGwqOhkg4D3PLhXSjn7bUYXXN6vVVoawWu58bJsobVl0CNMrJTxS5DHQzj4iMvwDkNrmYuCL0A9G02s8W2xIjXlnpT1mQi+429FKCvfhHCJvfd6CZpfTAfxr8iijEDA84DroV5kbM2ZfB+GcHMrGIFXHR1cYTy3QoXSTvztRA6uLjvFmosYfwd28WYlJd7tjLN+uONPocTA5L96nkKe1JtuEshiOkYqTxkcmLFecM/mPiJwbcpPIMy9p3u8IGDq/mu5Nkgizm1vO6jG1fShUdsvX0cH4ATc4dN2lNQooAAAAASUVORK5CYII="
                  />
                  <!---->
                </uni-image>秀动微博
              </uni-view>
            </uni-view>
            <uni-view data-v-9bc0bf8c class="link-item about">
              <uni-view data-v-9bc0bf8c>
                <uni-image data-v-9bc0bf8c>
                  <div
                    style="background-position: 0% 0%; background-size: 100% 100%; background-repeat: no-repeat; background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAdCAMAAACHZFx5AAAAilBMVEUAAABmZmZmZmZ9fX1ra2tmZmZ2dnZmZmZnZ2dmZmZmZmZmZmZnZ2dnZ2dnZ2dmZmZmZmZnZ2dnZ2dnZ2dnZ2doaGhnZ2doaGhpaWlqampmZmZnZ2dnZ2dnZ2dnZ2dmZmZmZmZoaGhoaGhoaGhvb29sbGxnZ2dmZmZmZmZmZmZmZmZnZ2dnZ2dmZmZgzAZtAAAALXRSTlMA+fUFDq4J4srw7eiiXz7cj4d8ZVRLODQoGtfPp56VeG5bIx8XE/G/tXNq1S+Woqz+AAABDUlEQVQoz4VQ2ZaCMBRrC2VH9kVQURZHncn//97AKXA7zoN5aZrc25OGfcQhsMW9TYZ3/QIFkf3VY4i0tsxDANx0vQIvFcvgjZoRIN7oFxLSDRf9HgI2GT+I6OLhuPMnJBkOMm0oJyOk9QE20+DCXNkEbpJucZgUMSDjgZb+x1FuvMC90ht5bA99I2WEo8BVsRNsi2nIgGI5r3tpVPtZLahNQqgMqVqnFkMfz4UkiAqSzdQHHGOhUzOzwzrduYDfGetQIgA5LsEdoAkNLfqZw5uXOvjhW5BaQtSspcoJAU5MUJeEGh5rIF9FNUyWsQQxLHPsy/wCm+UC+A9+m1O8YunYLufLnQvXjxyZ9uwXUtUbD942rVIAAAAASUVORK5CYII=&quot;);"
                  ></div>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAdCAMAAACHZFx5AAAAilBMVEUAAABmZmZmZmZ9fX1ra2tmZmZ2dnZmZmZnZ2dmZmZmZmZmZmZnZ2dnZ2dnZ2dmZmZmZmZnZ2dnZ2dnZ2dnZ2doaGhnZ2doaGhpaWlqampmZmZnZ2dnZ2dnZ2dnZ2dmZmZmZmZoaGhoaGhoaGhvb29sbGxnZ2dmZmZmZmZmZmZmZmZnZ2dnZ2dmZmZgzAZtAAAALXRSTlMA+fUFDq4J4srw7eiiXz7cj4d8ZVRLODQoGtfPp56VeG5bIx8XE/G/tXNq1S+Woqz+AAABDUlEQVQoz4VQ2ZaCMBRrC2VH9kVQURZHncn//97AKXA7zoN5aZrc25OGfcQhsMW9TYZ3/QIFkf3VY4i0tsxDANx0vQIvFcvgjZoRIN7oFxLSDRf9HgI2GT+I6OLhuPMnJBkOMm0oJyOk9QE20+DCXNkEbpJucZgUMSDjgZb+x1FuvMC90ht5bA99I2WEo8BVsRNsi2nIgGI5r3tpVPtZLahNQqgMqVqnFkMfz4UkiAqSzdQHHGOhUzOzwzrduYDfGetQIgA5LsEdoAkNLfqZw5uXOvjhW5BaQtSspcoJAU5MUJeEGh5rIF9FNUyWsQQxLHPsy/wCm+UC+A9+m1O8YunYLufLnQvXjxyZ9uwXUtUbD942rVIAAAAASUVORK5CYII="
                  />
                  <!---->
                </uni-image>关于我们
              </uni-view>
            </uni-view>
            <uni-view data-v-9bc0bf8c class="link-item download">
              <uni-view data-v-9bc0bf8c>
                <uni-image data-v-9bc0bf8c>
                  <div
                    style="background-position: 0% 0%; background-size: 100% 100%; background-repeat: no-repeat; background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAbCAMAAABcI88jAAAAUVBMVEUAAABnZ2dmZmZxcXFmZmZsbGxoaGhra2tmZmZnZ2dmZmZnZ2doaGhnZ2dmZmZnZ2dnZ2dnZ2dnZ2dmZmZnZ2dmZmZoaGhnZ2dnZ2dtbW1mZmYEyUUkAAAAGnRSTlMAmuIJwA4wEu/ds4E3JNXMxqWSeGpkR0PzHD6g3B8AAACoSURBVCjPvdJLDsIwDARQ1/k0TdJ/aWHuf1BMxQZhV6yY7PIWHkumz7S3li5SUK64QfNP7jP3GrtxqqIJSWUacI80wz9I5ZAxE6NasyOYALsa8DvH/c171JixnryCFRbCJrwBjcYuA508ZKewuMcr3hnNwyg6BnOxdsDQksnnMSmsRywhWBqQyOOw+ICngsniCYVcB1/dt7nq0cl/ZBjheDZYWMVFOj8BCZcRcxVcR8sAAAAASUVORK5CYII=&quot;);"
                  ></div>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAbCAMAAABcI88jAAAAUVBMVEUAAABnZ2dmZmZxcXFmZmZsbGxoaGhra2tmZmZnZ2dmZmZnZ2doaGhnZ2dmZmZnZ2dnZ2dnZ2dnZ2dmZmZnZ2dmZmZoaGhnZ2dnZ2dtbW1mZmYEyUUkAAAAGnRSTlMAmuIJwA4wEu/ds4E3JNXMxqWSeGpkR0PzHD6g3B8AAACoSURBVCjPvdJLDsIwDARQ1/k0TdJ/aWHuf1BMxQZhV6yY7PIWHkumz7S3li5SUK64QfNP7jP3GrtxqqIJSWUacI80wz9I5ZAxE6NasyOYALsa8DvH/c171JixnryCFRbCJrwBjcYuA508ZKewuMcr3hnNwyg6BnOxdsDQksnnMSmsRywhWBqQyOOw+ICngsniCYVcB1/dt7nq0cl/ZBjheDZYWMVFOj8BCZcRcxVcR8sAAAAASUVORK5CYII="
                  />
                  <!---->
                </uni-image>下载秀动
              </uni-view>
            </uni-view>
          </uni-view>
          <uni-view data-v-9bc0bf8c class="copyright">
            <uni-view data-v-9bc0bf8c>客服电话：400-188-6980</uni-view>
            <uni-view data-v-9bc0bf8c>©2020成都太合乐动科技有限公司 版权所有 蜀ICP备14016442号-4</uni-view>
          </uni-view>
        </uni-view>
      </uni-view>
    </div>
    <!-- 底部 -->
    <indexButtom></indexButtom>
  </div>
</template>

<script>
// 引入swiper组件
// import Swiper from '@/components/Swiper/Swiper.vue'
// import SwiperItem from '@/components/Swiper/SwiperItem.vue'
// =》简化
import { Swiper, SwiperItem } from '@/components/Swiper'
import { getShowList } from '@/api/showlist'
import {
  uniView,
  uniImage,
  uniNavigator,
  uniText,
  uniRichText
} from '@/components/uni'
import indexButtom from './components/indexButtom'
import headerBox from '@/components/header'
export default {
  name: 'Home',

  components: {
    Swiper: Swiper,
    SwiperItem: SwiperItem,
    uniView: uniView,
    uniImage: uniImage,
    uniNavigator: uniNavigator,
    uniText: uniText,
    uniRichText: uniRichText,
    indexButtom: indexButtom,
    headerBox: headerBox
  },

  data () {
    return {
      // 需要数据时，考虑以下几点
      // 1.数据用在哪里 data/props/computed/stats/getter
      // 2.数据格式 string/pbject/number
      showList: []
    }
  },

  methods: {
    onChange (index) {
      console.log('hello', index)
    },
    goSearch () {
      this.$router.push('/search')
    }
  },

  created () {
    getShowList()
      .then(res => {
        this.showList = res.result.activityList
      })
      .catch(() => {
        alert('网络异常，请稍后重试')
      })
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
<style lang="scss" scoped>
.link img {
  height: 16px;
  width: 13px;
}
.link div {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.footer[data-v-9bc0bf8c] {
  margin-top: 20px;
}
.footer .link[data-v-9bc0bf8c] {
  text-align: center;
}
.footer .link .link-item[data-v-9bc0bf8c] {
  display: inline-block;
  vertical-align: middle;
  width: 33.3%;
  font-size: 12px;
  color: #666;
}
.footer .link .link-item uni-image[data-v-9bc0bf8c] {
  vertical-align: -2px;
  margin-right: 8px;
}
.footer .link .link-item.weibo uni-image[data-v-9bc0bf8c] {
  width: 16px;
  height: 13px;
}
.footer .link .link-item.about > uni-view[data-v-9bc0bf8c] {
  height: 28px;
  line-height: 28px;
  border-left: 0.5px #ebebeb solid;
  border-right: 0.5px #ebebeb solid;
}
.footer .link .link-item.about uni-image[data-v-9bc0bf8c] {
  width: 12px;
  height: 14px;
}
.footer .link .link-item.download uni-image[data-v-9bc0bf8c] {
  width: 15px;
  height: 13px;
}
.footer .copyright[data-v-9bc0bf8c] {
  padding: 20px;
  font-size: 12px;
  color: #bbb;
}
</style>
<style type="scss">
.head[data-v-95df9396] {
  padding: 10px 0;
  height: 30px;
}
.h-left[data-v-95df9396] {
  font-size: 12px;
  float: left;
  padding: 0 15px;
  height: 30px;
  width: 50px;
  line-height: 30px;
  display: flex;
  justify-content: center;
  text-align: center;
}
.h-left[data-v-95df9396] img{
  height: 15px;
  margin-top: 7px;
  margin-right: 4px;
}
.h-left uni-image[data-v-95df9396] {
  width: 12px;
  height: 15px;
  vertical-align: middle;
}
.h-content[data-v-95df9396] img{
  height: 11px;
  width: 11px;
}
.h-content[data-v-95df9396] {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.h-center[data-v-95df9396] {
  background: #f8f8f8;
  border-radius: 15px;
  font-size: 13px;
  color: #ccc;
  height: 30px;
  line-height: 30px;
  width: calc(100% - 20px);
  width: calc(100% - 56px);
}
.h-center[data-v-95df9396] div{
  color: gray;
}
.h-center[data-v-95df9396] img{
    margin: 0 10px;
}
.h-center uni-image[data-v-95df9396] {
  width: 11px;
  height: 11px;
  margin: 0 9px 0 12px;
}
.h-right[data-v-95df9396] {
  height: 30px;
  line-height: 30px;
  padding: 0px 20px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.h-right uni-image[data-v-95df9396] {
  width: 16px;
  height: 15px;
}
.banner uni-swiper[data-v-95df9396] {
  height: 150px;
}
.banner .swiper-item[data-v-95df9396] {
  display: block;
  text-align: center;
}
.banner .swiper-item uni-image[data-v-95df9396] {
  width: 100%;
  height: 100%;
}
.styles[data-v-95df9396] {
  margin: 30px 0 0 20px;
}
.styles uni-scroll-view[data-v-95df9396] {
  white-space: nowrap;
}
.styles uni-scroll-view uni-navigator[data-v-95df9396] {
  display: inline-block;
  vertical-align: middle;
  margin-right: 6px;
  width: 107px;
  height: 60px;
  border-radius: 4px;
  overflow: hidden;
}
.styles uni-scroll-view uni-navigator uni-image[data-v-95df9396] {
  width: 100%;
  height: 100%;
}
.activity .title[data-v-95df9396] {
  font-size: 18px;
  margin: 30px 20px;
}
</style>
