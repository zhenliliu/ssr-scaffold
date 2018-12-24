import Controller from './controller'
export default class GetList extends Controller {
    async index() {
        console.log('this.ctx.body', this.ctx.body)
        let userInfo = await this.dao.getData(1)
        this.send(userInfo)
    }
}