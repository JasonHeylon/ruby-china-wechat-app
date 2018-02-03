import moment from 'moment'

Component({
  properties: {
    topics: {
      type: Array,
      value: []
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
      console.log(this.properties.topics)
    }
  },
  ready () {
    console.log('ready')
    console.log(moment().format('Y_M_D'))
    console.log(this.properties.topics)
  }

})
