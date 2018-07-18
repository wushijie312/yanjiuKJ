//app.js

// const config = require('src/config.js');
App({
  onLaunch: function () {
    // this.config = config;  

    // console.log(this.config);
    // wx.setNavigationBarColor({
    //   frontColor: '#ffffff',
    //   backgroundColor:"#f90"
    // });
    // wx.setNavigationBarTitle({
    //   title: '我是通过API设置的NavigationBarTitle'
    // })
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())

    wx.login({
      // 获取code
      success: function(res) {
        var openid = res.code //返回code
        if(openid){
          wx.request({
            url: 'http://wechatapp.yangguangqicai.com/interface/WeChatSessionId?code='+openid, //仅为示例，并非真实的接口地址
            header: {
              'content-type': 'application/json',
            },
            success: function(res) {
              // console.log(res.data);
              if(res.data.Success==true){
                wx.setStorageSync('SessionId',res.data.Message);

                // wx.redirectTo({
                //   url: '../login/index'
                // });
              }else{
                  wx.showToast({
                    title: res.data.Message,
                    // icon: 'fail',
                    image: '/images/error.png',
                    duration: 1200
                  })
              }
            },
            fail:function(){
              wx.showToast({
                title: res.data.Message,
                image: '/images/error.png',
                duration: 1200
              })
            }
          });
        }
      }
    })

    
  },

})