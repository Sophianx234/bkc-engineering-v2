import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
    ],
  },
  allowedDevOrigins: ['172.24.208.1'],
  typescript:{
    ignoreBuildErrors: true,

  }

};

export default nextConfig;
