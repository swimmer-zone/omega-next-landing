import { JSX } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogClient from '@/components/blog-client';
import Footer from '@/components/footer';
import { API_URL } from '@/lib/api';
import type { Blog, Gallery } from '@/types/all';

import '../../_scss/_page.scss';

export const metadata: Metadata = {
    title: 'Ω - DIY',
    description: '',
};

type Props = {
    params: Promise<{ id: string }>;
};

async function getDIY(id: string): Promise<Blog | null> {
    const response = await fetch(`${API_URL}/diy/${id}`, {
        next: { revalidate: 300 },
    });

    if (response.status === 404) {
        return null;
    }

    if (!response.ok) {
        throw new Error('Failed to fetch diy project');
    }

    return response.json();
}

export default async function DIYPage({ params }: Props): Promise<JSX.Element> {
    const { id } = await params;
    const diy = await getDIY(id);

    if (!diy) {
        return notFound();
    }

    return (
        <main>
            <div className="content-column">
                <h1>{diy.title}</h1>
                <em>Published at: {new Intl.DateTimeFormat('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                }).format(new Date(diy.published_at))}
                </em>
                <BlogClient
                    source={diy.body}
                    galleries={diy.galleries as Gallery[]}
                />
            </div>

            <Footer />
        </main>
    );
}