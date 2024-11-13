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

  // assetPrefix for production CDN usage
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://general-static-assets.nyc3.digitaloceanspaces.com/website-assets"
      : "",

  // Configure image domains
  images: {
    domains: ["general-static-assets.nyc3.digitaloceanspaces.com"],
    unoptimized: true,
  },
};

export default nextConfig;
