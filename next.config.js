/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['admin-staging.string3.org']
  },
  env: {
    ApiUrl: 'https://admin-staging.string3.org/api',
  },
}

module.exports = nextConfig
