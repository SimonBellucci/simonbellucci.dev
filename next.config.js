/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  poweredByHeader: false,
  compress: true,
  optimizeFonts: true,
  images: {
    formats: ['image/webp'],
    remotePatterns: [{ hostname: 'localhost' }, { hostname: 'via.placeholder.com' }],
    minimumCacheTTL: 600,
  },
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: [/(components|hooks|utils)\\index.ts/i],
      sideEffects: false,
    });

    return config;
  },
};

module.exports = nextConfig;
