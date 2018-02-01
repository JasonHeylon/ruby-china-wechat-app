import wepy from 'wepy'

const BASE_URL = 'https://ruby-china.org/api/v3/'

let queryPopularTopics = (page) => {
  let url = `${BASE_URL}topics.json?type=excellent`
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

let queryTopicDetail = (topicId) => {
  let url = `${BASE_URL}topics/${topicId}.json`
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

let queryTopics = (page) => {
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

let queryJobs = (page) => {
  let url = `${BASE_URL}topics.json?node_id=25`
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

let queryReplies = (topicId) => {
  let url = `${BASE_URL}topics/${topicId}/replies.json?`
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
  queryPopularTopics: queryPopularTopics,
  queryTopicDetail: queryTopicDetail,
  queryTopics: queryTopics,
  queryJobs: queryJobs,
  queryReplies: queryReplies
}
