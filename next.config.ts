import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.unsplash.com",
        port: "",
        pathname: "/photos/random",
      },
    ],
  },
};

export default nextConfig;
