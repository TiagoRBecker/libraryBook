/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {
  theme: {
    screens: {
      md: "825px",
      // => @media (min-width: 825px) { ... }
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    const debug = process.env.NODE_ENV !== "production";
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;

    return config;
  },
};

module.exports = nextConfig;
