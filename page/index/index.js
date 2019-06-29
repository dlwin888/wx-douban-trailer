import cfg from '../../common/config/index.js'

Page({
  data: {
    movies: [],
    page: 1,
    size: 6,
    loading: true
  },

  onLoad(options) {
    this.loadMovies()
  },

  saveData(data) {
    let history = wx.getStorageSync('history') || []
    
    history = history.filter((item) => {
      return item._id !== data._id
    })

    history.unshift(data)
    wx.setStorageSync('history', history)
  },

  loadMovies() {
    const {size, page} = this.data
    this.setData({
      loading: true
    })
    wx.request({
      url: `${cfg.domain}/in_theaters?start=${page}&count=${size}`,
      header: {
        //这里修改json为text   json的话请求会返回400（bad request）
        "Content-Type": "application/text"
      },
      success: (res) => {
        const data = res.data.subjects
        const movies = this.data.movies || []
        
        for (let i=0; i<data.length; i+=2) {
          movies.push([data[i], data[i+1] ? data[i+1] : null])
        }

        this.setData({
          movies,
          loading: false
        })
      }
    })
  },

  scrollHandler() {
    const { page } = this.data
    this.setData({
      page: page + 1
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