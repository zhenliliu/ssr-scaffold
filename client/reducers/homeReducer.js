import * as TYPE from './../actions/type'
let initalState = {

}
export default (state = initalState, action) => {
    console.log('action', action)
    return {
        ...state
    }
}