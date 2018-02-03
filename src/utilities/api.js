import wepy from 'wepy'

const BASE_URL = 'https://ruby-china.org/api/v3/'

let queryPopularTopics = (page, limit = 20) => {
  return queryTopics(page, limit, 'type=excellent')
}

let queryJobs = (page, limit = 20) => {
  return queryTopics(page, limit, 'node_id=25')
}

let queryTopics = (page = 1, limit = 20, queryString = '') => {
  let offset = limit * (page - 1)
  let url = `${BASE_URL}topics.json?offset=${offset}&limit=${limit}`

  if (queryString.length > 0) {
    url = `${url}&${queryString}`
  }

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

let queryReplies = (topicId, page = 1, limit = 20) => {
  let offset = (page - 1) * limit
  let url = `${BASE_URL}topics/${topicId}/replies.json?offset=${offset}&limit=${limit}`
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
