/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 768, 1024, 1280],
  },
};

module.exports = nextConfig;
