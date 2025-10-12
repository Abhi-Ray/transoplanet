/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static HTML export
  images: { unoptimized: true }, // if you use next/image
};

export default nextConfig;
