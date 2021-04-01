<template>
  <div>
      <div>
          欢迎来到小爱后台管理系统
      </div>
      <div>
          {{nowDate}}{{nowWeek}}{{nowTime}}
      </div>
      <div>

      </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
      nowDate: "",    // 当前日期
      nowTime: "",    // 当前时间
      nowWeek: ""     // 当前星期
    }
  },
  components: {},
  methods: {
      dealWithTime(data) { // 获取当前时间
      let formatDateTime;
      let Y = data.getFullYear();
      let M = data.getMonth() + 1;
      let D = data.getDate();
      let H = data.getHours();
      let Min = data.getMinutes();
      let S = data.getSeconds();
      H = H < 10 ? "0" + H : H;
      Min = Min < 10 ? "0" + Min : Min;
      S = S < 10 ? "0" + S : S;
      this.nowDate = Y + "年" + M + "月" + D + "日 ";
      this.nowTime = H + ":" + Min + ":" + S;
      // formatDateTime = Y + "年" + M + "月" + D + "日 " + " 周" +W + H + ":" + Min + ":" + S;
    },
  },
  mounted() {
      // 页面加载完后显示当前时间
    this.dealWithTime(new Date())
    // 定时刷新时间
    this.timer = setInterval(()=> {
       this.dealWithTime(new Date()) // 修改数据date
    }, 500)
  },
  computed: {},
  watch: {},
  destroyed() {
  if (this.timer) { // 注意在vue实例销毁前，清除我们的定时器
   clearInterval(this.timer);
  }
 },
}
</script>

<style lang='scss' scoped>

</style>