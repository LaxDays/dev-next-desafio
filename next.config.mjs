/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dev-to-uploads.s3.amazonaws.com", "res.cloudinary.com"],
  },
};

export default nextConfig;
