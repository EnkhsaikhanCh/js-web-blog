const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.dev.to", "res.cloudinary.com", "dev.to"], // Add "dev.to" to the array
  },
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    // Only enable source maps in production
    if (!dev) {
      config.devtool = "source-map";
    }
    // Important: return the modified config so Next.js can use it
    return config;
  },
};

export default nextConfig;
