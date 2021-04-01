<template>
  <div class="box">
    <slot name='searchs'></slot>
    <slot #append @click="searchs"></slot>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
    data:{
      type:Array,
      required:true,
    }
  },
  data () {
    return {
    }
  },
  components: {},
  methods: {
    searchs(){
      this.getquery()
    }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.box{
  position: relative;
  top: 30px;
  margin-bottom: 50px;
}
</style>