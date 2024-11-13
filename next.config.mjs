/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    // Add SVGR loader
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },

  // Configure image domains for when you need to reference DO directly
  images: {
    domains: ["general-static-assets.nyc3.digitaloceanspaces.com"],
    unoptimized: true,
  },
};

export default nextConfig;
