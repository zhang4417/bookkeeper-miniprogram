const { default: store } = require("../../store/index")
import create from '../../utils/create'

create.Page(store,{
  use:['records'],
  data:{
    recordList:[{'2020-1-31':[],}]
  },
  onLoad(){
    store.fetchRecords()
  }
})