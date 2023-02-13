/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['107.22.98.205']
  },
  env: {
    ApiUrl: 'http://107.22.98.205/api',
    ActiveHostedApiUrl:'https://ftnow.api-us1.com/api/3',
    ActiveHostedApiKey:'76ec51edcbae9ea0c4284101ef596cdcee6c6bd804efe4d849d00e70b88b805e5093f310',
    ContactApiUrl: 'https://ftnow.activehosted.com/proc.php',
    ContactFormID: 'e0ec3c0f5fbc5b9cbc6c2faf598af5bc'
  },
}

module.exports = nextConfig