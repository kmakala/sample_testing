/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com'],
  },
  webpack: (config) => {
    config.cache = false
    return config
  },
  experimental: {
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: { 
          timeout: 10000,
          subsets: ['latin']
        },
      },
    ],
  }
}

module.exports = nextConfig