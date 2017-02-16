<template>
  <el-menu default-active="2" class="el-menu-vertical" @open="handleOpen" @close="handleClose" :router=true :unique-opened=true>
    <el-submenu index="1">
      <template slot="title"> <i class="el-icon-message"></i>
        导航一{{myMessage}}
      </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template slot="title">选项4</template>   
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="t">
      <template slot="title">
        Samples
      </template>
      <el-menu-item-group title="Form">
        <el-menu-item index="/t/form">From1</el-menu-item>
        <el-menu-item index="/t/form2">From2</el-menu-item>
        <el-menu-item index="/t/form3">From3</el-menu-item>
        <el-menu-item index="/t/table1">Table1</el-menu-item>
        <el-menu-item index="/t/table2">Table2</el-menu-item>
        <el-menu-item index="/t/table3">Table3</el-menu-item>
        <el-menu-item index="/t/dialog">Dialog</el-menu-item>
        <el-menu-item index="/t/tab1">Tab1</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="2"> <i class="el-icon-menu"></i>
      导航二
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-setting"></i>
      导航三
    </el-menu-item>
  </el-menu>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light'
            }
        },
        props:['myMessage'],
         methods: {
          handleOpen(){
            console.log('handleOpen')
          },
          handleClose(){

            console.log('handleClose')
          }
         }
    }
</script>