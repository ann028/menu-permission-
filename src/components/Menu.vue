<template>
  <div class="menu">
    <el-menu :default-active="activeIndex" class="el-menu-demo">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class Menu extends Vue {
  private activeIndex: any = ''
}
</script>
<style lang="less" scoped>
/deep/.el-menu-demo .el-menu{
  border-right: 0;
}
.menu{
  width: 200px;
}
</style>
