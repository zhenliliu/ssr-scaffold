import Controller from './controller'
export default class Detail extends Controller {
    async index() {
        this.render('mine')
    }
}