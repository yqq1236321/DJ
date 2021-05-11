<template>
	<view v-if="admin>=1">

	<view style="background: linear-gradient(to right,#ffffff,#009dff)">

	   	 <view class="t1">
				<image class="logo" src="../../../static/logo.png" @tap="shouye"></image>
							
				
				<view class="t2p" style="width: 300rpx;">
					<view class="o1"style="width: 300rpx;"  @tap="change">{{power}}:{{adminname}}</view>
					<view class="o2"style="width: 300rpx;" @tap="tuichu">退出登录</view>
				</view>
				<view class="t1p" style="width: 1000rpx;">
					<button class="but" style="width: 200rpx;" @tap="show" >概览</button>
					<button class="but" style="width: 200rpx;" @tap="out">领出</button>
					<button class="but" style="width: 200rpx;" @tap="interrupt" >中断</button>
					<button class="but" style="width: 200rpx;" @tap="end">完工</button>
					<button class="but" style="width: 200rpx;" @tap="grade"  type="warn" >查询</button>
					
				</view>
				<view class="t2" style="width: 1200rpx;">

					<view class="t3">
					<button class="but" @tap="all">全部</button>
                    <button class="but" @tap="jisheng">机身</button>
					<button class="but" @tap="fadongji" >发动机</button>
					<button class="but" @tap="tongyong"  >通用</button>
					<button class="but" @tap="kecang">客舱</button>			
					</view>		
				</view>
				<view style="width:203.94px;font-size: 25px;font-weight: 700;" ></view>
			</view>
			<uni-table >
				<uni-tr>
					<uni-th align="center" style="width:80px;font-weight: 600;font-size: 20px;">序号</uni-th>
					<uni-th align="center" style="width:200px;font-weight: 600;font-size: 20px;">工卡号</uni-th>
					<uni-th align="center" style="width:600px;font-weight: 600;font-size: 20px;">工卡内容</uni-th>
					<uni-th align="center" style="width:100px;font-weight: 600;font-size: 20px;">派组</uni-th>
					<uni-th align="center" style="width:100px;font-weight: 600;font-size: 20px;">负责人</uni-th>
					<uni-th align="center" style="width:100px;font-weight: 600;font-size: 20px;">工时</uni-th>
					<uni-th align="center" style="width:100px;font-weight: 600;font-size: 20px;">领出时间</uni-th>
					<uni-th align="center" style="width:100px;font-weight: 600;font-size: 20px;">中断时间</uni-th>
					<uni-th align="center" style="width:100px;font-weight: 600;font-size: 20px;">完工时间</uni-th>
					<uni-th align="center" style="width:100px;font-weight: 600;font-size: 20px;">状态</uni-th>

				</uni-tr>
				<uni-tr v-for="(item, index) in jobinfo.data"   >
					
					<uni-td align="center">{{item.顺序号}}</uni-td>
					<uni-td>{{item.工卡号}}</uni-td>
					<uni-td>{{item.工单描述}}</uni-td>
					<uni-td align="center">{{item.组别}}</uni-td>
					<uni-td align="center">{{item.负责人}}</uni-td>
					<uni-td align="center">{{item.工时}}</uni-td>
					<uni-td align="center">{{item.领出时间}}</uni-td>
					<uni-td align="center">{{item.中断时间}}</uni-td>
					<uni-td align="center">{{item.完工时间}}</uni-td>
					<uni-td align="center">{{item.状态}}</uni-td>	
				
				</uni-tr>	
			
			</uni-table>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userinfo:{},
				jobinfo:'',
				job:'',
				loading:false,
				admin:'',
				power:"",
				jobinfo:{data:
				[
					
				]}
			}
		},
		created() {
			this.loading= true
			setTimeout(()=>{
				
				this.loading = false
			},200)
		},
		methods: {
			
			onLoad:function(){
				this.admin = uni.getStorageSync('admin');
				this.adminname = uni.getStorageSync('HCname');
				if(this.admin==10){
					this.power="管理员"
				};
				if(this.admin==1){
					this.power="用户"
				};
				const airplane = uni.getStorageSync('airplane');
				const date = uni.getStorageSync('date');
				this.date=date;
				this.airplane=airplane;
				const db = uniCloud.database();
				const _ = db.command;
					db.collection('gongka').where({
						
						 机号:this.airplane,
						 安排日期:this.date
						
					})
					
					.get()
					
						.then(res => {
					let i= 0;	
					let o_length=res.result.data.length
					for (; i < o_length; i++) { 
						this.jobinfo.data[i]=res.result.data[i];
					
									  }
									 
									  if(this.jobinfo.data){
									  	this.$forceUpdate() 
									  }
						}).catch(err => {					
					
						});
						
			},
			shouye:function(){
				uni.reLaunch({
					url:'/pages/index/index'
				})
			},
			tuichu:function(){
				
					uni.removeStorageSync('HCuname');
					uni.removeStorageSync('HCpassw');
					uni.removeStorageSync('airplane');
					uni.removeStorageSync('date');
					uni.removeStorageSync('HCname');
					uni.removeStorageSync('admin');
					uni.showToast({
						title:"已退出"
					})
				  uni.reLaunch({
				  	url:"/pages/login/login"
				  })
				},
			all:function(){
				const db = uniCloud.database();
				const _ = db.command;
					db.collection('gongka').where({
						
						 机号:this.airplane,
						 安排日期:this.date
						
					})
					
					.get()
					
						.then(res => {
						let i= 0;
						let o_length=res.result.data.length
						for (; i < o_length; i++) { 
						this.jobinfo.data[i]=res.result.data[i];
					
									  }
									 
									  if(this.jobinfo.data){
									  	this.$forceUpdate() 
									  }
						}).catch(err => {					
					
						});
			},
			jisheng:function(){
				this.jobinfo.data=[''];
				const path='A';
				uni.showToast({
					icon:"loading",
					title: '正在查询',
					duration: 1000
				});
				this.seach(path)
				
			},
			change:function(){
					   uni.reLaunch({
					   	url:"../change/change"
					   })
				},
			fadongji:function(){
				this.jobinfo.data=[''];
				const path='B';
				uni.showToast({
					icon:"loading",
					title: '正在查询',
					duration: 1000
				});
				this.seach(path)
				
			},
			tongyong:function(){
				this.jobinfo.data=[''];
				const path='C';
				uni.showToast({
					icon:"loading",
					title: '正在查询',
					duration: 1000
				});
				this.seach(path)
				
			},
			kecang:function(){
				this.jobinfo.data=[''];
				const path='客舱';
				uni.showToast({
					icon:"loading",
					title: '正在查询',
					duration: 1000
				});
				this.seach(path)
				
			},
			seach:function(path){
				const db = uniCloud.database();
				const _ = db.command;
					db.collection('gongka').where({
						组别:path,
						机号:this.airplane,
						安排日期:this.date
					})
					
					.get()
					
						.then(res => {
						let i= 0;
						let o_length=res.result.data.length
						for (; i < o_length; i++) { 
						this.jobinfo.data[i]=res.result.data[i];
					
									  }
									 
									  if(this.jobinfo.data){
									  	this.$forceUpdate() 
									  }
						}).catch(err => {					
					
						});
			},
			show:function(){
				uni.reLaunch({
					url:'../show/show'
				})
			},
			out:function(){
				if(this.admin==10){
				uni.reLaunch({
					url:'../out/out'
				})
				}
				else{
					uni.showModal({
						title: '提示',
						content: '你没有权限进入此页面',
						})
				}
			},	
			interrupt:function(){
				if(this.admin==10){
				uni.reLaunch({
					url:'../interrupt/interrupt'
				})
				}
				else{
					uni.showModal({
						title: '提示',
						content: '你没有权限进入此页面',
						})
				}
			},
			end:function(){
				if(this.admin==10){
				uni.reLaunch({
					url:'../end/end'
				})
				}
				else{
					uni.showModal({
						title: '提示',
						content: '你没有权限进入此页面',
						})
				}
			},
			grade:function(){
				uni.reLaunch({
					url:'../grade/grade'
				})
			},
		}
	}
</script>

<style>

	.topbar{
		display: flex;
		justify-content:space-between;
		height: 30px;
	}
	.fl{
		display: flex;
		align-items: center;
		text-align:left;
		justify-content:center;
	}
	.fr{
		display: flex;
		height: 30px;
		width: auto;
	}
	.fp{
		height: 30px;
		width: 30px;
	}
	.fj{
		height: 20px;
		width: 20px;
	}
.top{
	display: flex;
}	
.t1p{
	display: flex;
	flex-direction:row;
	width: 530.72px;
	margin-right:10px;
}
.t2p{
	display: flex;
	flex-direction:column;
	
	margin-right:10px;
	align-items: center;
	text-align:center;
	justify-content:center;
}
.o1{
	font-size: 18px;
	font-weight: 600;
}
.o2{
	font-size: 16px;
	color: #007AFF;
}
.but{
	display: flex;
	align-items: center;
	text-align:center;
	justify-content:center;
	width: 25%;
	font-size:50rpx;
	margin-left:5px;
	-moz-box-shadow: inset 0 0 20px #CCC;
	-webkit-box-shadow: inset 0 0 20px #CCC;
	box-shadow: inset 0 0 20px #CCC;
	font-weight: 700;
}
.t1{
	display: flex;
	height: auto;
	width: 100%;
}
.t2{
	display: flex;
	flex-direction:column;
    width: 800px;
	margin-left:10px;
}
.t3{
	display: flex;
	justify-content:left;	
	width: 700px;

}
.logo{
	
	width: 550rpx;
	height: auto;
}
.p12{
	display: flex;
	align-items: center;
	width: 100px;
	text-align:left;
	background-color: #ffffff;
	line-height: 20px;
	border-style:solid;
	border-width: 3px;
	border-bottom: 2dp;
	border-color: #ffcb46;	
	-moz-box-shadow: inset 0 0 20px #CCC;
	-webkit-box-shadow: inset 0 0 20px #CCC;
	box-shadow: inset 0 0 20px #CCC;
	font-size:16px;
}
.p22{
	width: 100px;
	display: flex;
	justify-content:center;
	align-items: center;
	text-align:center;
	font-size:20px;
	height: 30px;
	
}
.p32{
	width: 100px;
	display: flex;
	justify-content:center;
	align-items: center;
	text-align:center;
	font-size:20px;
	height: 30px;
}
.p42{
	display: flex;
	align-items: center;
	width: 420px;
	text-align:left;
	background-color: #ffffff;
	line-height: 20px;
	border-style:solid;
	border-width: 3px;
	border-bottom: 2dp;
	border-color: #ffcb46;	
	-moz-box-shadow: inset 0 0 20px #CCC;
	-webkit-box-shadow: inset 0 0 20px #CCC;
	box-shadow: inset 0 0 20px #CCC;
	font-size:16px;
}
.p1{
	width: 120px;
	text-align:center;
	font-size:20px;
	font-weight: 600;
}
.p2{
	width: 100px;
	text-align:center;
	font-size:20px;
	font-weight: 600;
	margin-left:5px;
}
.p3{
	width: 100px;
	text-align:center;
	font-size:20px;
	font-weight: 600;
}
.p4{
	width: 500px;
	text-align:center;
	font-size:20px;
	font-weight: 600;
}
.inputText{
	width: 500px;
	height: 30px;
	font-size:16px;
}
.popup_overlay {
		position: fixed;
		top: 0%;
		left: 0%;
		width: 100%;
		height: 100%;
		background-color: black;
		z-index: 1001;
		-moz-opacity: 0.8;
		opacity: .80;
		filter: alpha(opacity=88);
	}
		 
	.popup_content {
		position: fixed;
		top: 50%;
		left: 50%;
		width: 520rpx;
		height: 250rpx;
		margin-left: -270rpx;
		margin-top: -270rpx;
		border: 10px solid white;
		background-color: white;
		z-index: 1002;
		overflow: auto;
	}
		 
	.popup_title {
		width: 480rpx;
		text-align: center;
		font-size: 32rpx;
	}
		 
	.popup_textarea_item {
		padding-top: 5rpx;
		height: 80rpx;
		width: 440rpx;
		background-color: #F1F1F1;
		margin-top: 20rpx;
		margin-left: 20rpx;
		padding-top: 25rpx;
	}
		 
	.popup_textarea {
		width: 410rpx;
		font-size: 26rpx;
		margin-left: 20rpx;
	}
		 
	.popup_button {
		color: #000000;
	}
	.buttons{
		text-align: center;
		font-size: 32rpx;
		margin-top: 40rpx;
		}
</style>
