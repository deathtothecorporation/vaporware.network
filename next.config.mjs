/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["general-static-assets.nyc3.digitaloceanspaces.com"],
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  optimizeFonts: false,
  experimental: {
    optimizeCss: false,
  },
};

export default nextConfig;
