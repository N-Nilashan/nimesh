/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.node = {
      ...config.node,
      global: true,
    };
    return config;
  },
};

export default nextConfig;
