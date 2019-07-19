//logs.js
const util = require('../../utils/util.js')
const watch = require("../../utils/watch.js");
const app = getApp()
Page({
  data: {
    my: {
      name: 'xuyang',
      age: 21,
      hobby: ['girls', 'games']
    },
    nameInfo: {}
  },
  onLoad() {
    watch.setWatcher(this);
    this.setData({
      ['my.age']: 16
    })
    console.log(this.data)
  },
  //可以写为'my.hobby',my,nameInfo
  watch: {
    'my.age': {
      handler(newValue) {
        console.log("我修改了" + newValue)
      },
      deep: true
    }
  },
  changeName:function(){
    this.setData({
      ['my.age']: 190
    })
  }
})
