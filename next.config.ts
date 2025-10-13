/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://192.168.100.134:5000/:path*', // ton backend Flask local
      },
    ];
  },
};

export default nextConfig;
