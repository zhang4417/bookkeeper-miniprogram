const { default: store } = require("../../store/index")
import create from "../../utils/create"

create.Component(store,{
  data:{
    output:"0"
  },
  properties:{
    record:Object,
  },
  lifetimes:{},
  methods:{
    onNumberPad(e){
      const text=e.target.dataset.text
      const output=this.data.output
      if("0123456789".indexOf(text)>=0){
        if(output==="0"){
          this.setData({output:text})
        }else{
          this.setData({output:output+text})
        }
      }
      if(text==="." && output.indexOf('.')<0){
        this.setData({output:output+text})
      }
      if(text==="删除"){
        if(output.length<=1){
          this.setData({output:"0"})
        }else{
          this.setData({output:output.slice(0,-1)})
        }
      }
      if(text==="清空"){
        this.setData({output:"0"})
      }
      if(text==="OK"){
        const nowDate=new Date()
        const hour = nowDate.getHours()
        const minute = nowDate.getMinutes()
        const second = nowDate.getSeconds()
        const x=Number.parseFloat(output)
        store.saveRecords({...this.properties.record,amount:x,createAt:`${hour}:${minute}:${second}`,id:Math.random()})
        this.setData({output:"0"})
      }
    }
  }
})