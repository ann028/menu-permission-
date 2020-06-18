import http from './api-services'

export function logIn() {
  return http.get(`/login`)
}