/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL_API: process.env.URL_API,
  }
};

module.exports = nextConfig;
