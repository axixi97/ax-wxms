module.exports =  {
    data: {
        title: 'Hello页',
    },

  onChangeTitle() {
    this.data.title = 'Hello页' + Math.floor(Math.random() * 1000)
    this.update()
  }

}