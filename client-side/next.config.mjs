/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "antd",
    "@ant-design",
    "rc-util",
    "rc-pagination",
    "rc-picker",
    "rc-notification",
    "rc-tooltip",
  ],
  images: {
    domains: ["res.cloudinary.com"],
  },
  source: "/api/:path*",
  destination: "/api/:path*",
};

export default nextConfig;
