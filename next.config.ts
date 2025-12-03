import type { NextConfig } from 'next';

if (typeof global.localStorage !== 'undefined') {
  // @ts-ignore
  delete global.localStorage;
}

const nextConfig: NextConfig = {
  // Removed deprecated nodeMiddleware experimental option
};

export default nextConfig;
