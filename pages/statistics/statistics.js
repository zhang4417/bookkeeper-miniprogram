const { default: store } = require("../../store/index")
import create from '../../utils/create'

create.Page(store,{
  use:['records'],
  data:{
    recordList:[],
    category:'-'
  },
  _filterRecord(records){
    const filterRecords=records.filter(item=>item.category===this.data.category).sort(
      (a,b)=>{
        const transA=new Date(a.date).getTime()
        const transB=new Date(b.date).getTime()
        if(transA-transB>0){return -1}
      }
    )
    const hashObj={}
    filterRecords.forEach(function(item){
      const date=item.date
      if(date in hashObj){
        hashObj[date].push(item)
      }else{
        hashObj[date]=[item]
      }
    })
    const entryObj=Object.entries(hashObj)
    const sortEntryObj=entryObj.map(item=>{
      const sortItem=item[1].sort((a,b)=>{
        const timeA=a.createAt.split(":")
        const timeB=b.createAt.split(":")
        let d = new Date()
        let ft1 = d.setHours(timeA[0], timeA[1],timeA[2])
        let ft2 = d.setHours(timeB[0], timeB[1], timeB[2])
        if(ft1-ft2>0){return -1}
      })
      console.log(sortItem.map(i=>i.createAt))
      return [item[0],sortItem]
    })
    this.setData({recordList:sortEntryObj})
  },
  onLoad(){
    store.fetchRecords()
    this._filterRecord(store.data.records)
  },
  onShow(){
    this._filterRecord(store.data.records)
  },
  onGetCategory(e){
    this.setData({
      category:e.detail
    })
    this._filterRecord(store.data.records)
  }
})