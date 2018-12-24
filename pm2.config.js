module.exports = {
    apps : [{
      name: 'lzlblog',
      script: 'index.js',
      exec_mode : "cluster",
      instances: 1,
      autorestart: true,             //是否要重启
      watch: false,                  //开发模式，类似于nodemon
      max_memory_restart: '1G',      //重启的内存的阀值
      output: './logs/stdout.log',   //标准日志输出
      error: './logs/error.log',     //错误日志输出
      merge_logs: true,              //是否要合并集群日志到单个文件
      date_log_format: "JJ-MM-YYYY", //给日志增加时间
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }],
  };