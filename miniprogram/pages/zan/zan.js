// miniprogram/pages/zan/zan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userIconUrl:"",
    usserName:"",
    desc:"",
    type:0,//1大单图，2多图，3链接,4:4张图
    urls: ["http://img1.imgtn.bdimg.com/it/u=2075088016,198327081&fm=26&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=2075088016,198327081&fm=26&gp=0.jpg", "http://img1.imgtn.bdimg.com/it/u=2075088016,198327081&fm=26&gp=0.jpg",
      "http://img1.imgtn.bdimg.com/it/u=2075088016,198327081&fm=26&gp=0.jpg",],
    url:"",
    zan: ['fjefj', 'dfhsk', 'dfhsk', 'dfhsk', 'dfhsk', 'dfhsk', 'dfhsk', 'dfhsk', 'dfhsk', 'dfhsk', 'dfhsk', 'dfhsk', 'dfhsk', 'dfhsk', 'dfhsk', 'dfhsk']

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var lengthTemp = that.data.urls.length
     this.setData({
       type: lengthTemp
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