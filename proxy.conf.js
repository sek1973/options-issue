const PROXY_CONFIG = [{
    context: [
        '/api'
    ],
    target: {
        host: '127.0.0.1',
        protocol: 'http:',
        port: 3000
    },
    secure: false,
    changeOrigin: true,
    logLevel: 'debug'
}];

module.exports = PROXY_CONFIG;