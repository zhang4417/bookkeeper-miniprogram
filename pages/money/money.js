import create from "../../utils/create";
import store from "../../store/index";

create(store,{
  data:{
    record:{notes:'',amount:0,tag:""}
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