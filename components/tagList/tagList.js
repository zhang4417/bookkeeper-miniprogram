import create from '../../utils/create'
import store from '../../store/index'

create.Component(store,{
  use:['tags'],
  properties:{
    propCategory:{
      type:String,
      value:'-',
      observer: function(newVal, oldVal) {
        this.setData({category:newVal})
        this._switchTags(newVal)
      }
    }
  },
  computed:{
    outcomeTags(){
      return this.tags.filter(item=>item.type==='-')
    },
    incomeTags(){
      return this.tags.filter(item=>item.type==='+')
    }
  },
  data:{
    selectedTag:{},
    category:''
  },
  lifetimes:{
    created(){
      store.fetchTags()
    },
    ready(){
      this.setData({category:this.properties.propCategory})
      this._switchTags(this.data.category)
    }
  },
  pageLifetimes: {
    //组件所在页面的生命周期函数
    show: function () { 
      const listId=store.data.tags.map(item=>item.id)
      if(listId.indexOf(this.data.selectedTag.id)<0){
        this._switchTags(this.data.category)
      }
    },
  },
  methods:{
    onSelected(e){
      const detail=e.target.dataset
      this.setData({selectedTag:detail.tag})
      this.triggerEvent("myEvent",this.data.selectedTag)
    },
    onAddTag(){
      wx.navigateTo({
        url: `/pages/newTag/newTag?type=${this.data.category}`,
      })
    },
    _switchTags(category){
      const filterTags=store.data.tags.filter(item=>item.type===category)
      if(filterTags.length===0){
        this.setData({
          selectedTag:{name:"其他"}
        })
      }else{
        this.setData({
          selectedTag:filterTags[0]
        })
      }
      this.triggerEvent("myEvent",this.data.selectedTag)
    }
  }
})