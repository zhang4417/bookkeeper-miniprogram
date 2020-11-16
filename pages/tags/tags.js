import create from '../../utils/create.js'
import store from '../../store/index.js'

create(store,{
  use:['tags'],
  onToEdit(e){
    const id=e.target.dataset.id
    wx.navigateTo({
      url:`/pages/editTag/editTag?id=${id}`
    })
  }
})