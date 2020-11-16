import create from '../../utils/create.js'
import store from '../../store/index.js'

create.Page(store,{
  use:['tags'],
  data:{
    tagList:[]
  },
  onLoad(){
    store.fetchTags()
    // const tags=wx.getStorageSync('_tags') || store.data.tags
    // this.setData({tagList:tags})
  },
  onToEdit(e){
    const id=e.target.dataset.id
    wx.navigateTo({
      url:`/pages/editTag/editTag?id=${id}`
    })
  }
})