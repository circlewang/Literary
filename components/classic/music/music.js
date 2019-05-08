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
    videoSrc:'http://www.170mv.com/kw/other.web.rh01.sycdn.kuwo.cn/resource/n2/57/28/423038354.mp3',
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
    this.setData({
      isPlay:false
    })
    innerAudioContext.src=this.data.videoSrc;
   
    innerAudioContext.play();

    // console.log(innerAudioContext.duration)
    if(this.data.isPlay==false){
      // this.hindlePause();
    }

    // innerAudioContext.offEnded(function(){
    //   console.log("结束")
    // })
    
  },
  hindlePause(){
    setTimeout(()=>{
      console.log(1)
    this.setData({
      isPlay:true
    })
    },1000)
    
     innerAudioContext.pause();
     
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