/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.picgo.net",
      },
    ],
  },
  // 移除实验性功能，使用静态导出的基本配置
  trailingSlash: true,
}

module.exports = nextConfig

