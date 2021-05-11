<template>
	<view v-if="admin>0" >
		
		
		<view style="background: linear-gradient(to right,#ffffff,#009dff)">
		
		   	 <view class="t1">
					<image class="logo" src="../../static/logo.png"  @tap="shouye"></image>
								
					
					<view class="t2p" style="width: 300rpx;">
						<view class="o1"style="width: 300rpx;">{{power}}:{{adminname}}</view>
						<view class="o2"style="width: 300rpx;" @tap="tuichu">退出登录</view>
					</view>
					<view class="t2p" style="width: 2000rpx;">
						<view style="width: 1800rpx;font-size: 50px;font-weight: 800;">Ameco杭州定检综合管理系统</view>
						
					</view>
			</view>	
				<view  style="height: 50px;"></view>
		<view class="section" style="height: 1080px;">
		  <view class="tui-table-view">
		    <view class="tui-col-3" @tap="job" >
		      <image class="kayimg" src="/static/job.png"></image>
		      <view style="font-size: x-large;font-weight: 700;">工卡站</view>
		    </view>
		    <view class="tui-col-3" @tap="exam" >
		      <image class="kayimg" src="/static/exam.png"></image>
		      <view style="font-size: x-large;font-weight: 700;">考试</view>
		    </view>
		    <view class="tui-col-3" @tap="paiban">
		      <image class="kayimg" src="/static/paiban.png"></image>
		      <view style="font-size: x-large;font-weight: 700;">生产计划</view>
		    </view>
		    <view class="tui-col-3" @tap="zhiban">
		      <image class="kayimg" src="/static/zhiban.png"></image>
		      <view style="font-size: x-large;font-weight: 700;">值班</view>
		    </view>
		    <view class="tui-col-3">
		      <image class="kayimg"></image>
		      <view></view>
		    </view>
		    <view class="tui-col-3">
		      <image class="kayimg" ></image>
		      <view></view>
		    </view>
		    <view class="tui-col-3">
		      <image class="kayimg" ></image>
		      <view></view>
		    </view>
		    <view class="tui-col-3">
		      <image class="kayimg" ></image>
		      <view></view>
		    </view>
		    <view class="tui-col-3">
		      <image class="kayimg" ></image>
		      <view></view>
		    </view>
		  </view>
		</view>
	</view>	  
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
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
			},	
			shouye:function(){
				uni.reLaunch({
					url:'/pages/index/index'
				})
			},
			job:function(){
				uni.reLaunch({
					url:'../jobstation/choose/choose'
				})
			},
			exam:function(){
				uni.reLaunch({
					url:'../exam/exam'
				})
			},
			paiban:function(){
				uni.reLaunch({
					url:'../paiban/paiban'
				})
			},
			
		}
	}
</script>

<style>
.tui-table-view{
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}
.tui-col-3{
 flex: 0 0 auto;
  width: 20%;
  text-align: center;
  color: black;
  padding: 40rpx 0;
  font-size: 35rpx;
}

.logo{
	
	width: 550rpx;
	height: 120rpx;
}
.t1p{
	display: flex;
	flex-direction:row;
	width: 530.72px;
	margin-right:10px;
}
.t1{
	display: flex;
	height: auto;
	width: 100%;
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
.input{
  border: 1px solid gainsboro;
  margin: 20rpx;
}
.admin{
width:100%;
display: flex;
justify-content: center; 
align-items: center;
}

.login{
  width:100%;
  display: flex;
  justify-content: center; 
  align-items: center;
}
.weidenglu{
  width:40%;
  display: flex;
  justify-content: center; 
  align-items: center;
  color: red;
  text-align: center;
}
.denglu{
  width:30%;
  display: flex;
  justify-content: center; 
  align-items: center;
}


.main{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.woring{
    color: #e00303;
    margin-top: 40rpx;
    font-weight: 700;

    margin: 20rpx;
    width:auto;
    display: flex;
    justify-content: center;  
    font-size: 15pt;
    font-weight: 800;
}

.infor{
    color: #e00303;
    margin-top: 40rpx;

    margin: 20rpx;
    width:auto;
    display: flex;
    justify-content: center; 
    font-size: 10pt; 

}
.infor2{
    color: #e00303;
    margin-top: 40rpx;

    margin: 20rpx;
    width:auto;
    display: flex;
    justify-content: center; 
    font-size: 10pt; 

}

.img{
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: auto;
  top:0px;
  z-index:-999;

}

.header {
  margin: 90rpx 0 90rpx 50rpx;
  border-bottom: 1px solid #ccc;
  text-align: center;
  width: 650rpx;
  height: 300rpx;
  line-height: 450rpx;
}

.header image {
  width: 200rpx;
  height: 200rpx;
  border-radius: 100rpx;
}

.content {
  margin-left: 50rpx;
  margin-bottom: 90rpx;
}

.content text {
  display: block;
  color: #9d9d9d;
  margin-top: 40rpx;
}
.quanxian{
	display: flex;
	display: flex;
	justify-content: right; 
}
.kefu{
	display: flex;
	justify-content: right; 
}
.taitou{
	display: flex;
	width: 40%;
	flex-direction: column;
	justify-content: left; 
}
.bottom {
  border-radius: 80rpx;
  margin: 70rpx 50rpx;
  font-size: 35rpx;
}
.ka{
  display: flex;
}
.kaka{
	 display: flex;
	 justify-content: left; 
	 align-items: center;
}
.kay{

  height: 80px;    
  width: 80px;    
  border-radius: 50%;
}
.kayimg{

  height: 150px;    
  width: 150px;    
  border-radius: 30%;
}
.kayname{

  height:50px;    
  width: 200px;    

}
.text{
	
  display: flex;
  justify-content: center; 
  font-size: 15pt;
  font-weight: 500;
  font-family: KaiTi;
}
.text1{
	width: 20%;
  display: flex;
  justify-content: center; 
  font-size: 15pt;
  font-weight: 500;
  font-family: KaiTi;
}
.mark{
  display: flex;
  justify-content: center; 
  font-size: 16pt;
  font-weight: 700;

}
.marke{
  display: flex;
  justify-content: center; 
  font-size: 16pt;
  font-weight: 700;

}
.marks{
  display: flex;
  justify-content: center; 
  font-size: 16pt;
  font-weight: 600;

}
.login-box {

  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 100%;
  top:0px;
  z-index:-999;

}
</style>
