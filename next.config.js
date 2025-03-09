/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.pexels.com",
          pathname: "/photos/**", // Allow images from the "photos" path
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          pathname: "/photo-**", // Allow images from Unsplash as well
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  