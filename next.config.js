/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["img.picgo.net"],
  },
  trailingSlash: true,
}

module.exports = nextConfig

