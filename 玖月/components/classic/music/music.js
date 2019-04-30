// components/classic/movie/movie.js

const innerAudioContext = wx.createInnerAudioContext();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlay:true,
    play:'images/play.png',
    pause:'images/pause.png',
    videoSrc:'http://dl.stream.qqmusic.qq.com/M500000qJ4H21yDGVW.mp3?vkey=BE954A00B3D1A422874EF70D4EAF66891F47F3D4EFB0F12ADC8783B35840525977A42B239A3CFFB59DB0C170BBA8F4984FFBC056FC428E02&guid=5150825362&fromtag=1',
    rotateIndex: '',
    animationData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.hindlePlay();
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  hindlePlay(){
    let that=this;
    innerAudioContext.src=this.data.videoSrc;
   
    innerAudioContext.play();

    // innerAudioContext.onPause(()=>{
    //   console.log("暂停")
    // });
    this.setData({
      isPlay:false
    })
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "linear"
    })
    this.animation = animation;
    // animation.rotate(360).step()

    // this.setData({
    //   animationData: animation.export()
    // })

    setTimeout(function () {
      that.data.rotateIndex=that.data.rotateIndex+1;
      that.animation.rotate(360*(that.data.rotateIndex)).step();
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 1000)
  },
  hindleStopPlay(){
    // innerAudioContext.pause();
    
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