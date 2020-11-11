Component({
  data:{
    selectedTag:''
  },
  properties:{
    tags:{
      type:Array,
      value:[]
    }
  },
  pageLifetimes: {
    show: function() {
      // 页面被展示
    },
    hide: function() {
      // 页面被隐藏
    },
    resize: function(size) {
      // 页面尺寸变化
    }
  },
  created(){
    console.log('created')
  },
  attached:function(){
    console.log('attached')
    this.setData({selectedTag:this.properties.tags[0]})
  },
  ready(){
    console.log('ready')
  },

  observers:{
  },
  methods:{
    onSelected(e){
      const detail=e.target.dataset
      this.setData({selectedTag:detail.tag})
    }
  }
})