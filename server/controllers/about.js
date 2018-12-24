import Controller from './controller'
export default class About extends Controller {
    async index() {
        this.render('about')
    }
}