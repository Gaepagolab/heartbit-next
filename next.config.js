require("dotenv").config();
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `http://115.145.12.190:5000/:path*`,
      },
    ];
  },
};
