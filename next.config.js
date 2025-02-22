/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
    domains: ["img.picgo.net"],
  },
  trailingSlash: true,
}

module.exports = nextConfig

