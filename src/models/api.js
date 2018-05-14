import axios from 'axios'

/*
This is the base API access code. Everything here deals with ALL requests, no matter the endpoint.
You should add here all basic information about your server, including basic app authentication (headers, tokens, etc.)
*/

const API_HOST = process.env.API_HOST || 'http://localhost:8080'
const API_NAMESPACE = process.env.API_NAMESPACE || '/'
const BASEURL = `${API_HOST}${API_NAMESPACE}`

/*
* PUBLIC METHODS
*/

function get(endpoint) {
  return axios.get(BASEURL+endpoint)
}

function post(endpoint, data) {
  return axios.post(BASEURL+endpoint, data)
}

function put(endpoint, data) {
  return axios.put(BASEURL+endpoint, data)
}

function patch(endpoint, data) {
  return axios.patch(BASEURL+endpoint, data)
}

function del(endpoint) { // delete is a reserved keyword
  return axios.delete(BASEURL+endpoint)
}

const api = {
  get: get,
  post: post,
  put: put,
  patch: patch,
  delete: del
}

export default api