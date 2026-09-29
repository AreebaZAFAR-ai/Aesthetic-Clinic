import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 80],
    localPatterns: [{ pathname: "/assets/**", search: "" }],
  },
};

export default nextConfig;
