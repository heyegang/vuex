<template>
  <div class="top">
      <div>
          欢迎来到小爱后台管理系统
      </div>
      <div class="box">
          <!-- 当前时间：
          {{nowTime}} -->
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
    //   nowTime:"",
    }
  },
  components: {},
  methods: {
      
     getTime(){
        let tiem = new Date()
		setInterval(()=>{
			//new Date() new一个data对象，当前日期和时间
            //toLocaleString() 方法可根据本地时间把 Date 对象转换为字符串，并返回结果。
            this.nowtime = new Date().toLocaleString();
        },1000)
        console.log(this.tiem)
    }
    
},
  mounted() {
      this.getTime();
      

  },
  computed: {},
  watch: {},
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