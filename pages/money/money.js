import create from "../../utils/create";
import store from "../../store/index";

const nowDate=new Date()
const year = nowDate.getFullYear()
const month = nowDate.getMonth()+1
const day = nowDate.getDate()

create.Page(store,{
  use:['tags'],
  data:{
    record:{category:'-',notes:'',date:`${year}-${month}-${day}`,amount:0,tag:{}}
  },
  onLoad(){
    this._switchTags(this.data.record.category)
  },
  onShow(){
    // const listId=store.data.tags.map(item=>item.id)
    // if(listId.indexOf(this.data.record.tag.id)<0){
    //   this._switchTags(this.data.record.category)
    // }
  },
  onGetNotes:function(e){
    this.setData({record:{...this.data.record,notes:e.detail}})
  },
  onGetOutput:function(e){
    this.setData({record:{...this.data.record,amount:e.detail}})
  },
  onGetTag:function(e){
    this.setData({record:{...this.data.record,tag:e.detail}})
  },
  onGetCategory:function(e){
    this.setData({record:{...this.data.record,category:e.detail}})
  },
  onGetDate:function(e){
    this.setData({record:{...this.data.record,date:e.detail}})
  },
  _switchTags(category){
    const filterTags=store.data.tags.filter(item=>item.type===category)
    if(filterTags.length===0){
      this.setData({
        record:{...this.data.record,tag:{name:"其他"}}
      })
    }else{
      this.setData({
        record:{...this.data.record,tag:filterTags[0]}
      })
    }
  }
})