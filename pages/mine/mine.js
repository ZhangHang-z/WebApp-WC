// mine.js

var dataMine = {
  name: "我的",
  notificationInfo: {
    text: "通知",
    iconUrl: "../../image/icon/notification.png"
  },
  addInfo: [{
    iconUrl: "../../image/icon/userAddress.png",
    text: "我的地址",
    navigatorTitle: "toaddress"
  }, {
    iconUrl: "../../image/icon/favoriteExpressage.png",
    text: "常用快递",
    navigatorTitle: "tofavoriteexpressage"
  }]
}

Page({
  data: dataMine
})
