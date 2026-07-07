import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "omnirexis.com" }],
        destination: "https://omnirexis.co.uk/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.omnirexis.com" }],
        destination: "https://www.omnirexis.co.uk/:path*",
        permanent: true,
      },
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