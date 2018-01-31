import wepy from 'wepy'

const BASE_URL = 'https://ruby-china.org/api/v3/'

export let queryPopularTopics = (page) => {
  let url = `${BASE_URL}topics.json`
  return new Promise((resolve, reject) => {
    wepy.request({
      url: url
    }).then((data) => {
      resolve(data.data)
    }).catch((error) => {
      console.error(error)
    })
  })

}

export default {
  queryPopularTopics: queryPopularTopics
}
