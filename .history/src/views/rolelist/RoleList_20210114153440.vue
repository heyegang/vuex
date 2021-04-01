<template>
  <div></div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
let userModule = createNamespacedHelpers('rolelist')
let {mapState: RolelistState,mapActions: RolelistActions} = userModule
export default {
  name: '',
  props:{},
  data () {
    return {
      type:'tree'
    }
  },
  components: {},
  methods: {
    ...RolelistActions(['gettree','getroles'])
  },
  mounted() {
    this.gettree()
    this.getroles()
  },
  computed: {
    ...RolelistState(['tree','roles'])
  },
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>