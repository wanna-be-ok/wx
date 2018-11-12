//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    list: ["美容","美发","美甲","接睫毛","化妆","变脸"],
    index:0,
    num:0,
    addrs:["Tom 北京市朝阳区朝外大街 麒麟公馆 ","Jerry 北京市海淀区 幸福家园"]
  },
  onLoad: function () {
  },
  chanegList: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  chanegAddr: function (e) {
    this.setData({
      num: e.detail.value
    })
  },
  goZj: function (e) {
    let pid = e.currentTarget.dataset.pid;
    wx.navigateTo({
      url: '/pages/zj/zj?id='+pid,
    })
  }
  
})
