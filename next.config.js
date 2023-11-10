/** @type {import('next').NextConfig} */

// const nextConfig = {
//   env: {
//     NEXT_PUBLIC_HOST_API: process.env.NEXT_PUBLIC_HOST_API,
//     NEXT_PUBLIC_GOOGLE_ID: process.env.NEXT_PUBLIC_GOOGLE_ID,
//     NEXT_PUBLIC_SMARTLOOK: process.env.NEXT_PUBLIC_SMARTLOOK,
//   },
// };

const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./src/i18n.ts"
);

module.exports = withNextIntl();
