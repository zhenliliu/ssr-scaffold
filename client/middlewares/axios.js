/**
 * Created by liuzhenli on 2018/3/29.
 */
import Axios from 'axios'

export default function (options) {
	
  let axios = Axios.create(options);

  axios.interceptors.request.use((config) => {
		config.headers['cache-control'] = 'no-cache'
		config.headers['Pragma']        = 'no-cache'
		console.log('config', config)
    return config
  })
	axios.interceptors.response.use((data) => {
    return data
	})
  return ({ dispatch, getState}) => {

    return next => action => {

      let { type, request, payload, target, loadingTitle, ...rest } = action

      if(!request) {

        return next(action)

      }
      if(target && target.loading){

        target.loading.show(loadingTitle)

      }
      const SUCCESS = type + "_SUCCESS"

			const successCallback = (response) => {

				if(target && target.loading){ target.loading.hide() }

				next({type, response, action})

				return response
			};
			const failCallback = (error) => {

				if(target && target.loading){ target.loading.hide() }

				next({type, error, action})

				return Promise.reject(error)
			};
			if(typeof request == 'function'){
				return request(axios).then(successCallback).catch(failCallback)
			}else{
				return axios.request(request).then(successCallback).catch(failCallback)
			}

    }
  }
}