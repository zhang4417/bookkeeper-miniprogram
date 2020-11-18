
Component({
  properties:{
    propDate:{
      type:String,
      value:'2020-02-02'
    }
  },
  data:{
    date:'',
    start:'',
    end:''
  },
  lifetimes:{
    attached(){
      const date=this.properties.propDate
      const year=date.slice(0,4)
      const monthAndDay=date.slice(4)
      this.setData({
        date:date,
        start:year-20+'-01-01',
        end:date.replace(monthAndDay,'-12-31')
      })
      console.log(this.data.start)
      console.log(this.data.end)
    },
    ready(){

    }
  },
  methods:{
    onDateChange(e){
      this.setData({date:e.detail.value})
      this.triggerEvent('myEvent',this.data.date)
    }
  }
})