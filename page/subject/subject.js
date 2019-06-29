// page/subject/subject.js
Page({
  data: {
    types: [
      {
        id: 'coming_soon',
        name: '即将上映',
        img: '/assets/image/xiju.png'  
      },
      {
        id: 'top250',
        name: 'Top250',
        img: '/assets/image/dongzuo.png'
      },
      {
        id: 'weekly',
        name: '口碑榜',
        img: '/assets/image/kehuan.png'
      },
      {
        id: 'us_box',
        name: '北美票房榜',
        img: '/assets/image/aiqing.png'
      },
      {
        id: 'new_movies',
        name: '新片榜',
        img: '/assets/image/donghua.png'
      }
    ]
  },
  tapTypeHandle(e) {
    const name = e.currentTarget.dataset.type
    wx.navigateTo({
      url: '../subject-detail/subject-detail?type=' + name,
    })
  }
})