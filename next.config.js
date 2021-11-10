const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  env: {
    SOCKET_SERVER_ENDPOINT: process.env.SOCKET_SERVER_ENDPOINT,
  },

  webpack(config, { dev, webpack }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    config.resolve.modules.push(__dirname);

    return config;
  },
});
