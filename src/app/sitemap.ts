import type { MetadataRoute } from 'next';
import { API_URL } from '@/lib/api';

import type { Blog } from '@/types/all';

const BASE_URL = 'https://ome.gs';

async function getDIY(): Promise<Blog[]> {
    const response = await fetch(`${API_URL}/diy`, {
        next: { revalidate: 300 },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch DIY projects');
    }

    return response.json();
}

async function getTravels(): Promise<Blog[]> {
    const response = await fetch(`${API_URL}/travels`, {
        next: { revalidate: 300 },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch travels');
    }

    return response.json();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const [diy, travels] = await Promise.all([
        getDIY(),
        getTravels(),
    ]);

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/music`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/whisky`,
            lastModified: new Date(),
        },

        ...diy.map((item) => ({
            url: `${BASE_URL}/diy/${item.slug}`,
            lastModified: item.updated_at,
        })),

        ...travels.map((item) => ({
            url: `${BASE_URL}/travels/${item.slug}`,
            lastModified: item.updated_at,
        })),
    ];
}