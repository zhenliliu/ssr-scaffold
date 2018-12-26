const  GET = 'GET'
export function exmple(url, payload, target){
  return {
    type: GET,
    target: target,
    request(axios) {
      return axios.get(url, { params: payload})
    }
  }
}