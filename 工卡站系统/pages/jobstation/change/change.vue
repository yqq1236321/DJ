<template>
    <view class="content" >
        <!-- <image class="logo" src="../../static/logo.png"></image> -->
        <view class="titletal">
            <text class="title">{{ title }}</text>
			<view style="height: 4px;"></view>
			
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
            <label class="loginLab">原密码</label>
            <input
                class="inputText"
                password="true"
                type="text"
				:focus="Focus2"
				@confirm="next2"
                placeholder="请输入原密码"
                value="pass"
                v-model="passw"
				
            />
        </view>
		<view class="line"></view>
		<view class="inputView">
		    <image class="keyImage" src="@/res/img/key.png"></image>
		    <label class="loginLab">新密码</label>
		    <input
		        class="inputText"
		        password="true"
		        type="text"
				:focus="Focus3"
				@confirm="next3"
		        placeholder="请输入新密码"
		        value="pass"
		        v-model="newpassw"
				
		    />
		</view>
		<view class="line"></view>
		<view class="inputView">
		    <image class="keyImage" src="@/res/img/key.png"></image>
		    <label class="loginLab">新密码</label>
		    <input
		        class="inputText"
		        password="true"
		        type="text"
				:focus="Focus4"
		        placeholder="请再次输入新密码"
		        value="pass"
		        v-model="snewpassw"
				@confirm="lands"
		    />
		</view>
        <!-- 记住密码 -->


        <!--按钮-->
        <view class="loginBtnView"><button class="loginBtn" @tap="lands">确定</button></view>

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
            title: '更改密码',
            uname: '',
            passw: '',
			newpassw:'',
			snewpassw:'',
			Focus1 : true,
			Focus2 : false,
			Focus3 : false,
			Focus4 : false,
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
           that.uname = HCuname;
           that.passw = HCpassw;
        } else {
            that.uname = '';
            that.passw = '';
        }
    },
    methods: {
        //             //用户名：
        //         nameChange:function(e){
        //             this.uname=e.traget.value
        //         },
        //         //密码：
        //         passChange:function(e){
        //             this.passw=e.traget.value
        //         },

        //登陆
     lands:function() {
	        
            if (this.uname.length <= 0 || this.passw.length <= 0) {
                uni.showToast({
                    title: '员工号或密码不能为空',
                    icon: 'none'
                });
               return;
             }
            if(this.newpassw!=this.snewpassw){
				uni.showToast({
				   title: '新密码两次不一致',
				     icon: 'none'
				  });
				return;
			}
			if(this.passw==this.newpassw){
				uni.showToast({
				   title: '新密码不能与旧密码相同',
				     icon: 'none'
				  });
			                                                           
			return;
			 
            } else {
					uni.showToast({
			        title: '正在更改密码',
				    icon: 'loading'
				   });
             
             const db = uniCloud.database()
			 const INID=this.uname
			 const INPW=this.passw
                      db.collection('user').where({
                        "员工号":INID,
			            "密码":INPW
                }) .update({
				"密码":this.newpassw 
			 })

              .then((res) => {
				  console.log(res.result)
		                        if (res.result.updated != 0) {
                              uni.showToast({
                                  title: '修改成功！请重新登陆',
                                  icon: 'success'
                              });
									setTimeout(function(){
										uni.removeStorageSync('HCuname');
										uni.removeStorageSync('HCpassw');
										uni.removeStorageSync('HCname');
										uni.removeStorageSync('admin');
										
									uni.reLaunch({
									    url: '../login/login',
									
									});
									},1000)

                                      

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
			next2:function(){
							this.jobinfo.data=[''],
							this.userinfo=[''],
							this.word=[],
							this.getFocus('Focus3')
						},
						next3:function(){
										this.jobinfo.data=[''],
										this.userinfo=[''],
										this.word=[],
										this.getFocus('Focus4')
									},
			getFocus(nextfocus){
						this[nextfocus] = false     // 不能使用点语法
						this.$nextTick(()=>{
							this[nextfocus] = true
						})
					},
       
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
    margin-top: 10px;
    color: #adadad;
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