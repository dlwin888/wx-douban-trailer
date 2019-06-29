// page/user/user.js
Page({
  data: {
    avatarUrl: '',
    nickName: '未知',
    movies: []
  },

  onLoad (options) {
    wx.getUserInfo({
      success: (res) => {
        this.setData({
          avatarUrl: res.userInfo.avatarUrl,
          nickName: res.userInfo.nickName
        })
      }
    })
  },

  onShow() {
    let history = wx.getStorageSync('history')

    if (history) {
      this.setData({
        movies: history.slice(0, 2)
      })
    }
  },

  gotoHistory () {
    wx.navigateTo({
      url: '../history-list/history-list',
    })
  },

  gotoShare () {
    wx.navigateTo({
      url: '../share/share',
    })
  },

  gotoDetail(e) {
    const { movieData } = e.currentTarget.dataset
    const { id } = movieData
    
    wx.navigateTo({
      url: '../movie-detail/detail?id=' + id
    })
  },
  /**
 * 用户分享自定义
 */
  onShareAppMessage: function (res) {
    return {
      title: '快来一起观海听涛',
      path: '/page/index/index',
      imageUrl: '/assets/image/QRcode.jpg'//自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持PNG及JPG。显示图片长宽比是 5:4。
    }
  }
})