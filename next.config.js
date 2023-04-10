/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL_API: process.env.URL_API,
    KEY_MAP: process.env.KEY_MAP,
  },
  images: {
    domains: ['api-exhibition.bplusfurniture.com.vn']
  }
};

module.exports = nextConfig;
