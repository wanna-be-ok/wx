// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0,
    addrs: ["Tom 北京市朝阳区朝外大街 麒麟公馆 ", "Jerry 北京市海淀区 幸福家园"],
    data:'2018-08-30',
    time:'13:00',
    saveToastHidden: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  chanegAddr: function (e) {
    this.setData({
      num: e.detail.value
    })
  },
  checkTime:function(e){
    this.setData({
      data:e.detail.value
    })
  },
  jiaosha:function(e){
    this.setData({
      time:e.detail.value
    })
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
  showToast: function () {
    this.setData({
      saveToastHidden: false
    });
  }
  ,
  hideToast: function () {
    this.setData({
      saveToastHidden: true
    });
  }
})