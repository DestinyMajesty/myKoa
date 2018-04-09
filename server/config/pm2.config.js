module.exports = {
    apps: [{
        // 启动后的name，相当于：pm2 start app.js --name 71_nova
        name: 'mykoa',

        // 启动的入口
        script: 'server/index.js',

        // app.js的位置
        // cwd: 'z:/workspaces/_nova_04_api/webroot-dev/',

        // 负载均衡模式，使用2个核心，相当于：pm2 start app.js -i 2
        instances: '2',
        exec_mode: 'cluster',

        // 监听文件修改，相当于：pm2 start app.js --watch
        // watch: ['server'],
        // ignore_watch: ['server/fore'],

        // 最大内存占用，相当于：pm2 start app.js --max_memory_restart 20M
        max_memory_restart: '100M',

        // 日志相关
        // log_date_format: 'YYYY-MM-DD HH:mm Z',
        // error_file: 'd:/error.log',
        // out_file: 'd:/out.log'
    }]
};