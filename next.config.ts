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
    experimental: {
        useLightningcss: false,
    },
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    sassOptions: {
        silenceDeprecations: ['import'],
    },
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