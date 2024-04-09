// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
// next.config.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://118.31.71.213:8080/:path*' // 目标API地址
      },
    ]
  },
}
