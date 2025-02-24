/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.picgo.net",
      },
    ],
  },
  // Cloudflare Pages 特定配置
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
