/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/culture',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
