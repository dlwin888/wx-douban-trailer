Page({
  data: {
    imgUrl: 'http://kan.027cgb.com/624176/QRcode.jpg'
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