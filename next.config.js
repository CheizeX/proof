/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'dist',
  images: {
    domains: ['assets.example.com'],
  },
};

module.exports = nextConfig;
