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
        {
          protocol: "https",
          hostname: "api.dicebear.com",
          pathname: "/6.x/**",
        },
        {
          protocol: "https",
          hostname: "ui-avatars.com",
          pathname: "/api/**",
        },
        {
          protocol: "https",
          hostname: "i.pravatar.cc",
          pathname: "/**", // Allow all paths from pravatar.cc
        }
      ],
    },
  };
  
  module.exports = nextConfig;
  