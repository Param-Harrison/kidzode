import type { NextConfig } from 'next';

if (typeof global.localStorage !== 'undefined') {
  // @ts-ignore
  delete global.localStorage;
}

const nextConfig: NextConfig = {
  experimental: {
    nodeMiddleware: true
  }
};

export default nextConfig;
