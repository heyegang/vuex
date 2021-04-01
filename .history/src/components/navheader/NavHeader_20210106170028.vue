<template>
  <div class="top">
      <div style="margin-left:30px;">
          欢迎来到小爱后台管理系统
      </div>
      <div class="box">
          {{times}}
      </div>
      <div class="weather">
          <div class="weather"><iframe scrolling="no" src="https://tianqiapi.com/api.php?style=yd&skin=pitaya" frameborder="0" width="100%" height="30" allowtransparency="true"></iframe></div>
    <!--获取天气-->
      </div>
      <div class="hello">
          亲爱的： {{}}
      </div>
      <div class="esc">
          退出
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
      times:'',//格式化之后的当前时间
      currentTime: new Date() //当前时间
    }
  },
  components: {},
  methods: {
    getTimes(){
      setInterval(this.getTimesInterval, 1000);
    },
    getTimesInterval:function() {
      let _this = this;
      let year = new Date().getFullYear(); //获取当前时间的年份
      let month = new Date().getMonth() + 1; //获取当前时间的月份
      let day = new Date().getDate(); //获取当前时间的天数
      let hours = new Date().getHours(); //获取当前时间的小时
      let minutes = new Date().getMinutes(); //获取当前时间的分数
      let seconds = new Date().getSeconds(); //获取当前时间的秒数
      let hello = "";
      //当小于 10 的是时候，在前面加 0
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      //一天中的时间
      if (hours > 6 && hours <13){
          hello = "上午";
      } 
      if (hours > 13 && hours <18){
          hello = "下午";
      } 
      if (hours > 18 && hours <24){
          hello = "晚上";
      }
      if (hours >0 && hours < 6){
          hello = "凌晨";
      } 
      //拼接格式化当前时间
      _this.times = year + "/" + month + "/" + day + " " +hello+ hours + ":" + minutes + ":" + seconds;
    },
  },
  mounted() {
    this.getTimes()
  },
  computed: {},
  watch: {},
}
</script>

<style lang='scss' scoped>
.top{
    display: flex;
    position: relative;
    line-height: 60px;
}
.box{
    width: 180px;
    position: absolute;
    right: 380px;
    color: black;
}
.weather{
    width: 140px;
    position: absolute;
    right: 120px;
    top: 5px;
}
.hello{
    width: 100px;
    position: absolute;
    right: 120px;
}
.esc{
    width: 60px;
    position: absolute;
    right: 30px;
    color: #409EFF;
}
</style>