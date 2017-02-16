<style scoped>
    @import '../style/common.css';
    .wrapper{
        background-color: #eee;
        padding: 1px;
    }
    .wrapper-header{
        height: 30px;
    }
    .wrapper-navigate{
        float: left;
        height: 0px;
    }
    .wrapper-container {
    background: #fff;
    padding: 10px;
    margin:0px 10px 10px 240px;
    border-radius: 2px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
    min-height: 800px
    }
</style>
<template>
    <div class="wrapper">
        <div class="wrapper-header"></div>
        <div class="wrapper-navigate">
            <mainnav :menu="menu"></mainnav>
        </div>
        <div class="wrapper-container">
            <transition :name="transitionName">
                <router-view></router-view>
            </transition>            
        </div>
    </div>
</template>
<script>
    import mainnav from './mainnav.vue';

    export default {
        data () {
            return {
                transitionName:'slide-right',
                menu:[{title:'Demo',icon:'el-icon-message'
                    ,items:[{title:'form1',url:'/t/form'},
                        {title:'form2',url:'/t/form2'},
                        {title:'form3',url:'/t/form3'},
                        {title:'table1',url:'/t/Table1'},
                        {title:'table2',url:'/t/Table2'},
                        {title:'table3',url:'/t/Table3'},
                        {title:'Tab1',url:'/t/tab1'}]}
                ,{title:'Home',icon:'el-icon-menu',url:'/index'}
                ,{title:'Nav3',icon:'el-icon-setting',items:[{title:'1',url:'/index'},
                        {title:'2',url:'/t/form'},
                        {title:'3',url:'/t/form'},
                        {title:'4',url:'/t/form'},
                ]},]
          }
        },
        ready () {

        },
        beforeDestroy () {

        },
        methods: {
        },
        watch: {
          '$route' (to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
          }
        },
        components:{mainnav}
    }
</script>