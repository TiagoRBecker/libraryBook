/** @type {import('next').NextConfig} */
module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
          path: false,
        };
      }
  
      config.module.rules.push({
        test: /\.(bin|node|canvas)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      });
  
      return config;
    },
  };