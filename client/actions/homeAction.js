const getList = () => {
    return {
        type: 'GET_LIST',
        request(axios) {
            return axios.get('api/getList')
        }
    }
}
export {
    getList
}