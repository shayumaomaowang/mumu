/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '/mumu',  // Set base path from env variable
  images: {
    unoptimized: true,  // Required for static export
  },
  // Required for GitHub Pages
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '/mumu',
}

module.exports = nextConfig 