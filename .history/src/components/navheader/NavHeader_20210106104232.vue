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
     
  },
  mounted() {

  },
  computed: {},
  watch: {},
}
</script>

<style lang='scss' scoped>

</style>