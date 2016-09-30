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
    navigatorTitle: "toaddress",
    nextLineWXSS: "hasNextLine"
  }, {
    iconUrl: "../../image/icon/favoriteExpressage.png",
    text: "常用快递",
    navigatorTitle: "tofavoriteexpressage",
    nextLineWXSS: ""
  }],
  feedbackInfo: [{
    iconUrl: "../../image/icon/feedback.png",
    text: "建议反馈",
    navigatorTitle: "tofeedback",
    nextLineWXSS: "hasNextLine"
  },{
    iconUrl: "../../image/icon/grade.png",
    text: "赏个分吧",
    navigatorTitle: "tograde"
  }],
  aboutInfo: [{
    iconUrl: "../../image/icon/about.png",
    text: "关于我们",
    navigatorTitle: "toabout",
  }]
}

Page({
  data: dataMine
})
