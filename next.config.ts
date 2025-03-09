import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [ "images.pexels.com","images.unsplash.com"], // Allow external images from Pexels and Unsplash
  },
};

export default nextConfig;
