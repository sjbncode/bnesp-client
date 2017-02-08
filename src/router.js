
const routers=[
{path:'/',redirect:'/index'},
{path:'/index',component:(resolve)=>{require(['./views/index.vue'], resolve);}},
{path:'/t/form',component:(resolve)=>{require(['./views/t/form.vue'], resolve);}},
{path:'/t/form2',component:(resolve)=>{require(['./views/t/form2.vue'], resolve);}},
{path:'/t/form3',component:(resolve)=>{require(['./views/t/form3.vue'], resolve);}},
{path:'*',redirect:'/index'},
]
export default routers;