<template>
  <div>
    <el-menu
      :default-active="defaultActive"
      :router="router"
      :unique-opened="uniqueOpened"
      :active-text-color="activeTextColor"
      :background-color="backgroundColor"
    >
      <template v-for="item in menus">
        <el-submenu
          v-if="item[children] && item[children].length"
          :index="String(item[index])"
          :key="item.index"
        >
          <template slot="title">
            <i :class="item[icon]"></i>
            <span>{{ item[name] }}</span>
          </template>
          <el-menu-item
            :index="String(child[index])"
            v-for="child in item[children]"
            :key="String(child[index])"
          >
            <i :class="child[icon]"></i>
            <span slot="title">{{ child[name] }}</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="String(item[index])" :key="item.index">
          <i class="el-icon-document"></i>
          <span slot="title">{{ item[name] }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
export default {
  name: '',
  props: {
    data: {
      type: Array,
      required: true
    },
    // 每一项绑定的index名
    index: {
      type: String,
      default: 'id'
    },
    // 每一项显示的名
    name: {
      type: String,
      default: 'name'
    },
    icon: {
      type: String,
      default: 'icon'
    },
    children: {
      type: String,
      default: 'children'
    },
    mode: {
      type: String,
      default: 'vertical'
    },
    defaultActive: {
      type: String,
      default: ''
    },
    router: {
      type: Boolean,
      default: false
    },
    uniqueOpened: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: '#ffffff'
    },
    activeTextColor: {
      type: String,
      default: '#409EFF'
    }
  },
  components: {

  },
  data() {
    return {
      menus: []
    }
  },
  methods: {

  },
  mounted() {
    this.menus = cloneDeep(this.data)
    console.log(this.menus)
  },
  watch: {

  },
  computed: {

  }
}
</script>

<style scoped lang='scss'>
</style>