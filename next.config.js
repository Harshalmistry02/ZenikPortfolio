/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
    // Enable experimental features if needed
    experimental: {
        optimizePackageImports: ['lucide-react'],
    },
};

export default nextConfig;
