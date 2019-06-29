import cfg from '../../common/config/index.js'

Page({
  data: {
    movie: {},
    time: ''
  },
  onLoad (options) {
    const id = options.id

    wx.showLoading({
      title: '',
    })

    wx.request({
      url: `${cfg.domain}/subject/${id}`,
      header: {
        "Content-Type": "application/text"
      },
      success: (res) => {
        let movie = res.data

        if (movie.trailer_urls.length) {
          movie.video = movie.trailer_urls[0].replace("http", "https")
        }
        else if (movie.blooper_urls.length){
          movie.video = movie.blooper_urls[0].replace("http", "https")
        }
        else if (movie.clip_urls.length) {
          movie.video = movie.clip_urls[0].replace("http", "https")
        }
        this.setData({
          movie
        })
        wx.hideLoading()
      }
    })
  }
})