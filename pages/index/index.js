// pages/order/order.js
var app = getApp(),
  $ = app.requirejs("core"),
  s = app.requirejs("jquery");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userAddress: {},
    now_store: {},
    nowOrder: {},
    orderNo: "",
    openid: "",
    userid: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      openid: options.openid,
      orderNo: options.orderno,
      userid: options.uid,
    });
    this.getUserInfo(options.orderno, options.uid);

    // this.setData({
    //   openid: "ol6UN5PyfdsuekiJH1iN-I-afrgU",
    //   orderNo: "WJ20190417111149426909",
    //   userid: "1360",
    // });
    // this.getUserInfo("WJ20190417111149426909", "1360");
    console.log(this.data);
  },
  getUserInfo: function (orderno, userid) {
    var pageObj = this;
    var data = { "id": orderno, userid: userid };
    console.log(data);
    $.post("pay/index", data, function (result) {
      console.log(result);
      if (result.error == 0) {
        pageObj.setData({
          userAddress: result.data.userAddress,
          nowOrder: result.data.nowOrder,
          now_store: result.data.now_store,
        });
      } else {
        // console.log(result.data.url);
        // console.log(result.data.url.substring(result.data.url.indexOf("?") + 1));

        if (result.data.url) {
          var param = result.data.url.substring(result.data.url.indexOf("?") + 1);
          wx.navigateTo({
            url: '../order/order?' + param,
          })
        }
      }
    }, "json");

  },
  // 调起支付接口
  payFunc: function () {
    var pageObj = this;
    var orderNo = this.data.orderNo;
    var address_id = this.data.userAddress.address_id;
    var openid = this.data.openid;
    // var address_id = 438;
    var data = { payType: "weixin", orderNo: orderNo, address_id: address_id, is_app: "true", mini_set: "mini_set", miniProgram_openid: openid, userid: this.data.userid };
    console.log(data);
    $.post("pay/payinfo", data, function (result) {
      console.log(result);
      if (result.err_code == 0) {
        var payinfo = result.err_msg;
        wx.requestPayment({
          'timeStamp': payinfo.timeStamp,
          "nonceStr": payinfo.nonceStr,
          "package": payinfo.package,
          "signType": "MD5",
          "paySign": payinfo.paySign,
          "success": function (result) {
            wx.navigateTo({
              url: "../order/order?orderNo=" + orderNo
            })
          },
          "fail": function (result) {
            $.alert("已取消支付");
            console.log(result);
          },
          'complete': function (result) {
            // wx.navigateTo({
            //   url: "../order1/index?orderNo=" + pageObj.data.orderNo
            // })
            // wx.navigateTo({
            //   url: "/pages/order1/index?orderNo=" + pageObj.data.orderNo
            // })
          }
        })
      }
    }, "json");
  },
  getAddress: function(){
    var pageObj = this.data;
    wx.navigateTo({
      url: "../address/address?orderNo=" + pageObj.orderNo + "&userid="+pageObj.userid+"&openid="+pageObj.openid,
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
    // wx.showShareMenu({
    //   withShareTicket: true
    // })
  }
})