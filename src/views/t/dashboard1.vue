<template>
<div class="dashboard">	
	<el-row type="flex" class="row-bg" justify="space-around">
		<el-col :span="3">
			<el-card class="box-card" :body-style="{ padding: '0px' }">
				<div class="status">New</div>
				<div class="status-count">{{StatusCount.New}}</div>
			</el-card>	
		</el-col>
		<el-col :span="3">
			<el-card class="box-card" :body-style="{ padding: '0px' }">
				<div class="status">Inqueue</div>
				<div class="status-count">{{StatusCount.Inqueue}}</div>
			</el-card>	
		</el-col>
		<el-col :span="3">
			<el-card class="box-card" :body-style="{ padding: '0px' }">
				<div class="status">Processing</div>
				<div class="status-count">{{StatusCount.Processing}}</div>
			</el-card>	
		</el-col>
		<el-col :span="3">
			<el-card class="box-card" :body-style="{ padding: '0px' }">
				<div class="status">Exception</div>
				<div class="status-count">{{StatusCount.Exception}}</div>
			</el-card>	
		</el-col>				
	</el-row>
</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				StatusCount:{New:0,Inqueue:0,Processing:0,Exception:0,UpdateSuccess:11221111,NoNeedUpload:10000}
			}
		},
		props:['message'],

	}
</script>
<style type="text/css" scoped>
	.dashboard{
		background-color: #fff;
	}
	.status{
		float: left;
		/*width: 70px;*/
		background-color: red;
		text-align: center;
		padding: 10px;
	}
	.status-count{
		padding: 10px;
		text-align: center;
		width: 100%;
		white-space: nowrap;
	}
</style>