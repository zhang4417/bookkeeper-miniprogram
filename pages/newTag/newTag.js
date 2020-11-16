import create from '../../utils/create'
import store from '../../store/index'

create.Page(store,{

  /**
   * 页面的初始数据
   */
  data: {
    tag:'',
  },
  onInputVal(e){
    const value=e.detail.value
    this.setData({tag:value})
  },
  onChangeTag(){
    const id=wx.getStorageSync('_tagId')
    const newId=store.idCreator(id)
    wx.setStorageSync('_tagId',newId)
    const tags=store.data.tags
    store.data.tags=[...tags,{name:this.data.tag,id:newId}]
    wx.navigateBack({
      delta: 0,
    })
  }
})