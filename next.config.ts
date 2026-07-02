import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/",
        permanent: false,
      },
      {
        source: "/portal",
        destination: "/contact",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;