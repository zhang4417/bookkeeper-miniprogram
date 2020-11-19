import create from '../../utils/create'
import store from '../../store/index'

create.Page(store,{

  /**
   * 页面的初始数据
   */
  data: {
    tag:'',
    category:''
  },
  onLoad(options){
    const category=options.type
    this.setData({category})
  },
  onInputVal(e){
    const value=e.detail.value
    this.setData({tag:value})
  },
  onAddTag(){
    const id=store.idCreator()
    const tags=[...store.data.tags,{name:this.data.tag,id:id,type:this.data.category}]
    store.saveTags(tags)
    wx.navigateBack({
      delta: 0,
    })
  },
  onXXX(e){
    console.log(e.detail.value)
  }
})