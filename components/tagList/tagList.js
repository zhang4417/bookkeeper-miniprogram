import create from '../../utils/create'
import store from '../../store/index'

create.Component(store,{
  use:['tags'],
  data:{
    selectedTag:store.data.tags[0]
  },
  attached(){
  },
  methods:{
    onSelected(e){
      const detail=e.target.dataset
      this.setData({selectedTag:detail.tag})
      this.triggerEvent("myEvent",this.data.selectedTag)
    }
  }
})