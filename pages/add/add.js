// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sheng:["请选择城市","北京","天津","河北"],
    shi: [["请选择城市"],["请选择城市", "北京市"], ["请选择城市", "天津市"], ["请选择城市","重庆市"]],
    index:0,
    num:0,
    saveToastHidden:true
  },
  sheng:function(e){
    this.setData({
      index: e.detail.value
    });
  } 
  ,
  shi:function(e){
    this.setData({
      num: e.detail.value
    });
  }
,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  showToast:function(){
    console.log(1)
    this.setData({
      saveToastHidden: false
    });
  }
  ,
  hideToast:function(){
    this.setData({
      saveToastHidden:true
    });
  }
})