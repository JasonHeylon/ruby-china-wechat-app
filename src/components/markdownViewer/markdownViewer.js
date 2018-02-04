import wemark from '../../plugins/wemark/wemark'

Component({
  properties: {
    content: {
      type: String,
      value: ''
    }
  },
  data: {
    parsedContent: {}
  },
  methods: {
  },
  ready () {
    this.setData({ parsedContent: wemark.parse(this.properties.content) })
  }

})
