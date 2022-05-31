const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  env: {
    SOCKET_SERVER_ENDPOINT: process.env.SOCKET_SERVER_ENDPOINT,
    GOOGLE_AUTH_CLIENT_ID: process.env.GOOGLE_AUTH_CLIENT_ID,
    API_SERVER_ENDPOINT: process.env.API_SERVER_ENDPOINT,
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


// safely ignore recoil warning messages in dev (triggered by HMR)
function interceptStdout(text) {
  if (text.includes('Duplicate atom key')) {
    return '';
  }
  return text;
}

if (process.env.NODE_ENV === 'development') {
  const intercept = require('intercept-stdout');
  intercept(interceptStdout);
}
