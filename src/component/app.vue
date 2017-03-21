<style scoped>
    @import '../style/common.css';
</style>
<template>
    <div class="wrapper">
        <div class="wrapper-header">
            <a href="/" ><img class="logo"  src="../img/logo.png"/><span>Vue2, Element UI</span></a>
        </div>
        <div class="wrapper-main">
            <div class="wrapper-navigate">
                <mainnav :menu="menu"></mainnav>
                <div></div>
            </div>
            <div class="wrapper-container">
                <transition :name="transitionName">
                    <router-view></router-view>
                </transition>            
            </div>
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
                        {title:'Dialog',url:'/t/dialog'},
                        {title:'Tab1',url:'/t/tab1'}]}
                ,{title:'Home',icon:'el-icon-menu',url:'/index'}
                ,{title:'Dashboards',icon:'el-icon-setting'
                    ,items:[{title:'Sync Dashboard',url:'/t/sync_dashboard'},
                    {title:'Dashboard2',url:'/t/dashboard2'},
                    {title:'Dashboard3',url:'/t/dashboard2'},
                    {title:'Dashboard4',url:'/t/dashboard2'},
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