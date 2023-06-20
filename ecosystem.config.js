const os = require('os');
module.exports = {
    apps: [
      {
        name: 'DruzbaFront',
        port: '3000',
        //exec_mode: 'cluster',
        instances: 'max',
        watch: true,
        script: './.output/server/index.mjs',
        instances   : os.cpus().length,
        exec_mode   : 'fork',
        env: {
            NODE_ENV: "production",
        }
      }
    ]
}
