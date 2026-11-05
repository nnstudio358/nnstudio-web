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
      // Case studies move to phase 2 (Nathan, Nov 4). Until they're rebuilt, send
      // their URLs to the matching Work entry. Temporary, so the pages can return.
      { source: "/work/turno", destination: "/work#turno", permanent: false },
      { source: "/work/pendulum", destination: "/work#pendulum", permanent: false },
    ];
  },
};

export default nextConfig;
