/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = nextConfig
