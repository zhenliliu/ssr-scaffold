import Controller from './controller'
export default class DatePicker extends Controller {
    async index() {
        this.render({
          name: 'name'
        })
    }
}