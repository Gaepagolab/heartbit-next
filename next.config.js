require("dotenv").config();
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
    };
  }

  return {
    /* config options for all phases except development here */
    env: {
      SOCKET_SERVER_ENDPOINT: process.env.SOCKET_SERVER_ENDPOINT,
    },
  };
};
