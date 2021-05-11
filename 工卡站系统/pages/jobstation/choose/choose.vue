<template>
	<view>
		<view>
				<image class="logo" src="/static/logo.png" @tap="shouye"></image>
		</view>

	<view style="flex-direction: row;display: flex;" v-if="admin>=1">
	   
       	<view style="display: flex;align-items: center;justify-content: center;flex-direction: column;height: 880rpx;margin-left: 1%;">
 		<view style="font-size: xx-large;font-weight: 800;color: yellow;">请选择飞机</view>
		<view style="height:50rpx;"></view>
		<view style="display: flex;align-items: center;">
			<view  style="display: flex;flex-direction: row;;align-items: center;"	>
				<view style="font-size: x-large;font-weight: 700;color: yellow;">
					选择客户：
				</view>
				<view style="width: 300rpx">
					<picker @change="bindPickerkehu" :value="indexk" :range="kehu" range-key="name">
						<view style="background-color: #F0F8FF; width: 300rpx;font-size: large; display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #000000,0 0 0 1px #000000">{{kehu[indexk].name}}</view>
					</picker>
				</view>
			</view>
		</view>
		<view style="height:20rpx;"></view>
        <view style="display: flex;align-items: center;">
        	<view  style="display: flex;flex-direction: row;;align-items: center;"	>
        		<view style="font-size: x-large;font-weight: 700;color: yellow;">
        			选择首字：
        		</view>
        		<view style="width: 300rpx">
        			<picker @change="bindPickershouzi" :value="indexk" :range="shouzi" range-key="name">
        				<view style="background-color: #F0F8FF; width: 300rpx;font-size: large; display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #000000,0 0 0 1px #000000">{{shouzi[indexs]}}</view>
        			</picker>
        		</view>
        	</view>
		</view>	
		<view style="height:20rpx;"></view>
		<view style="display: flex;align-items: center;">
			<view  style="display: flex;flex-direction: row;;align-items: center;"	>
				<view style="font-size: x-large;font-weight: 700;color: yellow;">
					选择飞机：
				</view>
				<view style="width: 300rpx">
					<picker @change="bindPickerairplane" :value="indexa" :range="airplane"  range-key="name">
						<view style="background-color: #F0F8FF; width: 300rpx;font-size: large; display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #000000,0 0 0 1px #000000">{{airplane[indexa]}}</view>
					</picker>
				</view>
			</view>
		</view>	
		<view style="height:20rpx;"></view>
		<view style="width: 100rpx;"></view>
		<view  style="display: flex;align-items: center;">
		   	<view style="display: flex;flex-direction: row;;align-items: center;">
		   		<view style="font-size: x-large;font-weight: 700;color: yellow;">
		   			选择日期： 
		   		</view>
		   		<view >
		   			<picker mode="date" :value="date" :start="startDate" :end="endDate" value-format="yyyy/MM/dd"  @change="bindDateChange">
		   				<view style="background-color: #F0F8FF;width: 300rpx;font-size: large;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #000000,0 0 0 1px #000000">{{date}}</view>
		   			</picker>
		   		</view>
		   	</view>
		</view>
		<view style="height:50rpx;"></view>
		<view class="loginBtnView"><button style="width: 300rpx;font-size: x-large;font-weight: 700;color:#F0F8FF; background-color: #00BBB1;display: flex;height: 100rpx;justify-items: center;justify-content: center;align-items: center;" @tap="chooseok">确定</button></view>	
		</view>	
		<view v-for="(item, index) in joblist" >
			<view >{{item.time}}</view>
			<view>{{item.text}}</view>
		</view>
		<image class="backlogo" src="/static/beijing.jpg"></image>
	</view>
	</view>
</template>

<script>
	function getDate(type) {
		const date = new Date();
	
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
	
		if (type === 'start') {
			year = year - 10;
		} else if (type === 'end') {
			year = year + 10;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;
	
		return `${year}-${month}-${day}`;
	}
	import utils from '@/components/rili/util.js'
	export default {
		components :  {
		    utils
		},
		data() {
			return {
				week:"",
				kehu: [{name:'国航'},{name: '澳航'}, {name:'首航'}],
				shouzi:["1","2","3","6","8"],
				airplane:["B-1637","B-1638","B-1639","B-1876","B-1877","B-1878"],
				indexa:0,
				indexk:0,
				indexs:0,
				date: getDate({format:"yyyy/MM/dd"}),
				startDate:getDate('start'),
				endDate:getDate('end'),
				getkehu:"国航",
				getshouzi:"1",
				getairplane:'B-1637',
				admin:'',
				joblist:[]
			}
		},
		methods: {
			onLoad:function(){
				this.week=utils.getYearWeek('');
				let weeks=this.week.toString();
				this.admin = uni.getStorageSync('admin');
				const db = uniCloud.database()
				const _ = db.command
				db.collection('paiban')
				.where({
					week:weeks
					}) 
				.get()
				.then(res =>{
					this.joblist=res.result.data
					console.log("job",this.joblist)
					console.log("week",this.week)
				});
				
			},
			bindPickerDJairplane: function(e) {
			
				this.indexa = e.detail.value
				const ed=e.detail.value
				this.getairplane=this.airplane[ed]
				},
			bindPickerkehu: function(e) {
				
				this.indexk = e.detail.value
				const ed=e.detail.value
				this.getkehu=this.kehu[ed].name
				if(this.getkehu=='国航'){
					this.shouzi=["1","2","3","6","8"]
					this.airplane=["B-1637","B-1638","B-1639","B-1876","B-1877","B-1878"]
					this.getairplane='B-1637'
				}
				if(this.getkehu=='澳航'){
					this.shouzi=['ALL']
					this.airplane=['N/A']
					this.getairplane='N/A'
				}
				if(this.getkehu=='首航'){
					this.shouzi=['ALL']
					this.airplane=['N/A']
					this.getairplane='N/A'
				}
			},
			bindPickershouzi: function(e) {
				
				this.indexs = e.detail.value
				const ed=e.detail.value
				this.getshouzi=this.shouzi[ed]
				if(this.getkehu=='国航'&this.getshouzi==1){
					this.airplane=["B-1637","B-1638","B-1639","B-1876","B-1877","B-1878"]
					this.getairplane='B-1637'
				}
				if(this.getkehu=='国航'&this.getshouzi==2){
					this.airplane=["B-2404"]
					this.getairplane='B-2404'
				}
				if(this.getkehu=='国航'&this.getshouzi==3){
					this.airplane=["B-307K","B-308S","B-309F","B-309G","B-309R","B-30A7","B-30C8","B-30DF","B-30FA","B-30FJ","B-30FU"]
					this.getairplane='B-307K'
				}
				if(this.getkehu=='国航'&this.getshouzi==6){
					this.airplane=["B-6022","B-6023","B-6034","B-6031","B-6048","B-6213","B-6216","B-6235","B-6236","B-6677","B-6731","B-6733","B-6745","B-6848","B-6883","B-6885","B-6942"]
					this.getairplane='B-6022'
				}
				if(this.getkehu=='国航'&this.getshouzi==8){
					this.airplane=["B-8337","B-8429","B-8492","B-8493","B-8582","B-8743","B-8799","B-8800"]
					this.getairplane='B-8337'
				}
			},
			shouye:function(){
				uni.reLaunch({
					url:'/pages/index/index'
				})
			},
			bindPickerairplane: function(e) {
			
				this.indexa = e.detail.value
				const ed=e.detail.value
				this.getairplane=this.airplane[ed]
				},
			bindDateChange: function(e) {
				
				this.date = e.detail.value
				
			},
			chooseok:function(){
				uni.setStorage({
				    key: 'airplane',
				    data: this.getairplane
				   
				});
				uni.setStorage({
				    key: 'date',
				    data: this.date
				   
				});
				if(this.admin==10){
				uni.showModal({
					title: '提示！！！',
					content: '需要人工核实飞机参数么',
					success: function (res) {
						if (res.confirm) {
							uni.reLaunch({
								url:"./sure/sure"
							})
							
						} else if (res.cancel) {
							uni.reLaunch({
								url:"../show/show"
							})
						}
					}
				});
				}else{
					uni.reLaunch({
						url:"../show/show"
					})
				}
				
			}
		}
	}
</script>

<style>
.backlogo {
    padding-bottom: 0px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
}
.logo{
	
	width: 550rpx;
	height: 120rpx;
}
</style>
