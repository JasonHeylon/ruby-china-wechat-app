import wemark from '../../plugins/wemark/wemark'
// import WxParse from '../../plugins/wxParse/wxParse'

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
    console.log('markdownPreviewer')
    let parsedBody = wemark.parse(this.properties.content)
    this.setData({parsedContent: parsedBody})
    // var that = this;
    // WxParse.wxParse('parsedContent', 'html', this.properties.content, that, 5);
  }

})
