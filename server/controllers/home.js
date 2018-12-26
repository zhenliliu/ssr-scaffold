import Controller from './controller'
export default class Home extends Controller {
    async index(ctx, next) {
        this.render({
            home: {
                name: 'name',
                age: 10,
            }
        })
    }
    async getHomeData() {
        this.send({
            method: 'post',
            controller: 'HomeController',
            action: 'getHomeData'
        })
    }
}