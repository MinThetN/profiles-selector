/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "punycode": false,
    };
    return config;
  },
};

module.exports = nextConfig; 