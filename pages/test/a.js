// pages/test/a.js Page() 函数用来注册一个页面。接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等。
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: 'init data',
    num: 0,
    array: [{
      text: 'init data'
    }],
    object: {
      text: 'init data2'
    },
    array1: [1, 2, 3],
    view: 'MINA',
    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' },
    ],
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ]
  },

  tapName: function (event) {
    console.log(event)
  },

  switchChange: function (e) {
    console.log('switchChange发生change事件，携带value值为：', e)
  },

  checkboxChange: function(e) {
    console.log('checkboxChange发生change事件，携带value值为：', e.detail.value)
  },

  changeText: function() {
    // this.data.text = 'changed data'  // bad, it can not work
    this.setData({
      text: '修改数据'
    })
  },

  changeNum: function() {
    this.setData({
      num: 2
    })
  },

  changeItemInArray: function() {
    // you can use this way to modify a danamic data path
    this.setData({
      'array[0].text': 'changed data'
    })
  },

  changeItemInObject: function() {
    this.setData({
      'object.text': 'changed data'
    });
  },

  addNewField: function() {
    this.setData({
      'newField.text': 'new data'
    })
  },

  rediToLog: function() {
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
  },

  /**
   * 生命周期函数--监听页面加载，页面渲染后执行
   */
  onLoad: function(options) {
    console.info("onLoad执行")
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitude = res.latitude // 经度
        var longitude = res.longitude // 纬度
        console.info("经度" + latitude)
        console.info("纬度" + longitude)
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.info("onShow执行")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.info("onReady执行")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  }
})