import Controller from './controller'
export default class Exmple extends Controller {
    async index(ctx, next) {
        this.render({
            home: {
                name: 'name',
                age: 10,
            }
        })
    }
}