// @ts-check
import withPlaiceholder from '@plaiceholder/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // experimental: {
  //   ppr: true,
  // },
};

export default withPlaiceholder(nextConfig);
