/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "nextflix-azure.vercel.app" },
      { protocol: "https", hostname: "i.ibb.co" },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
