import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: { unoptimized: true }, // если используешь next/image без внешнего лоадера

  // не ломать прод-билд из-за ESLint
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
