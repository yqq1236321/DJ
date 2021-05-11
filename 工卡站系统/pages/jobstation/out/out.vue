<template>
	<view v-if="admin==10">

	<view style="background: linear-gradient(to right,#ffffff,#009dff)">

	   	 <view class="t1">
				<image class="logo" src="../../../static/logo.png"  @tap="shouye"></image>
							
				
				<view class="t2p" style="width: 300rpx;">
					<view class="o1"style="width: 300rpx;">{{power}}:{{adminname}}</view>
					<view class="o2"style="width: 300rpx;" @tap="tuichu">退出登录</view>
				</view>
				<view class="t1p" style="width: 1000rpx;">
					<button class="but" style="width: 200rpx;" @tap="show" >概览</button>
					<button class="but" style="width: 200rpx;" @tap="out" type="warn" >领出</button>
					<button class="but" style="width: 200rpx;" @tap="interrupt" >中断</button>
					<button class="but" style="width: 200rpx;" @tap="end">完工</button>
					<button class="but" style="width: 200rpx;" @tap="grade"  >查询</button>
					
				</view>
				<view class="t2" style="width: 1400rpx;">
					<view class="t3" style="width: 1400rpx;">
						<view class="p1" style="width: 200rpx;">员工号</view>					
						<view class="p2" style="width: 200rpx;">姓名</view>		
						<view class="p3" style="width: 200rpx;">组别</view>
						<view class="p4" style="width: 800rpx;">包号/工单号/非例行号</view>
					</view>
					<view class="t3" style="width: 1400rpx;">
						<view class="p12" style="width: 200rpx;">
									    <input
										:focus="Focus1"
										   :value="word"
										   @confirm="selectword"
									        class="inputText"
									        placeholder="请输入员工号"
									    />
									</view>
						<view class="p32" style="width: 200rpx;">{{userinfo.姓名}}</view>
						<view class="p32" style="width: 200rpx;">{{userinfo.组别}}</view>
						<view class="p42" style="width: 800rpx;">
							<input
							    :focus="Focus2"
							    :value="value"
							    @confirm="selectjob"
							    class="inputText"
							    placeholder="请输入包号/工单号/非例行号"
							/>
						</view>		
					</view>	
						
				</view>
				<view style="width: 300rpx;">
					<button @tap="next"  class="but"style="width: 300rpx;background: linear-gradient(#ffff00,#ffff00);font-weight: 700;" >确定</button>
				</view>
				
			</view>
			<uni-table >
				<uni-tr>
					<uni-th align="center" style="width:80px;font-weight: 600;font-size: 20px;">序号</uni-th>
					<uni-th align="center" style="width:80px;font-weight: 600;font-size: 20px;">包号</uni-th>
					<uni-th align="center" style="width:150px;font-weight: 600;font-size: 20px;">工单号</uni-th>
					<uni-th align="center" style="width:200px;font-weight: 600;font-size: 20px;">工卡号</uni-th>
					<uni-th align="center" style="width:600px;font-weight: 600;font-size: 20px;">工卡内容</uni-th>
					<uni-th align="center" style="width:100px;font-weight: 600;font-size: 20px;">派组</uni-th>
					<uni-th align="center" style="width:100px;font-weight: 600;font-size: 20px;">负责人</uni-th>
					<uni-th align="center" style="width:100px;font-weight: 600;font-size: 20px;">领出时间</uni-th>
					<uni-th align="center" style="width:100px;font-weight: 600;font-size: 20px;">中断时间</uni-th>
					<uni-th align="center" style="width:100px;font-weight: 600;font-size: 20px;">完工时间</uni-th>
					<uni-th align="center" style="width:100px;font-weight: 600;font-size: 20px;">工时</uni-th>
					<uni-th align="center" style="width:100px;font-weight: 600;font-size: 20px;">状态</uni-th>

				</uni-tr>
			
				<uni-tr v-for="(item, index) in jobinfo.data">
					<uni-td align="center">{{item.顺序号}}</uni-td>
					<uni-td align="center">{{item.包号}}</uni-td>
					<uni-td>{{item.工单号}}</uni-td>
					<uni-td>{{item.工卡号}}</uni-td>
					<uni-td>{{item.工单描述}}</uni-td>
					<uni-td align="center">{{item.组别}}</uni-td>
					<uni-td align="center">{{item.负责人}}</uni-td>
					<uni-td align="center">{{item.领出时间}}</uni-td>
					<uni-td align="center">{{item.中断时间}}</uni-td>
					<uni-td align="center">{{item.完工时间}}</uni-td>
					<uni-td align="center">{{item.工时}}</uni-td>
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
				value: '',
				word:'',
				admin:'',
				Focus1 : true,
				Focus2 : false,
				airplane:'',
				date:'',
				power:"",
				loading:false,
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
					if(this.admin==10){
						this.power="管理员"
					};
					if(this.admin==1){
						this.power="用户"
					};
				this.adminname = uni.getStorageSync('HCname');
				if(this.admin!=10){
					uni.showModal({
						title: '提示',
						content: '你没有权限进入此页面',
						success: function (res) {
							if (res.confirm) {
					uni.reLaunch({
						url:'../show/show'
					})
					}
				  },
				  })
				};
				const airplane = uni.getStorageSync('airplane');
				const date = uni.getStorageSync('date');
				this.date=date;
				this.airplane=airplane;
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
			next:function(){
				this.jobinfo.data=[''],
				this.userinfo=[''],
				this.word=[],
				this.getFocus('Focus1')
			},
			getFocus(nextfocus){
						this[nextfocus] = false     // 不能使用点语法
						this.$nextTick(()=>{
							this[nextfocus] = true
						})
					},
			selectword: function(event) {
				this.getFocus('Focus2')
			    this.inputValue = event.target.value;
				const db = uniCloud.database()
				const _ = db.command
				db.collection('user').where({
					
						"员工号":this.inputValue 
						
						
				}
				).get()
				.then(res => {
					this.userinfo=res.result.data[0]; 
					this.jobinfo.data=[''];
					uni.showToast({
						icon:"loading",
						title: '正在查询',
						duration: 1000
					}),
					this.word=[],
					this.jobsearch()
				    	 
				    }).catch(err => {
						this.userinfo=[''],
						this.jobinfo.data=['']
					
				    });
					
			
				
			},
			change:function(){
					   uni.reLaunch({
					   	url:"../change/change"
					   })
				},
			selectjob:function(){	
				const chec=event.target.value.substring(0,3).toUpperCase()
							
				if(chec=="%%0"){
				this.jobValue2 = event.target.value.substring(3,14);
				}
				if(chec=="HGH"){
				this.jobValue2 = event.target.value.substring(3,16).toUpperCase();
				}
				if(event.target.value.length<5){
					this.jobValue1 = event.target.value
				};
				
				this.job='';
				var date=new Date();//后台传给前端的数据
				var year=date.getFullYear();//计算出年
				var mon=date.getMonth()+1;//计算出月
				var day=date.getDate();//计算出日
				var hour=date.getHours();//计算出时
				var min=date.getMinutes();//计算出分
				var sec=date.getSeconds();//计算出秒
				mon=parseInt(mon)<10?"0"+mon:mon;
				day=parseInt(day)<10?"0"+day:day;
				hour=parseInt(hour)<10?"0"+hour:hour;
				min=parseInt(min)<10?"0"+min:min;
				sec=parseInt(sec)<10?"0"+sec:sec;
				//拼接，这就是返回的日期格式，可自己自由组合
				let d=year+"-"+mon+"-"+day+" "+hour+":"+min+":"+sec;
				const name=this.userinfo.姓名;
				const db = uniCloud.database()
				const _ = db.command
				
				if(name&&this.jobValue1){
				 db.collection('gongka').where({
					     
						 包号:this.jobValue1,
						 机号:this.airplane,
						 安排日期:this.date
						
				}).update({
				
				"状态":"领出",
				"领出时间":d,
				"负责人":name,
				"领出组":this.userinfo.组别
				})
				
				.then(res =>{
					
					if(res.result.updated>0){
						
						uni.showToast({
							title: '领出成功',
							duration: 2000
						});
						this.value=[];
						this.jobinfo.data=[''];
						this.jobsearch()
						
					}
				 if(res.result.updated==0){
					 uni.showToast({
					 	title: '领出失败',
					 	duration: 2000
					 });
					 this.value=[];
					 
				 }
				  
			})
			
				}else{
					uni.showToast({
						title: '请输入信息',
						duration: 2000
					});
					this.value=[];
				}
				if(name&&this.jobValue2){
					 db.collection('gongka').where({
						     
							 工单号:this.jobValue2,
							 机号:this.airplane,
							 安排日期:this.date
							
					}).update({
					
					"状态":"领出",
					"负责人":name,
					"领出时间":d,
					"领出组":this.userinfo.组别
					})
					
					.then(res =>{
						
						if(res.result.updated>0){
							
							uni.showToast({
								title: '领出成功',
								duration: 2000
							});
							this.value=[];
							this.jobinfo.data=[''];
							this.jobsearch()
							
						}
					 if(res.result.updated==0){
						 uni.showToast({
						 	title: '领出失败',
						 	duration: 2000
						 });
						 this.value=[];
						 
					 }
					  
				})
				
					}else{
						uni.showToast({
							title: '请输入信息',
							duration: 2000
						});
						this.value=[];
					}
				
			},
		    
			jobsearch:function(){
			
				let cn=this.userinfo.姓名;
				
				const db = uniCloud.database();
				const _ = db.command;
					db.collection('gongka').where({
					"负责人":cn,
					"机号":this.airplane,
					"安排日期":this.date,
					"状态":_.eq("领出")
					  }).get()
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
	
	text-align:center;
	font-size:20px;
	font-weight: 600;
}
.p2{
	
	text-align:center;
	font-size:20px;
	font-weight: 600;
	
}
.p3{
	
	text-align:center;
	font-size:20px;
	font-weight: 600;
}
.p4{
	
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
