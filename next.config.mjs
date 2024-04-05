/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dev-to-uploads.s3.amazonaws.com", "img.freepik.com"],
  },
};

export default nextConfig;
