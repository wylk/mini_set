// pages/web/index.js
var app = getApp(),
  $ = app.requirejs("core"),
  s = app.requirejs("jquery");
  console.log(app);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var pageObj = this;
    wx.login({
      success: function (res) {
        console.log(res);
        var data = { code: res.code, store_id: 2 };
        console.log(data);
        $.post('pay/login', data, function (res) {
          console.log(res);
          // $.alert(res);
          pageObj.setData({
            openid: res.msg.openid
          })
        });
      }
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

  }
})