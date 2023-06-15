<template>
<div class="progress">
  <a-progress
      type="circle"
      :stroke-color="{
        '0%': '#9373F2',
        '100%': '#B39DF2',
      }"
      :percent="percent"
      :width="360" 
      :strokeWidth="18"
      status="active"
    >
    <template #format="percent">
      <div class="progress_content">
        <div class="content_top">
          <span class="top_num">{{ percent }}</span>
          <span class="top_per">%</span>
        </div>
        <div class="bottom_desc">异常分数</div>
      </div>
    </template>
  </a-progress>
  <div class="center_pannel">
      <img class="status_img" :src="percent==0?image1:percent<50?image2:image3" mode="" />
      <div class="subs">
        <p class="status_c">检测状态</p>
        <p :class="[percent==0?'status_0':percent<50?'status_50':'status_100']">
          {{ percent==0?'未知':percent<50?'正常':'异常' }}
        </p>
      </div>
  </div>
  <a-slider id="test" v-model:value="percent" @change="changePercent" :disabled="false" />
</div>
</template>

<script setup>
import { ref } from 'vue'
import image1 from '@/assets/starticon.jpg'
import image2 from '@/assets/erroricon.jpg'
import image3 from '@/assets/successicon.jpg'
// const imgUrl = ref()
const percent = ref(59)
function changePercent(e){
  console.log(e,percent.value)
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.content_top .top_num{
  color: #7A62FF;
  font-size:42px;
}
.content_top .top_per{
  color: #7A62FF;
  font-size:22px;
}
.progress_content .bottom_desc{
  font-size:22px;
  font-weight:bold;
  color:#58507F;
  margin-top:10px;
}
.progress{
  padding-top: 40px;
}
.center_pannel{
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.status_0{
  font-size: 22px;
  color: #9593A1;
}
.status_50{
  font-size: 22px;
  color: #87C6E9;
}
.status_100{
  font-size: 22px;
  color: #CE7372;
}
.status_c{
  font-size: 22px;
  color: #9593A1;
}
p{
  margin: 0!important;
}
.status_img{
  height:80px;
  width:80px;
  display:block;
  margin-right: 20px;
}
.subs{
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}
</style>
