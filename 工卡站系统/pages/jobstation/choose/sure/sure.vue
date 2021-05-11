<template>
	<view>
		<view>
				<image class="logo" src="/static/logo.png" @tap="shouye"></image>
		</view>
		<view style="flex-direction: row;display: flex;justify-content: center;align-items: flex-start;">
				<view style="flex-direction: column;display: flex;justify-items: center;justify-content: center;align-items: center;">
					<view style="width: 500rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f;font-size: 25px;font-weight: 700;">单机信息</view>
				<view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
				<view style="flex-direction: column;display: flex;justify-items: center;justify-content: center;align-items: center;">
			        <view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
			            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">机号</view>
			            <view style="width: 300rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">{{airplane}}</view>
			        </view>
			        <view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
			            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">数据更新</view>
			            <view style="width: 300rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">{{VDFCDATE}}</view>
			        </view>
			        <view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
			            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">飞行循环</view>
			            <input style="width: 300rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f" v-model="VDFCLD" ></input>
			        </view>
					<view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
					    <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">飞行小时</view>
					    <input style="width: 300rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f" v-model="VDFCAIR" ></input>
					</view>
			    </view>

				</view>
				</view>
			    <view style="flex-direction: column;display: flex;justify-items: center;justify-content: center;align-items: center;">
			        <view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
			            <view style="width:500rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f;font-size: 25px;font-weight: 700;">{{eng.data[0].ENGLOC}}#发动机</view>	
			        </view>
			        <view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
			            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">型号</view>
		            	<view style="width: 300rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">{{eng.data[0].ENGNAME}}</view>
		        	</view>
		        	<view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
			            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">序号</view>
			            <view style="width: 300rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">{{eng.data[0].ENGSN}}</view>
			        </view>
			        <view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
			            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">飞行循环</view>
			            <input style="width: 300rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f" v-model="engfcl" ></input>
		        	</view>
			        <view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
			            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">飞行小时</view>
			            <input style="width: 300rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f" v-model="timel" ></input>
			        </view>
			    </view>
			    <view style="flex-direction: column;display: flex;justify-items: center;justify-content: center;align-items: center;">
			        <view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
			            <view style="width: 500rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f;font-size: 25px;font-weight: 700;">{{eng.data[1].ENGLOC}}#发动机</view>		
			        </view>
			        <view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
			            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">型号</view>
			            <view style="width: 300rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">{{eng.data[1].ENGNAME}}</view>
			        </view>
			        <view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
			            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">序号</view>
			            <view style="width: 300rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">{{eng.data[1].ENGSN}}</view>
			        </view>
			        <view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
			            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">飞行循环</view>
			            <input style="width: 300rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f" v-model="engfcr" ></input>
			        </view>
			        <view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
			            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">飞行小时</view>
		            	<input style="width: 300rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f" v-model="timer"></input>
			        </view>
			    </view>
			    <view style="flex-direction: column;display: flex;justify-items: center;justify-content: center;align-items: center;">
			        <view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
			            <view style="width: 450rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f;font-size: 25px;font-weight: 700;">APU</view>		
			         </view>
			        <view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
			            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">型号</view>
			            <view style="width: 250rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">{{apu.MODEL}}</view>
			        </view>
					<view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
					    <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">序号</view>
					    <view style="width: 250rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">{{apu.APUSN}}</view>
					</view>
			        <view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
			            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">飞行循环</view>
			            <input style="width: 250rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f" v-model="apu.TOTALCYCLE" ></input>
			        </view>
			        <view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
			            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">飞行小时</view>
		            	<input style="width: 250rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f" v-model="aputime" ></input>
			        </view>
			 <view style="height: 20px;"></view>
			 <view class="loginBtnView"><button style="width: 300rpx;" type="primary" @tap="lands">确认</button></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
		
				VDFCDATE:"",
				airplane:'',
				airplaneinfo:'',
				engfcl:'',
				engfcr:'',
				ACNO:'',
				VDFCAIR:'N/A',
				VDFCLD:'N/A',
				timel:"N/A",
				timer:"N/A",
				VB:'N/A',
				url:"",
				apu:{
					MODEL:"N/A",
					APUSN:"N/A",
					TOTALCYCLE:"N/A"
				},
				aputime:"N/A",
				eng:'N/A',
			}
		},
		methods: {
			onLoad:function(){
				this.airplane = uni.getStorageSync('airplane');
			    this.url="http://xszhushou.picp.vip";
				console.log("qwowo",this.airplane)
				this.getairplane();
				this.geteng();
				this.getapu()
				
			},
			shouye:function(){
				uni.reLaunch({
					url:'/pages/index/index'
				})
			},
			getairplane:function(){
				this.ACNO=this.airplane.substring(0,1)+this.airplane.substring(2,6)
				
				uni.request({
				  url: this.url+'/php/search-acinfo.php',
				  data:{
				    ACNO:this.ACNO
				  },
				  method:'POST',
				  header: { 'Content-Type': 'application/x-www-form-urlencoded' },
				  success: (res) => {
				let date =res.data.data[0].VDFCDATE.date
				let timeq =res.data.data[0].VDFCAIR;
				let time =timeq/60;
				
				this.VDFCAIR=parseInt(time)
				this.VDFCLD=res.data.data[0].VDFCLD;
				this.VDFCDATE=date.substring(0, 10)
				  },    
				fail: err => {
				uni.showToast({
				icon: 'none',
				title: '查询记录失败1'
				})
				console.error('[数据库] [查询记录] 失败：', err)
				},
				
				}) 
				
			},
			geteng:function(){
				this.ACNO=this.airplane.substring(0,1)+this.airplane.substring(2,6)
				
				uni.request({
				  url: this.url+'/php/search-enginfo.php',
				  data:{
				    ACNO:this.ACNO
				  },
				  method:'POST',
				  header: { 'Content-Type': 'application/x-www-form-urlencoded' },
				  success: (res) => {
				   let str =res.data.data[0].ENGNAME;
				           var V2500 = RegExp(/V25/);
				           var CFM56 = RegExp(/CFM/);
				           var PW1100 = RegExp(/PW/);
				           let l=res.data.data[0].TSN;  //1发当前飞行小时
				           let r=res.data.data[1].TSN;  //1发当前飞行小时
				           this.timel=parseInt(l/60);
				           this.timer=parseInt(r/60);
						   this.engfcl=res.data.data[0].CSN;
						   this.engfcr=res.data.data[1].CSN;
						   this.eng=res.data;
					},
				})
			 }, 
			 getapu:function(){
			 	this.ACNO=this.airplane.substring(0,1)+this.airplane.substring(2,6)
			 	console.log("ACNO",this.ACNO)
			 	uni.request({
			 	  url: this.url+'/php/search-apuorinfo.php',
			 	  data:{
			 	    ACNO:this.ACNO
			 	  },
			 	  method:'POST',
			 	  header: { 'Content-Type': 'application/x-www-form-urlencoded' },
			 	  success: (res) => {
			 		  
			 	    let a=res.data.TOTALTIME;  //APU当前飞行小时
			 	    this.aputime=parseInt(a/60);
			 		this.apu=res.data
			 	
			 	  },    
			 	fail: err => {
			 	uni.showToast({
			 	icon: 'none',
			 	title: '查询记录失败2'
			 	})
			 	
			 	},
			 	
			 	}) 
			 },
			 lands:function(){
				 const db = uniCloud.database();
				 db.collection('sure')
				 .where({
				 	_id:"sureairplane"
				 	
				 })
				 .update({
                     "机号":this.airplane,
				 	"VDFCAIR":this.VDFCAIR,
				 	"VDFCLD":this.VDFCLD,
				 	"timel":this.timel,
				 	"timer":this.timer,
				 	"engfcl":this.engfcl,
				 	"engfcr":this.engfcr,
					"apufc":this.apu.TOTALCYCLE,
					"aputm":this.aputime
				 	
				 })
				 .then(res =>{
				 	uni.reLaunch({
						url:"../../show/show"
					})
				 })
				 
			 }
			 
		},
		
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
	height: 120rpx;
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
