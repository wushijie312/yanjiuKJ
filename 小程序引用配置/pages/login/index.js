//index.js
//获取应用实例
const app = getApp()
// getApp().config.xxxcolor
Page({
  data: {
    verifyCode:''
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  inputVerifyCodeTap:function(e){
    this.setData({
      verifyCode:e.detail.value
    });
  },
  signInTap: function() {
    var sessionid= wx.getStorageSync('SessionId');
    // console.log(sessionid);
    wx.request({
      url: 'http://wechatapp.yangguangqicai.com/interface/LoginVerifyCode', //仅为示例，并非真实的接口地址
      data:{
        sessionid:sessionid,
        verifyCode:this.data.verifyCode
      },
      header: {
        'content-type': 'application/json',
      },
      success: function(res) {
        if(res.data.Success==true){
          wx.redirectTo({
            url: '../index/index'
          });
        }else{
            wx.showToast({
              title: res.data.Message,
              image: '../../images/error.png',
              duration: 1200
            })
        }
      },
      fail:function(){
        wx.showToast({
          title: res.data.Message,
          image: '../../images/error.png',
          duration: 1200
        })
      }
    })
  },
  
})
