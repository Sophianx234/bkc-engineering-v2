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
  allowedDevOrigins: ['192.168.0.100'],
  typescript:{
    ignoreBuildErrors: true,

  }

};

export default nextConfig;
