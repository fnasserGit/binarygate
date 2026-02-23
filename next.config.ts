import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
