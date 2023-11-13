/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: '/andy-base-path',
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'exiv2.org', '*.s3.amazonaws.com'],
  },
};

module.exports = nextConfig
