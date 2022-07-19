<template>
    <el-container style="height:100vh">
      <el-aside width="auto">
        <aside-component></aside-component>
      </el-aside>
      <el-container>
        <el-header>
          <header-component></header-component>
        </el-header>
        <common-tag></common-tag>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
import AsideComponent from "@/components/AsideComponent";
import HeaderComponent from "@/components/HeaderComponent";
import CommonTag from "@/components/commonTag";
export default {
  name: "Main",
  components: {CommonTag, AsideComponent, HeaderComponent}
}
</script>

<style lang="less" scoped>
.el-header{
  background-color: #333;

}
.el-main{
  padding: 0;
}
</style>