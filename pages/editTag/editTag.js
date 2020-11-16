import create from "../../utils/create"
import store from "../../store/index"

create.Page(store,{
  use:['tags'],
  data: {
    tagName:"",
    tagId:null,
  },
  onLoad: function (options) {
    const id=Number.parseInt(options.id)
    this.setData({tagId:id})
    const filterTag=store.data.tags.filter(item=>item.id===id)
    this.setData({tagName:filterTag[0].name})
  },
  onInputVal(e){
    const value=e.detail.value
    this.setData({tagName:value})
  },
  onChangeTag(){
    const tags=store.data.tags.map(item=>item.id===this.data.tagId?{...item,name:this.data.tagName}:item)
    store.data.tags=tags
  },
  onDeleteTag(){
    const tags=store.data.tags.filter(item=>item.id!==this.data.tagId)
    console.log(tags)
    store.data.tags=tags
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})