// pages/order1/index.js
var app = getApp(),
  $ = app.requirejs("core"),
  s = app.requirejs("jquery");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderNo: "",
    orderid: '',
    // url:'https://mall.epaikj.com/wap/order.php',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    if (options.orderNo) {
      this.setData({
        orderNo: options.orderNo,
      });
    } else if (options.orderid) {
      this.setData({
        orderid: options.orderid,
      });
    }
    console.log(this.data);


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
    // let users = wx.getStorageSync('user');
    // if(res.from === 'button'){}
    // return {
    //   title:"转发",
    //   path : this.url+"userid="+users.id,
    //   success:function(res){
    //     $.alert(res);
    //   }
    // }
  }
})