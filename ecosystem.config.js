module.exports = {
    apps: [
      {
        name: 'DruzbaFront',
        port: '3000',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
}
