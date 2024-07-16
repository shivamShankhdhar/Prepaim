/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.data.prepaim.com",
        port: "4000",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
