//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: ["../../image/banner_01.png", "../../image/banner_02.png", "../../image/banner_03.png","../../image/banner_04.png"],
    mimg: ["../../image/recommend_img_01.png", "../../image/recommend_img_02.png", "../../image/recommend_img_03.png", "../../image/recommend_img_04.png", "../../image/recommend_img_05.png","../../image/recommend_img_06.png"],
    mh:["美甲","接种睫毛","爱丽丝美发","芭莎造型","美妆","换脸"],
    mprice: ["209", "599", "999", "699", "39", "19999"],
    mtitle: ["男人可以美", "女人可以美", "都可以美", "随便美", "便宜美", "有钱才能美"],
    colors: ['red', 'orange', 'yellow', 'green', 'purple'],
    classname:'n0',
    xiha:0
  },
  changeColor:function(e){
    this.setData({
      classname: "n" + e.currentTarget.dataset.index,
      xiha: e.currentTarget.dataset.index
    });
    console.log(this.data.classname)
    
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
  goProduct:function(e){
    let id = e.target.dataset.id;
    wx.navigateTo({
      url: '/pages/product/product?id='+id,
    })
  }
})