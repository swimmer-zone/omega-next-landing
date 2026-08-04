import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const withMDX = createMDX({
    extension: /\.mdx?$/,
})

const nextConfig: NextConfig = {
    turbopack: {
        rules: {
            "*.ino": {
                loaders: ["raw"],
                as: "*.js",
            },
            "*.txt": {
                loaders: ["raw"],
                as: "*.js",
            },
            "*.glsl": {
                loaders: ["raw"],
                as: "*.js",
            },
            "*.md": {
                loaders: ["raw"],
                as: "*.js",
            },
        },
    },
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'omega-laravel.test',
                pathname: '/storage/**',
            },
        ],
    },
};

export default withMDX(nextConfig);