/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.khan.co.kr",
      },
      {
        protocol: "https",
        hostname: "newsapi.org",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: ["edge.mcsw.net"],
  },
};

export default nextConfig;
