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
    }
  },
  components: {},
  methods: {
    ...RolelistActions(['gettree'])
  },
  mounted() {
    this.gettree()
  },
  computed: {
    ...RolelistState(['tree'])
  },
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>