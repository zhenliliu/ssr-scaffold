import query from '../utils/mysql'
export default {
  async getData() {
    return query('select count(*) as count from users')
  }
}