import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Omega",
        short_name: "Ω",
        start_url: "/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#6c6eec",
        icons: [
            {
                "src": "favicon.png",
                "sizes": "110x110",
                "type": "image/png"
            }
        ],
    };
}