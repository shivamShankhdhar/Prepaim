/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.data.prepaim.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;