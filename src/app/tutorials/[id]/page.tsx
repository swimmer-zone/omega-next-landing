import { JSX } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogClient from '@/components/blog-client';
import Footer from '@/components/footer';
import { API_URL } from '@/lib/api';
import type { Blog, Gallery } from '@/types/all';

import '../../_scss/_page.scss';

export const metadata: Metadata = {
    title: 'Ω - Tutorials',
    description: '',
};

type Props = {
    params: Promise<{ id: string }>;
};

async function getTutorial(id: string): Promise<Blog | null> {
    const response = await fetch(`${API_URL}/tutorials/${id}`, {
        next: { revalidate: 300 },
    });

    if (response.status === 404) {
        return null;
    }

    if (!response.ok) {
        throw new Error('Failed to fetch tutorial');
    }

    return response.json();
}

export default async function BlogPage({ params }: Props): Promise<JSX.Element> {
    const { id } = await params;
    const blog = await getTutorial(id);

    if (!blog) {
        return notFound();
    }

    return (
        <main>
            <div className="content-column">
                <h1>{blog.title}</h1>
                <em>Published at: {new Intl.DateTimeFormat('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                }).format(new Date(blog.published_at))}
                </em>
                <BlogClient
                    source={blog.body}
                    galleries={blog.galleries as Gallery[]}
                />
            </div>

            <Footer />
        </main>
    );
}