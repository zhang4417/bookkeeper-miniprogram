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
    const rexVal=value.replace(/\s/g,'')
    this.setData({tagName:rexVal})
  },
  onChangeTag(){
    if(this.data.tagName==='')return;
    const tags=store.data.tags.map(item=>item.id===this.data.tagId?{...item,name:this.data.tagName}:item)
    store.saveTags(tags)
    wx.navigateBack({
      delta: 0,
    })
  },
  onDeleteTag(){
    const tags=store.data.tags.filter(item=>item.id!==this.data.tagId)
    store.saveTags(tags)
    wx.navigateBack({
      delta: 0,
    })
  }
})