//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    moban:{ban_1:true,ban_2:false,ban_3:false,ban_4:false},
    templateList:'',
    templateId:''
  },
  //事件处理函数
  indexTap: function() {
    var sessionid= wx.getStorageSync('SessionId');
    // console.log(sessionid);
    wx.request({
      url: 'http://wechatapp.yangguangqicai.com/interface/GetTemplate', //仅为示例，并非真实的接口地址
      data:{
        sessionid:sessionid,
        templateId:this.templateId
      },
      header: {
        'content-type': 'application/json',
      },
      success: function(res) {
        if(res.data.Success==true){
          wx.redirectTo({
            url: '../fillUserInfo/index/index'
          });
        }else{
            wx.showToast({
              title: res.data.Message,
              image: '/images/error.png',
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
    });
  },
  changeMoban:function(e) {
    for(var j=1;j<5;j++){
        var num=e.currentTarget.dataset.id;
        var datas={moban:this.data.moban}
        var len='ban_'+j;
        if(num==j){
          datas.moban[len]=true;
        }else{
          datas.moban[len]=false;
        }
        
    }
    this.setData(datas);

  },
  onLoad: function () {
    var sessionid= wx.getStorageSync('SessionId');
    // console.log(sessionid);
    wx.request({
      url: 'http://wechatapp.yangguangqicai.com/interface/GetTemplateListBagde', //仅为示例，并非真实的接口地址
      data:{
        sessionid:sessionid,
      },
      header: {
        'content-type': 'application/json',
      },
      success: function(res) {
        if(res.data.Success==true){
          this.setData({
            templateList: res.data.Message
          })
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
  }
})
