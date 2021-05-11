<template>
    <view class="content" >
        <!-- <image class="logo" src="../../static/logo.png"></image> -->
        <view class="titletal">
            <text class="title">{{ title }}</text>
			<view style="height: 4px;"></view>
			<view style="color: #66CDAA;">当前版本：1.0.0</view>
        </view>
        <from name="from1">
            <!--员工号-->
            <view class="inputView">
                <image class="nameImage" src="@/res/img/name.png"></image>
                <label class="loginLab">员工号</label>
                <input
                    class="inputText"
                    type="number"
					:focus="Focus1"
					@confirm="next1"
                    placeholder="请输入员工号"
                    value="user"
                    v-model="uname"
                />
            </view>
        </from>
        <view class="line"></view>
        <!--密码-->
        <view class="inputView">
            <image class="keyImage" src="@/res/img/key.png"></image>
            <label class="loginLab">密码</label>
            <input
                class="inputText"
                password="true"
                type="text"
				:focus="Focus2"
				@confirm="lands"
                placeholder="请输入密码"
                value="pass"
                v-model="passw"
				
            />
        </view>
        <!-- 记住密码 -->
        <view class=" mui-input-row mui-checkbox ">
            <!-- <input id="chkRem" type="checkbox" checked="checked" class="RememberCheck"  @change="checkboxChange" /> -->
            <checkbox-group @change="checkboxChange">
                <checkbox
                    id="chkRem"
                    type="checkbox"
                    :checked="rememberPsw"
                    @tap="rememberPsw = !rememberPsw"
                    class="RememberCheck"
                >
                    记住密码
                </checkbox>
                <!-- <lable for="chkRem" class="RememberPass">记住密码</lable> -->
            </checkbox-group>
			<view class="change" @tap="change">修改密码</view>
        </view>
         
        <!--按钮-->
        <view class="loginBtnView"><button class="loginBtn" @tap="lands">登录</button></view>

 <!--背景图-->      
<image class="backlogo" src="@/static/beijing.jpg"></image>
    </view>
</template>

<script>
var self;

export default {
    data() {
        lists: [], (self = this);
        return {
            title: '工卡站管理系统',
            uname: '',
            passw: '',
			Focus1 : true,
			Focus2 : false,
            rememberPsw: true
        };
    },
    //页面初始加载
    mounted() {
        let that = this;

        //缓存的账号
        const HCuname = uni.getStorageSync('HCuname');
        //缓存的密码
        const HCpassw = uni.getStorageSync('HCpassw');
        
        //有缓存就赋值给文本没有就清空
        if (HCuname && HCpassw) {
           uni.reLaunch({
               url: '../choose/choose',
           
           });
        } else {
            that.uname = '';
            that.passw = '';
        }
    },
    methods: {
       change:function(){
		   uni.reLaunch({
		   	url:"../change/change"
		   })
	   },
        //登陆
     lands:function() {
            if (this.uname.length <= 0 || this.passw.length <= 0) {
                uni.showToast({
                    title: '员工号或密码不能为空',
                    icon: 'none'
                });
                return;
            } else {
					uni.showToast({
			        title: '正在登陆',
				    icon: 'loading'
				   });
             
             const db = uniCloud.database()
			 const INID=this.uname
			 const INPW=this.passw
                      db.collection('user').where({
                        "员工号":INID,
			            "密码":INPW
                }) .get()

              .then((res) => {
		
                                if (res.result.data.length != 0) {

									console.log(res)
                                    //缓存账号和密码
                                    if (this.rememberPsw) {

										uni.setStorage({
										    key: 'HCuname',
										    data: res.result.data[0].员工号,
										    success: function () {
										      
										    }
										});
                                    uni.setStorage({
                                        key: 'HCpassw',
                                        data: res.result.data[0].密码,
                                        success: function () {
                                          
                                        }
                                    });
									uni.setStorage({
									    key: 'HCname',
									    data: res.result.data[0].姓名,
									    success: function () {
									     
									    }
									});
									uni.setStorage({
									    key: 'admin',
									    data: res.result.data[0].权限,
									    success: function () {
									     
									    }
									});
									setTimeout(function(){
										uni.showToast({
										    title: '登陆成功',
										    icon: 'success'
										});
									uni.reLaunch({
									    url: '../index/index',
									
									});
									},500)

                                      } else {
                                    uni.removeStorageSync('HCuname');
                                    uni.removeStorageSync('HCpassw');
									uni.removeStorageSync('HCname');
									uni.removeStorageSync('admin');
//                                         that.uname = '';
//                                         that.passw = '';
                                    }

                                } else {
                                    uni.showToast({
                                        title: '员工号或密码错误',
                                        icon: 'none'
                                    });
                                } 

              })               
           }
        },
next1:function(){
				this.jobinfo.data=[''],
				this.userinfo=[''],
				this.word=[],
				this.getFocus('Focus2')
			},
			getFocus(nextfocus){
						this[nextfocus] = false     // 不能使用点语法
						this.$nextTick(()=>{
							this[nextfocus] = true
						})
					},
        //复选框
        checkboxChange: function(e) {
        
            
            if (e.detail.value.length == 1) {
    
                //获取缓存的账号
										uni.setStorage({
										    key: 'HCuname',
										    data: res.result.data[0].员工号,
										    success: function () {
										        
										    }
										});
                                    uni.setStorage({
                                        key: 'HCpassw',
                                        data: res.result.data[0].密码,
                                        success: function () {
                                         
                                        }
                                    });
									uni.setStorage({
									    key: 'HCname',
									    data: res.result.data[0].姓名,
									    success: function () {
									      
									    }
									});
									uni.setStorage({
									    key: 'admin',
									    data: res.result.data[0].权限,
									    success: function () {
									     
									    }
									});
                                      } else {
                                    uni.removeStorageSync('HCuname');
                                    uni.removeStorageSync('HCpassw');
									uni.removeStorageSync('HCname');
									uni.removeStorageSync('admin');
            }
        }
    }
};
</script>

<style>
.mui-checkbox input[type='checkbox']:checked:before {
    color: #00bbb1;
}
.RememberPass {
    color: #adadad;

    margin-top: 5px;
}
.RememberCheck {
    margin-left: -50%;
	margin-left: -120px;
    margin-top: 10px;
    color: #adadad;
}
.change {
    margin-left: -50%;
	margin-left: 120px;
    margin-top: -22px;
	
    color: #ffffff;
}
.content {
    text-align: center;
   
	align-items: center;
	justify-items: center;
	flex-direction: column;
	display: flex;
}
.backlogo {
    padding-bottom: 0px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
}
.logo {
    height: 200upx;
    width: 200upx;
    margin-top: 200upx;
}
.titletal {
    margin-top: 90upx;
    height: 75px;
}
.title {
    /* font-size: 36upx; */
    color: mediumaquamarine;
    font-size: xx-large;
	font-weight: 900;
}

.text {
    border: 1, solid, black;
}

.login-from {
    /* margin-top: 30%; */

    flex: auto;
    height: 100%;
    width: 100%;
}

.inputView {
	width: 700rpx;
    background-color: #fff;
    line-height: 50px;
    border-width: 1px;
    border-bottom: 2dp;
}

/*输入框*/
.nameImage,
.keyImage {
    margin-left: 22px;
    width: 18px;
    height: 18px;
}

.loginLab {
    margin: 15px 15px 15px 10px;
    color: #545454;
    font-size: 18px;
}

.inputText {
    flex: block;
    float: right;
    text-align: left;
    margin-right: 22px;
    margin-top: 15px;
    color: #000000;
    font-size: 18px;
}
.line {
    width: 16%;
    height: 1px;
    background-color: #cccccc;
    margin-top: 1px;
}

/*按钮*/
.loginBtnView {
    width: 100%;
    height: auto;
    /* background-color:#FFFFFF; */
    margin-top: 20px;
    margin-bottom: 0px;
    padding-bottom: 0px;
}

.loginBtn {
    width: 10%;
    margin-top: 50px;
    background-color: mediumaquamarine;
    color: aliceblue;
}
</style>