import create from '../../utils/create'
import store from '../../store/index'

create.Page(store,{
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
  }
})