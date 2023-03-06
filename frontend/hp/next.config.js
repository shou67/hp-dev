/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  reactStrictMode: true,
  swcMinify: true
}

module.exports = {
  webpack: (config, context) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    },
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    });
    return config;
  },
};

