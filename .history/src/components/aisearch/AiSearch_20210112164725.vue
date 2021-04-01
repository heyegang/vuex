<template>
  <div>
    <slot name='searchs'></slot>
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
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>