/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React strict mode for better development experience
    reactStrictMode: true,
    
    // Enable SWC minification for faster builds (removed as it's default in Next.js 15)
    
    // Optimize images
    images: {
        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 60,
    },
    
    // Enable compression
    compress: true,
    
    // Optimize bundle splitting
    experimental: {
        optimizePackageImports: ['@phosphor-icons/react', 'react-bootstrap'],
    },
    
    // Webpack optimizations
    webpack: (config, { dev, isServer }) => {
        // Optimize bundle size
        if (!dev && !isServer) {
            config.optimization.splitChunks = {
                chunks: 'all',
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                    eusign: {
                        test: /[\\/]src[\\/]EUSign[\\/]/,
                        name: 'eusign',
                        chunks: 'all',
                        priority: 10,
                    },
                },
            };
        }
        
        // Optimize large files
        config.module.rules.push({
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: /node_modules/,
            type: 'javascript/auto',
        });
        
        return config;
    },
    
    // Headers for better caching
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                ],
            },
            {
                source: '/static/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
};

export default nextConfig