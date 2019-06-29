Page({
  data: {
    imgUrl: '/assets/image/QRcode.jpg'
  },
  saveQRCode () {
    const { imgUrl } = this.data
    wx.downloadFile({
      url: imgUrl,
      success: (res) => {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath
        })
      }
    })
  }
})