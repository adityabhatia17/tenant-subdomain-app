/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["drive.google.com"], // Add 'drive.google.com' to the list of allowed domains
  },
};

module.exports = nextConfig;
