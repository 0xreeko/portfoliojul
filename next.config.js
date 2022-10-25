/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      's3.us-west-2.amazonaws.com',
      '/'
    ]
  },
  env: {
    NEXT_GA: process.env.NEXT_GA
  }
}

module.exports = (nextConfig)
