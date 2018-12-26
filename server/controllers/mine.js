import Controller from './controller'
export default class Mine extends Controller {
    async index() {
        this.render({
            name: 'mine'
        })
    }
}