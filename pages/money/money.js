import create from "../../utils/create";
import store from "../../store/index";

create.Page(store,{
  data:{
    record:{notes:'',amount:0,tag:{}}
  },
  onLoad(){
    this.setData({record:{...this.data.record,tag:store.data.tags[0]}})
  },
  onShow(){
    const listId=store.data.tags.map(item=>item.id)
      if(listId.indexOf(this.data.record.tag.id)<0){
        this.setData({record:{...this.data.record,tag:store.data.tags[0]}})
      }
  },
  onGetNotes:function(e){
    this.setData({record:{...this.data.record,notes:e.detail}})
    console.log(this.data.record)
  },
  onGetOutput:function(e){
    this.setData({record:{...this.data.record,amount:e.detail}})
    console.log(this.data.record)
  },
  onGetTag:function(e){
    this.setData({record:{...this.data.record,tag:e.detail}})
    console.log(this.data.record)
  }
})