/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    RUN_ENVIRONMENT: "PRODUCTION",
  },
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
