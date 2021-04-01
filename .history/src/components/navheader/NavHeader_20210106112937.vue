<template>
  <div class="top">
      <div>
          欢迎来到小爱后台管理系统
      </div>
      <div class="box">
          <span>{{nowDateTime}}</span>
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
    nowDateTime: '',
    }
  },
  components: {},
  methods: {
     getTime(){
        var _this = this;
        let yy = new Date().getFullYear();
        let mm = new Date().getMonth()+1;
        let dd = new Date().getDate();
        let hh = new Date().getHours();
        let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
        let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
        _this.data.nowDateTime = yy+'年 '+mm+'月'+dd+'日 '+hh+':'+mf+':'+ss;
      },
      currentTime(){
      setInterval(this.getTime,500)
    },
},
  mounted() {
      this.getTime();
      this.currentTime();

  },
  computed: {},
  watch: {
  },
}
</script>

<style lang='scss' scoped>
.top{
    display: flex;
}
.box{
    width: 200px;
}
</style>