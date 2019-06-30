import cfg from '../../common/config/index.js'

Page({
  data: {
    movies: [],
    page: 1,
    size: 50,
    loading: true,
    type: ''
  },

  onLoad(options) {
    const { type } = options
    this.setData({
      type
    })
    this.loadMovies()
  },

  saveData(data) {
    let history = wx.getStorageSync('history') || []

    history = history.filter((item) => {
      return item.id !== data.id
    })

    history.unshift(data)
    wx.setStorageSync('history', history)
  },

  loadMovies() {
    const { size, page, type } = this.data

    this.setData({
      loading: true
    })

    wx.showLoading({
      title: '',
      mask: true
    })

    wx.request({
      url: `${cfg.domain}/${type}?start=${page}&count=${size}`,
      header: {
        //这里修改json为text   json的话请求会返回400（bad request）
        "Content-Type": "application/text"
      },
      success: (res) => {
        const data = res.data.subjects
        const movies = this.data.movies || []

        for (let i = 0; i < data.length; i += 2) {
          if (data[0].rank){
            movies.push([data[i].subject, data[i + 1] ? data[i + 1].subject : null])
          }
          else {
            movies.push([data[i], data[i + 1] ? data[i + 1] : null])
          }
        }

        this.setData({
          movies,
          loading: false
        })

        wx.hideLoading()
      }
    })
  },

  scrollHandler() {
    const { page, size} = this.data
    this.setData({
      page: page + size
    })
    this.loadMovies()
  },

  gotoDetail(e) {
    const { movieData } = e.currentTarget.dataset
    const { id } = movieData

    this.saveData(movieData)

    wx.navigateTo({
      url: '../movie-detail/detail?id=' + id
    })
  }
})