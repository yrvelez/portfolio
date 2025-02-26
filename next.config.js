/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  // If you're deploying to a custom domain, you can remove the basePath and assetPrefix
  // If deploying to a GitHub Pages project page, uncomment these lines:
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 