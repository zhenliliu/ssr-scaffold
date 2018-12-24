import mysql from 'mysql'

const pool = mysql.createPool({
  host            : 'host',
  user            : 'user',
  password        : 'password',
  database        : 'database',
  port            : 'port'
})

const query = async (sql,values = []) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if(error) {
                console.warn(new Date, '数据库连接失败！')
                reject(reject)
            }
            connection.query(sql, values, (error, results) => {
                if ( error ) {
                    console.warn(new Date, `执行 => ${sql}, ${values} <= 失败`)
                    reject(error)
                }
                resolve(results[0])
                connection.release()
            })
        })
    })
}

export default query