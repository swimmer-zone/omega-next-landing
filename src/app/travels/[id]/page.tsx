import { JSX } from 'react';
import { notFound } from 'next/navigation';
import BlogClient from '@/components/blog-client';
import Diving from '@/components/diving';
import Footer from '@/components/footer';
import Water from '@/components/water';
import { API_URL } from '@/lib/api';
import type { Blog } from '@/types/all';

import '../../_scss/_page.scss';

type Props = {
    params: Promise<{ id: string }>;
};

async function getTravel(id: string): Promise<Blog | null> {
    const response = await fetch(`${API_URL}/travels/${id}`, {
        next: { revalidate: 300 },
    });

    if (response.status === 404) {
        return null;
    }

    if (!response.ok) {
        throw new Error('Failed to fetch travel blog');
    }

    return response.json();
}

export default async function TravelPage({ params }: Props): Promise<JSX.Element> {
    const { id } = await params;
    const travel = await getTravel(id);

    if (!travel) {
        return notFound();
    }

    return (
        <main>
            <div className="content-column">
                <h1>{travel.title}</h1>
                <em>Published at: {new Intl.DateTimeFormat('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                }).format(new Date(travel.published_at))}
                </em>
                <BlogClient
                    source={travel.body}
                    galleries={travel.galleries}
                />
            </div>
            {travel.title === 'Thailand' && <Diving />}
            {travel.title === 'Thailand' && <Water />}
            <Footer />
        </main>
    );
}