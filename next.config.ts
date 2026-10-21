import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pagina /testimoniale a fost eliminata; trimitem vizitatorii si crawlerele pe Home
  async redirects() {
    return [
      { source: "/testimoniale", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
