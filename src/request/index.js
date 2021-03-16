import axios from 'axios'

const { NODE_API_URL } = process.env

axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Cross-Origin'] = true

axios.interceptors.response.use(response => {
  // @todo: check for errors in response (400s-500s statuses)
  console.log(response)
  return response
}, error => {
  // @todo: handle the response error
  return Promise.reject(error)
})

const auth = () => {
  return axios.create({ baseURL: NODE_API_URL })
}
const graphql = () => {
  return axios.create({ baseURL: NODE_API_URL + '/graphql' })
}

// export default auth
export { auth, graphql, axios }
