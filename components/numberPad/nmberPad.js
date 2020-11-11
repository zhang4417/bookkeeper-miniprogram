Component({
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
        const x=Number.parseFloat(output)
        console.log({...this.properties.record,amount:x})
      }
    }
  }
})