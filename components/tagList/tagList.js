import create from '../../utils/create'
import store from '../../store/index'

create.Component(store,{
  use:['tags'],
  data:{
    selectedTag:{},
    x:1
  },
  lifetimes:{
    created(){
      store.fetchTags()
    },
    attached(){
      this.setData({selectedTag:store.data.tags[0]})
      this.setData({x:2})
      console.log(this.data.x)
      console.log(this.data.selectedTag)
    }
  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    // show: function () { 
    //   const listId=store.data.tags.map(item=>item.id)
    //   if(listId.indexOf(this.data.selectedTag.id)<0){
    //     this.setData({
    //       selectedTag:store.data.tags[0]
    //     })
    //   }
    // },
  },
  methods:{
    onSelected(e){
      const detail=e.target.dataset
      this.setData({selectedTag:detail.tag})
      this.triggerEvent("myEvent",this.data.selectedTag)
    },
    onAddTag(){
      wx.navigateTo({
        url: '/pages/newTag/newTag',
      })
    }
  }
})