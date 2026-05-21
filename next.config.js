/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hieu-mth',
  assetPrefix: '/hieu-mth/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
