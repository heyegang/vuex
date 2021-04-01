<template>
  <div class="home">
    <div class="box"></div>
    <div class="hello">
      欢迎来到小爱后台管理系统
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.hello {
  width: 300px;
  font-size: 25px;
  font-weight: bold;
  margin: 0 auto;
  position: relative;
  top: 240px;
}
.box {
  height: 28px;
  width: 98%;
  margin: 0 auto;
  margin-left: 1%;
  border-bottom: 1px solid #eeeeee;
}
</style>
