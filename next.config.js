/** @type {import('next').NextConfig} */

var ProtobufPlugin = require('protobufjs-webpack-plugin');

console.log(ProtobufPlugin);

const nextConfig = {
  webpack: (config, options) => {
    config.plugins.push(
      new ProtobufPlugin({})
    )
    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig;
