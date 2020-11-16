import create from '../../utils/create'
import store from '../../store/index'

create.Component(store,{
  use:['tags'],
  data:{
    selectedTag:store.data.tags[0]
  },
  lifetimes:{
    attached(){
      console.log('attached')
    }
  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () { 
      console.log('哈哈')
    },
  },
  methods:{
    onSelected(e){
      const detail=e.target.dataset
      this.setData({selectedTag:detail.tag})
      this.triggerEvent("myEvent",this.data.selectedTag)
    }
  }
})