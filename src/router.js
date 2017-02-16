
const routers=[
{path:'/',redirect:'/index'},
{path:'/index',component:(resolve)=>{require(['./views/index.vue'], resolve);}},
{path:'/t/form',component:(resolve)=>{require(['./views/t/form.vue'], resolve);}},
{path:'/t/form2',component:(resolve)=>{require(['./views/t/form2.vue'], resolve);}},
{path:'/t/form3',component:(resolve)=>{require(['./views/t/form3.vue'], resolve);}},
{path:'/t/table1',component:(resolve)=>{require(['./views/t/table1.vue'], resolve);}},
{path:'/t/table2',component:(resolve)=>{require(['./views/t/table2.vue'], resolve);}},
{path:'/t/table3',component:(resolve)=>{require(['./views/t/table3.vue'], resolve);}},
{path:'/t/dialog',component:(resolve)=>{require(['./views/t/dialog.vue'], resolve);}},
{path:'/t/tab1',component:(resolve)=>{require(['./views/t/tab1.vue'], resolve);}},
{path:'/t/dashboard1',component:(resolve)=>{require(['./views/t/dashboard1.vue'], resolve);}},
{path:'*',redirect:'/index'},
]
export default routers;