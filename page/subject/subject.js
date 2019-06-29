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