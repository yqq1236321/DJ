<template>
	<view>
		<view>
				<image class="logo" src="/static/logo.png" @tap="shouye"></image>
		</view>
		<view class='top'>定检生产计划</view>
		
		<view style='height:15px;'></view>
		<calendar  calendar-style="calendar" :mark='mark' @dayClick="dayClick" @monthChange='monthChange' :showLunar='false' header-style="calendar-header"  board-style="calendar-board" days-color="dayStyle" weeks-type="cn" />
	</view>
</template>

<script> 
	import utils from '@/components/rili/util.js'
	import Calendar from '@/components/Li-Calendar/Li-Calendar.vue';
	export default {
	components :  {
	    utils,
		Calendar
	},
		data() {
			return {
				 mark:[]
			}
		},
		
		methods: {
			shouye:function(){
				uni.reLaunch({
					url:'/pages/index/index'
				})
			},
			
			  onLoad: function () {
			
			    
			
			
			    let now = new Date();
			    let year = now.getFullYear();
			    let month = now.getMonth() + 1;
			    
			    
			      this.year= year,
			      this.month= month,
			      this.isToday= '' + year + month + now.getDate(),
			      this.week=utils.getYearWeek(''),
				  
			    this.paibanlist() 
				
			
			  },
			  
			  paibanlist:function(){
				
				const db = uniCloud.database();  
				db.collection('paiban')
				
				.field('time,text')
				.get()
				.then(res => {
					
					this.mark=res.result.data;
					
					
					
					
				});
			
			  },
			  

			
			  dayClick: function (e) {
			    console.log('xxxx',e.detail);
			    var month;  
			     if (e.detail.month<10){
			       month= '0'+e.detail.month
			    } else { 
			       month = e.detail.month}
			    var day; 
			     if (e.detail.day < 10) {
			      day='0' + e.detail.day
			    } else { 
			      day=e.detail.day }
			    var time = e.detail.year +'-'+month+'-'+day
			    console.log('tttt',time)
			    wx.navigateTo({
			      url: "../joblist/job/job?detail=" + time
			    });
			  }
		}
	}
</script>

<style>
.logo{
	
	width: 550rpx;
	height: 120rpx;
}
.calendar_title{
  width: 70%; 
  margin: 10rpx auto; 
  justify-content: space-between;
  font-size: 20pt;
  color: rgb(0, 0, 0);
  display: flex;
  }
.calendar_title .icon image{
  width: 60rpx; 
  height: 60rpx;
  margin: 5rpx auto;
  }

/* 日历 */
.calendar{
  width: 100%;
  margin-top: 75rpx;
  z-index:9;
  border-bottom-right-radius: 20rpx;
  border-bottom-left-radius: 20rpx;
  padding: 0 0 20rpx;
  font-family: FZZhunYuan-M02S;
}
.header{font-size: 0;width: 80%;margin: 0 auto;}
.header>view{
  display: inline-block;
  width: 14.285%;
  color: #666;
  font-size: 30rpx;
  text-align: center;
  border-bottom: 1px solid #D0D0D0;
  padding: 20rpx 0;
}
.weekMark{
  position: relative;
  width: 80%;
  margin: 0 auto;
}
.weekMark view{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom: 2px solid #69f;
}
.date-box{
  font-size: 0;
  padding: 10rpx 0;
  width: 80%;
  margin: 0 auto;
}
.date-box>view{position: relative;
display: inline-block;
width: 14.285%;
color: #666;
text-align: center;
vertical-align: middle;
}
.date-head{
  height: 60rpx;
  line-height: 60rpx;
  font-size: 12pt;
}
.nowDay .date-head{
  width: 60rpx;
  border-radius: 50%;
  text-align: center;
  color: #fff;
  background-color: #ff9933;
  margin: 0 auto;
}

.top{
  align-items: center; 
  margin: 10rpx auto; 
 justify-content: center;
  font-size: 100upx;
  color: rgb(30, 3, 179);
  display: flex;
  font-weight: bold
}
.login-box {

  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 22rem;
  top:0px;
  z-index:-999;

}
.week{
  display: flex;
  width: 100%;
  justify-content: center;
  height: auto;
  align-items: center;
  
}
.weekend{
  
  margin: 10rpx auto; 
  justify-content: space-between;
  font-size: 15pt;
  color: rgb(0, 0, 0);
  display: flex;
}
.weekjob{

  margin: 5rpx; 
  justify-content: space-between;
  font-size: 15pt;
  color: rgb(0, 0, 0);
  display: flex;
  font-weight: bold
}
</style>
