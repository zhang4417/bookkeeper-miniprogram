export default {
  data: {
    tags:[{name:"交通",type:'-',id:1},{name:"购物",type:'-',id:2},{name:"用品",type:'-',id:3},{name:"充值",type:'-',id:4},{name:'聚会',type:'-',id:5},{name:"房租",type:'-',id:6},{name:"教育",type:'-',id:7},{name:"零食",type:'-',id:8},{name:"医疗",type:'-',id:9},{name:'礼品',type:'-',id:10},{name:"工资",type:"+",id:11},{name:"奖金",type:"+",id:12},{name:"理财",type:"+",id:13}],
    records:[]
  },
  //无脑全部更新，组件或页面不需要声明 use
  //updateAll: true,
  debug: true,
  idCreator(){
    let id=wx.getStorageSync('_tagId') || 11
    id+=1
    wx.removeStorageSync('_tagId')
    wx.setStorageSync('_tagId',id)
    return id
  },
  fetchTags(){
    const tags=wx.getStorageSync('_tags') || this.data.tags
    this.data.tags=tags
  },
  saveTags(tags){
    wx.removeStorageSync('_tags')
    wx.setStorageSync('_tags',tags)
    this.data.tags=tags
  },
  fetchRecords(){
    const records=wx.getStorageSync('_records') || this.data.records
    this.data.records=records
  },
  cloneData(date){
    return JSON.parse(JSON.stringify(date))
  },
  saveRecords(record){
    const records=this.cloneData(this.data.records)
    records.push(record)
    wx.removeStorageSync('_records')
    wx.setStorageSync('_records',records)
    this.data.records=records
  },
}