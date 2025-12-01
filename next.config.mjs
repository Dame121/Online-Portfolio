/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
    domains: ['avatars.githubusercontent.com', 'github.com'],
  },
  reactStrictMode: true,
};

export default nextConfig;

