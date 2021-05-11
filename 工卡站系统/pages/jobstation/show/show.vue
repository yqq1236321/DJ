
<template>
	
	<view v-if="admin>=1">

	<view style="background: linear-gradient(to right,#ffffff,#009dff)">

	   	 <view class="t1">
			
				 <image class="logo" src="../../../static/logo.png" @tap="shouye"></image>
			
				
				<view class="t2p" style="width: 300rpx;">
					<view class="o1"style="width: 300rpx;" @tap="change">{{power}}:{{adminname}}</view>
					<view class="o2"style="width: 300rpx;" @tap="tuichu">退出登录</view>
				</view>
				<view class="t1p" style="width: 1000rpx;">
					<button class="but" style="width: 200rpx;" @tap="show" type="warn" >概览</button>
					<button class="but" style="width: 200rpx;" @tap="out">领出</button>
					<button class="but" style="width: 200rpx;" @tap="interrupt" >中断</button>
					<button class="but" style="width: 200rpx;" @tap="end">完工</button>
					<button class="but" style="width: 200rpx;" @tap="grade"  >查询</button>
					
				</view>
				
				<view class="t1p" style="width: 1200rpx;">
					<view style="width: 100rpx;"></view>
					<button class="but" style="width: 400rpx;" @tap="choose" type="default" >选择飞机</button>
					<view style="width: 100rpx;"></view>
					<button class="but"  style="font-weight: 800;width: 400rpx;" type="primary">{{second}} 秒刷新</button> 
					<view style="width: 100rpx;"></view>
					<button class="but" style="width: 400rpx;" @tap="showDiv()" type="warn" >清除数据</button>
					<view :hidden="userFeedbackHidden" class="popup_content">
								<view class="popup_title">验证密码</view>
								<view class="popup_textarea_item">
									<input type="text"  class="popup_textarea" :value="value"  @confirm="yanzhen"  v-model="feedbackContent" placeholder="输入清除数据库密码"/>
								
							</view>
						</view>
					<view class="popup_overlay" :hidden="userFeedbackHidden" @click="hideDiv()"></view>
				</view>
                   
			</view>
			
        <view style="justify-items: center;justify-content: center;align-items: center;display: flex;font-size: 40px;font-weight: 900;">{{date}}   {{airplane}}  {{Acheck}} 今日工作信息</view>
		<view style="left:40rpx;top:90px;position: absolute;font-size: 40rpx;font-weight: 600;">北京时间：{{beijingdate}}</view>
		<view style="left:40rpx;top:115px;position: absolute;font-size: 40rpx;font-weight: 600;">UTC时间：{{utcdate}}</view>
		<view style="left:20px;top:150px;position: absolute;font-size: 50rpx;font-weight: 800;">总工卡：{{zong}}</view>
		<view style="left:20px;top:180px;position: absolute;font-size: 50rpx;font-weight: 800;">未领出：{{weiling}}</view>
		<view style="left:190px;top:150px;position: absolute;font-size: 50rpx ;font-weight: 800;">领出：{{lingchu}}</view>
		<view style="left:190px;top:180px;position: absolute;font-size: 50rpx;font-weight: 800;">中断：{{zhongduan}}</view>
		<view style="left:190px;top:210px;position: absolute;font-size: 50rpx;font-weight: 800;">完工：{{wangong}}</view>
		<view style="flex-direction: row;display: flex;justify-content: center;align-items: flex-start;">
			<view style="flex-direction: column;display: flex;justify-items: center;justify-content: center;align-items: center;">
				<view style="width: 900rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f;font-size: 25px;font-weight: 700;">单机信息(数据更新：{{VDFCDATE}})</view>
			<view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
			<view style="flex-direction: column;display: flex;justify-items: center;justify-content: center;align-items: center;">
		        <view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
		            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">机号</view>
		            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">{{airplane}}</view>
		        </view>
	        	<view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
		            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">维修等级</view>
		            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">{{Acheck}}</view>
		        </view>
		        <view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
		            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">飞行循环</view>
		            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">{{VDFCLD}}</view>
		        </view>
		        <view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
		            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">飞行小时</view>
		            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">{{VDFCAIR}}</view>
		        </view>
		    </view>
		    <view style="flex-direction: column;display: flex;justify-items: center;justify-content: center;align-items: center;">
		        <view style="flex-direction: row;display: flex;">
		            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">机型</view>
		            <view style="width: 300rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">{{airplaneinfo.TYPE}}</view>
		        </view>
		        <view style="flex-direction: row;display: flex;">
	               	<view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">MSN</view>
		            <view style="width: 300rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">{{airplaneinfo.MSN}}</view>
	        	</view>
		        <view style="flex-direction: row;display: flex;">
	               	<view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">机队序列号</view>
		            <view style="width: 300rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">{{airplaneinfo.SNO}}</view>
		        </view>
		        <view style="flex-direction: row;display: flex;">
		            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">客舱构型</view>
	            	<view style="width: 300rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">{{airplaneinfo.RANK}}</view>
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
		            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">循环/小时</view>
		            <view style="width: 300rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">{{engfcl}}/{{timel}}</view>
	        	</view>
		        <view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
		            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">N1最大/平均</view>
		            <view style="width: 300rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">{{VB.MVBL}}/{{VB.VBL}}</view>
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
		            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">循环/小时</view>
		            <view style="width: 300rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">{{engfcr}}/{{timer}}</view>
		        </view>
		        <view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
		            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">N1最大/平均</view>
	            	<view style="width: 300rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">{{VB.MVBR}}/{{VB.VBR}}</view>
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
		            <view style="width: 250rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">{{apu.TOTALCYCLE}}</view>
		        </view>
		        <view style="flex-direction: row;display: flex;justify-items: center;justify-content: center;align-items: center;">
		            <view style="width: 200rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">飞行小时</view>
	            	<view style="width: 250rpx;display: flex;justify-items: center;justify-content: center;align-items: center;box-shadow:0 0 0 1px #feaa9e,0 0 0 1px #fd696f">{{aputime}}</view>
		        </view>
		 <view style="height: 20px;"></view>
		</view>
	</view>
	</view>
	<view style="height: 10px;"></view>
		<view style="display: flex;flex-direction: row;">
			<echarts :option="fadongji" style="height: 600rpx;width: 1000rpx;" ></echarts>
            <echarts :option="jisheng" style="height: 600rpx;width: 1000rpx;" ></echarts>
			<echarts :option="tongyong" style="height: 600rpx;width: 1000rpx;" ></echarts>
		    <echarts :option="kecang" style="height: 600rpx;width: 1000rpx;" ></echarts>
		</view>



	</view>
</template>

<script>
import echarts from '@/components/echarts/echarts.vue'

	export default {
		data() {
			return {
				VDFCDATE:"",
				zong:'0',
				lingchu:"0",
				zhongduan:"0",
				wangong:"0",
				weiling:"0",
				airplane:'',
				airplaneinfo:'',
                beijingdate:'',
				utcdate:'',
				loading:false,
                option: {},
				admin:'',
				userFeedbackHidden: true, // 默认隐藏
				feedbackContent: '' ,// 输入数量
				second:30,
				overtimer:null,
				Acheck:"N/A",
				inputValue:'',
				value:'',
				power:'',
				url:'',
				engfcl:'',
				engfcr:'',
				ACNO:'',
				VDFCAIR:'N/A',
				VDFCLD:'N/A',
				timel:"N/A",
				timer:"N/A",
				VB:'N/A',
				apu:{
					MODEL:"N/A",
					APUSN:"N/A",
					TOTALCYCLE:"N/A"
				},
				aputime:"N/A",
				eng:'N/A',

	tongyong :{   
		title: {
        text: '通用组工卡',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a}-{b} : {c} ({d}%)'
    },
   
    series: [
        {
            name: '工卡状态',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '40%'],
            label: {
                position: 'inner',
                fontSize: 14,
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 0, name: '领出'},
                {value: 0, name: '完工'},
                {value: 0, name: '中断'}
            ]
        },
        {
            name: '手上工卡',
            type: 'pie',
            radius: ['45%', '60%'],
            labelLine: {
                length: 30,
            },
            label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}    ',
                backgroundColor: '#F6F8FC',
                borderColor: '#8C8D8E',
                borderWidth: 1,
                borderRadius: 4,
                
                rich: {
                    a: {
                        color: '#6E7079',
                        lineHeight: 22,
                        align: 'center'
                    },
                    hr: {
                        borderColor: '#8C8D8E',
                        width: '100%',
                        borderWidth: 1,
                        height: 0
                    },
                    b: {
                        color: '#4C5058',
                        fontSize: 14,
                        fontWeight: 'bold',
                        lineHeight: 33
                    },
                    per: {
                        color: '#fff',
                        backgroundColor: '#4C5058',
                        padding: [3, 4],
                        borderRadius: 4
                    }
                }
            },
            data: [
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
            ]
        }
    ]
},
				jisheng :{   
		title: {
        text: '机身组工卡',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a}-{b} : {c} ({d}%)'
    },
    
    series: [
        {
            name: '工卡状态',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '40%'],
            label: {
                position: 'inner',
                fontSize: 14,
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 0, name: '领出'},
                {value: 0, name: '完工'},
                {value: 0, name: '中断'}
            ]
        },
        {
            name: '手上工卡',
            type: 'pie',
            radius: ['45%', '60%'],
            labelLine: {
                length: 30,
            },
            label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}    ',
                backgroundColor: '#F6F8FC',
                borderColor: '#8C8D8E',
                borderWidth: 1,
                borderRadius: 4,
                
                rich: {
                    a: {
                        color: '#6E7079',
                        lineHeight: 22,
                        align: 'center'
                    },
                    hr: {
                        borderColor: '#8C8D8E',
                        width: '100%',
                        borderWidth: 1,
                        height: 0
                    },
                    b: {
                        color: '#4C5058',
                        fontSize: 14,
                        fontWeight: 'bold',
                        lineHeight: 33
                    },
                    per: {
                        color: '#fff',
                        backgroundColor: '#4C5058',
                        padding: [3, 4],
                        borderRadius: 4
                    }
                }
            },
            data: [
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				
				
            ]
        }
    ]
},
				fadongji :{   
		title: {
        text: '发动机组工卡',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a}-{b} : {c} ({d}%)'
    },
    
    series: [
        {
            name: '工卡状态',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '40%'],
            label: {
                position: 'inner',
                fontSize: 14,
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 0, name: '领出'},
                {value: 0, name: '完工'},
                {value: 0, name: '中断'}
            ]
        },
        {
            name: '手上工卡',
            type: 'pie',
            radius: ['45%', '60%'],
            labelLine: {
                length: 30,
            },
            label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}    ',
                backgroundColor: '#F6F8FC',
                borderColor: '#8C8D8E',
                borderWidth: 1,
                borderRadius: 4,
                
                rich: {
                    a: {
                        color: '#6E7079',
                        lineHeight: 22,
                        align: 'center'
                    },
                    hr: {
                        borderColor: '#8C8D8E',
                        width: '100%',
                        borderWidth: 1,
                        height: 0
                    },
                    b: {
                        color: '#4C5058',
                        fontSize: 14,
                        fontWeight: 'bold',
                        lineHeight: 33
                    },
                    per: {
                        color: '#fff',
                        backgroundColor: '#4C5058',
                        padding: [3, 4],
                        borderRadius: 4
                    }
                }
            },
            data: [
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
				{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},

            ]
        }
    ]
},
				kecang :{   
		title: {
        text: '客舱组工卡',
        left: 'center',
		
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a}-{b} : {c} ({d}%)'
    },
    
    series: [
        {
            name: '工卡状态',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '40%'],
            label: {
                position: 'inner',
                fontSize: 14,
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 0, name: '领出'},
                {value: 0, name: '完工'},
                {value: 0, name: '中断'}
            ]
        },
        {
            name: '手上工卡',
            type: 'pie',
            radius: ['45%', '60%'],
            labelLine: {
                length: 30,
            },
            label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}    ',
                backgroundColor: '#F6F8FC',
                borderColor: '#8C8D8E',
                borderWidth: 1,
                borderRadius: 4,
                
                rich: {
                    a: {
                        color: '#6E7079',
                        lineHeight: 22,
                        align: 'center'
                    },
                    hr: {
                        borderColor: '#8C8D8E',
                        width: '100%',
                        borderWidth: 1,
                        height: 0
                    },
                    b: {
                        color: '#4C5058',
                        fontSize: 14,
                        fontWeight: 'bold',
                        lineHeight: 33
                    },
                    per: {
                        color: '#fff',
                        backgroundColor: '#4C5058',
                        padding: [3, 4],
                        borderRadius: 4
                    }
                }
            },
            data: [
                {value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
                {value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
                {value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
                {value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
                {value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
                {value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
                {value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
                {value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
                {value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
                {value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
                {value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
                {value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
                {value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
                {value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
                {value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
                {value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
                {value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
                {value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
                {value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
                {value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
                {value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
                {value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},{value: '', name: ''},
            ]
        }
    ]
}, 
			}
		},
		created() {
			this.loading= true
			setTimeout(()=>{
				
				this.loading = false
			},200)
		},
		components: {
					echarts
				},
        

		methods: {
			
			getdate:function(){
				Date.prototype.Format = function (fmt) { //author: meizz 
				    var m = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Spt", "Oct", "Nov", "Dec");
				    var o = {
				        "Z+": this.getMonth() + 1, //月份 
				        "d+": this.getDate(), //日 
				        "h+": this.getHours(), //小时 
				        "m+": this.getMinutes(), //分 
				        "s+": this.getSeconds(), //秒 
				        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
				        "S": this.getMilliseconds()  //毫秒  
				    };
				    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
				    if (/(ENM)/.test(fmt)) fmt = fmt.replace('ENM', m[this.getMonth()]) //ENM用来返回英文日期格式用的
				    for (var k in o)
				        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
				
				    return fmt;
				    }
				this.utcdate=new Date(+new Date()-8*3600*1000).Format("dd-ENM-yyyy hh:mm:ss");	
				this.beijingdate= (new Date()).Format("yyyy-ZZ-dd hh:mm:ss");
				
				   const that=this
				 setTimeout(function(){
				 that.getdate()
				 },1000)
			},
	  onLoad:function(){
		 
			this.admin = uni.getStorageSync('admin');
				if(this.admin==10){
					this.power="管理员"
				};
				if(this.admin==1){
					this.power="用户"
				};
		this.url="http://xszhushou.picp.vip"
        const adminname = uni.getStorageSync('HCname');
        const airplane = uni.getStorageSync('airplane');
		const date = uni.getStorageSync('date');
		this.adminname=adminname;
		this.airplane=airplane;
		this.date=date;
				const db = uniCloud.database();
								db.collection('airplane')
								.where({
									ACNO:this.airplane
								})
								.get()
								.then(res=>{
									this.airplaneinfo=res.result.data[0]
								})
             this.countdown();
			 this.searchjob();
			 this.getdate();
			this.getairplane();
			this.geteng();
			this.getapu();
              
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
			change:function(){
					   uni.reLaunch({
					   	url:"../change/change"
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
				
						   
				        
				if(str.match(V2500)){
				wx.request({
				  url: this.url+'/php/search-v2500engv.php',
				  data:{
				    'ACNO':this.ACNO 
				  },
				  method:'POST',
				  header: { 'Content-Type': 'application/x-www-form-urlencoded' },
				  success: (res) => {
				    
				    this.VB=res.data
				    
				  }, 
					 })
					 };
				
				
				if(str.match(CFM56)){
				  wx.request({
				    url: this.url+'/php/search-cfm56engv.php',
				    data:{
				      'ACNO':this.ACNO 
				    },
				    method:'POST',
				    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
				    success: (res) => {
				      
				      this.VB=res.data
				      
				    },    
				  
				  })  };
			      if(str.match(PW1100)){
				    wx.request({
				      url: this.url+'/php/search-pw1100engv.php',
				      data:{
				        'ACNO':this.ACNO 
				      },
				      method:'POST',
				      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
				      success: (res) => {
				       
				        this.VB=res.data
				        
				      },    
				    
				    })  };
					
					
					
				},
				
				});
				this.sure()
				},
				
			sure:function(){
				const db = uniCloud.database();
				db.collection('sure')
				.where({
					机号:this.airplane
				})
				.get()
				.then(res =>{
				
					console.log("sure",res)
					if(res.result.affectedDocs>0){
					this.VDFCAIR=res.result.data[0].VDFCAIR;
					this.VDFCLD=res.result.data[0].VDFCLD;
					this.VDFCDATE="已核实";
					this.timel=res.result.data[0].timel;
					this.timer=res.result.data[0].timer;
					this.engfcl=res.result.data[0].engfcl;
					this.engfcr=res.result.data[0].engfcr;
					this.aputime=res.result.data[0].aputm;
					this.apu.TOTALCYCLE=res.result.data[0].apufc;
					
					}
				});
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
			
	
			
			searchjob:function(){
				this.jisheng=this.$options.data().jisheng;
                this.fadongji=this.$options.data().fadongji;
				this.tongyong=this.$options.data().tongyong;
				this.kecang=this.$options.data().kecang;
				const db = uniCloud.database();
				db.collection('gongka')
				.where({
					机号:this.airplane,
					安排日期:this.date
				})
				.limit(1).get()
				.then(res =>{
					if(res.result.data.length>0){
						this.Acheck=res.result.data[0].维修等级;
					}
					
				});
				db.collection('gongka')
				.where({
					机号:this.airplane,
					安排日期:this.date
				})
				.groupBy('状态')
				.groupField('count(*)as 计数')
				.get()
				.then(res => {
					
					let i= 0;
					let o_length=res.result.data.length
					for (; i < o_length; i++) { 
					if(res.result.data[i].状态=='领出'){
						this.lingchu=res.result.data[i].计数;
						}
					if (res.result.data[i].状态=='完工') {
						this.wangong=res.result.data[i].计数;
					}
					if (res.result.data[i].状态=='中断') {
						this.zhongduan=res.result.data[i].计数;
					}
					}
				});
				db.collection('gongka')
				.where({
					机号:this.airplane,
					安排日期:this.date
				})
				.groupBy('机号')
				.groupField('count(*)as 计数')
				.get()
				.then(res => {
				
				this.zong=res.result.data[0].计数	
				this.weiling=this.zong-this.lingchu-this.zhongduan-this.wangong
				});
				
				db.collection('gongka')
				.where({
					机号:this.airplane,
					安排日期:this.date
				})
				.groupBy('组别,状态')
				.groupField('count(*)as 计数')
				.get()
				.then(res => {
					
					let i= 0;
					let o_length=res.result.data.length
					for (; i < o_length; i++) { 
					if(res.result.data[i].组别=='A'& res.result.data[i].状态=='领出'){
						this.jisheng.series[0].data[0].value=res.result.data[i].计数;
						}
					if (res.result.data[i].组别=='A'& res.result.data[i].状态=='完工') {
						this.jisheng.series[0].data[1].value=res.result.data[i].计数;
					}
					if (res.result.data[i].组别=='A'& res.result.data[i].状态=='中断') {
						this.jisheng.series[0].data[2].value=res.result.data[i].计数;
					}	
					if(res.result.data[i].组别=='B'& res.result.data[i].状态=='领出'){
						this.fadongji.series[0].data[0].value=res.result.data[i].计数;
						}
					if (res.result.data[i].组别=='B'& res.result.data[i].状态=='完工') {
						this.fadongji.series[0].data[1].value=res.result.data[i].计数;
					}
					if (res.result.data[i].组别=='B'& res.result.data[i].状态=='中断') {
						this.fadongji.series[0].data[2].value=res.result.data[i].计数;
					}
					if(res.result.data[i].组别=='C'& res.result.data[i].状态=='领出'){
						this.tongyong.series[0].data[0].value=res.result.data[i].计数;
						}
					if (res.result.data[i].组别=='C'& res.result.data[i].状态=='完工') {
						this.tongyong.series[0].data[1].value=res.result.data[i].计数;
					}
					if (res.result.data[i].组别=='C'& res.result.data[i].状态=='中断') {
						this.tongyong.series[0].data[2].value=res.result.data[i].计数;
					}
					if(res.result.data[i].组别=='客舱'& res.result.data[i].状态=='领出'){
						this.kecang.series[0].data[0].value=res.result.data[i].计数;
						}
					if (res.result.data[i].组别=='客舱'& res.result.data[i].状态=='完工') {
						this.kecang.series[0].data[1].value=res.result.data[i].计数;
					}
					if (res.result.data[i].组别=='客舱'& res.result.data[i].状态=='中断') {
						this.kecang.series[0].data[2].value=res.result.data[i].计数;
					}
					}
					})
					.catch(err => {
					 
					});
					db.collection('gongka')
					.where({
						机号:this.airplane,
						安排日期:this.date
					})
					.groupBy('负责人,组别,状态')
					.groupField('count(*)as 计数')
					.get()
					.then(res => { 
						
					
						let i= 0;
						let o_length=res.result.data.length
						for (; i < o_length; i++) { 
							if (res.result.data[i].组别=='A'& res.result.data[i].状态=='领出') {
								this.jisheng.series[1].data[i].value=res.result.data[i].计数;
								this.jisheng.series[1].data[i].name=res.result.data[i].负责人;
							}
							if (res.result.data[i].组别=='B'& res.result.data[i].状态=='领出') {
								this.fadongji.series[1].data[i].value=res.result.data[i].计数;
								this.fadongji.series[1].data[i].name=res.result.data[i].负责人;
							}
							if (res.result.data[i].组别=='C'& res.result.data[i].状态=='领出') {
								this.tongyong.series[1].data[i].value=res.result.data[i].计数;
								this.tongyong.series[1].data[i].name=res.result.data[i].负责人;
								
							}
							if (res.result.data[i].组别=='客舱'& res.result.data[i].状态=='领出') {
								this.kecang.series[1].data[i].value=res.result.data[i].计数;
								this.kecang.series[1].data[i].name=res.result.data[i].负责人;
							}
				        }
						
				        })
				        .catch(err => {
				         
				        })
										
				this.$forceUpdate();						
				this.overtimer=setTimeout(()=>{
									
									this.searchjob()
									this.second=30
								},30000)
				this.$once('hook:beforeDestroy',()=>{
					clearInterval(this.overtimer);
					this.overtimer=null
				})								
			},
			
				countdown:function() {
				  var second = this.second
				  if (second == 0) {
				      this.second= "0",
				      this.isDisabled=false ,
				      this.nosDisabled=true
				    return ;
				  }
				     this.second= second - 1
				     const that=this
				   setTimeout(function(){
				   that.countdown()
				   },1000)
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
			choose:function(){				
				uni.removeStorageSync('airplane');
				uni.removeStorageSync('date');		
				uni.reLaunch({
					url:"../choose/choose"
				})
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
			showDiv() { // 显示输入弹出框
				this.userFeedbackHidden = false;
			},
			hideDiv() { // 隐藏输入弹出框
				this.userFeedbackHidden = true;
			},
			yanzhen: function(event) {
			    this.inputValue = event.target.value;
				this.submitFeedback()
				},
			submitFeedback() { // 提交
		
			if(this.inputValue=="86663897"){
				this.userFeedbackHidden = true;
				uni.showModal({
					title: '警告！！！',
					content: '确认清除所有工作信息？',
					success: function (res) {
						if (res.confirm) {
							uniCloud.callFunction({
								name:"clean",
								success(res){
									console.log(res)
									uni.showToast({
										title: '删除成功',
										duration: 2000
									});
									
								},
								fail:err=>{
										uni.showModal({
											title: '提示',
											content: '删除失败',
											success: function (res) {
												if (res.confirm) {
													
												} else if (res.cancel) {
													
												}
											}
										});
									
								}
							})
						
						} else if (res.cancel) {
							
						}
					}
				});
				} // 提交内容
				else{
					this.userFeedbackHidden = true;
					uni.showToast({
						title: '密码错误',
						duration: 2000
					});
				}
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
