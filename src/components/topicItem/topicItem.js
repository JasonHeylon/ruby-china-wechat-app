import moment from 'moment'

Component({
  properties: {
    topic: {
      type: Object,
      value: {}
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: 1
  },
  methods: {
    // 这里是一个自定义方法
    tapTest () {
      console.log('test clicked')
      console.log(this.properties)
    },
    tapTopic() {
      wx.navigateTo({
        url: `/pages/topic?id=${this.properties.topic.id}`
      })
    }
  },
  ready () {
    console.log('ready')
    // console.log(moment().format('Y_M_D'))
  }

})
