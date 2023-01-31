/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['admin-staging.string3.org']
  },
  env: {
    ApiUrl: 'https://admin-staging.string3.org/api',
    ActiveHostedApiUrl:'https://ftnow.api-us1.com/api/3',
    ActiveHostedApiKey:'76ec51edcbae9ea0c4284101ef596cdcee6c6bd804efe4d849d00e70b88b805e5093f310'

  },
}

module.exports = nextConfig
