import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Ongoing support now lives on the Services page (decided Oct 14, 2026).
      {
        source: "/ongoing-design-support",
        destination: "/services#ongoing-support",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
