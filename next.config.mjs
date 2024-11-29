/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
              source: '/api/:path*', // Matches all API routes
              headers: [
                { key: 'Content-Type', value: 'application/json' },
                { key: 'X-Custom-Header', value: 'my-app-value' },
              ],
            },
            {
              source: '/about', // Matches the '/about' route
              headers: [{ key: 'Cache-Control', value: 'public, max-age=3600' }], // Cache for an hour
            },
          ];
    },
    distDir: 'build',
    images: {
      unoptimized: true,
    }
};

export default nextConfig;
