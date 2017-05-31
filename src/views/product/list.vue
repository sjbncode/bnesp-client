<template>
    <div class="dashboard" v-loading="loading" style="min-height: 400px">
        <el-row :gutter="40" >
            <el-col ::xs="8" :sm="6" :md="6" :lg="6" v-for="(o, index) in tableData" :key="o">
                <el-card :body-style="{ padding: '0px' }">
                    <img :src="o.pic" class="image">
                    <div style="padding: 14px;">
                        <span>{{o.name}}</span>
                        <div class="bottom clearfix">
                            <time class="time">{{ o.description }}</time>
                            <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script type="text/javascript">
import _ from 'underscore';
export default {
    data() {
            return {
                getProductsUrl: 'http://localhost:3009/api/getSyncErrors',
                loading: false,
                pagesize: 10,
                currentPage: 1,
                tableData: []
            }
        },
        created() {
            this.getProducts();
        },
        destroyed() {},
        methods: {
        	getProducts: function () {
        		// body...
        		var dummy=[{id:'1',pic:'',name:'test name',description:'a'},
        			{id:'1',pic:'',name:'test name2',description:'before'},
        			{id:'1',pic:'',name:'test name3',description:'category'},
        			{id:'1',pic:'',name:'test name4',description:'class'},
        			{id:'1',pic:'',name:'test name',description:'dashboard'},
        			{id:'1',pic:'',name:'test name2',description:'before'},
        			{id:'1',pic:'',name:'test name3',description:'category'},
        			{id:'1',pic:'',name:'test name4',description:'class'},
        			{id:'1',pic:'',name:'test name',description:'dashboard'},
        		];
        		this.loading = true;
        		setTimeout(()=>{this.loading=false;
        			console.log('xxx');
        			this.tableData = dummy
        		},3000);
                // this.$http.post(this.getProductsUrl, {
                //     category: this.$route.params.category
                // }).then(res => {
                //     this.tableData = res.data.data
                //     this.loading = false;
                // });
        	}
        },
        computed: {
            
        }

}
</script>
<style type="text/css" scoped>
.el-col {
    margin-bottom: 30px
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
