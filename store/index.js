export default {
  data: {
    tags:[{name:"衣",id:1},{name:"食",id:2},{name:"住",id:3},{name:"行",id:4},{name:'收入',id:5},{name:"衣",id:6},{name:"食",id:7},{name:"住",id:8},{name:"行",id:9},{name:'收入',id:10},{name:'11',id:11}],
  },
  //无脑全部更新，组件或页面不需要声明 use
  //updateAll: true,
  debug: true,
  idCreator(){
    let id=wx.getStorageSync('_tagId') || 11
    id+=1
    wx.setStorageSync('_tagId',id)
    return id
  },
  fetchTags(){
    const tags=wx.getStorageSync('_tags') || this.data.tags
    this.data.tags=tags
  },
  saveTags(tags){
    wx.setStorageSync('_tags',tags)
    this.data.tags=tags
  }
}