import query from './../utils/mysql'
export default {
  async getData(userId) {
    return query('select  user_id as userId,username as userName,nick_name as nickName,avatar_url as avatarUrl from users where user_id= ?',[userId])
  }
}