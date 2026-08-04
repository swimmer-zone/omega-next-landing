import React, { JSX } from 'react';
import Link from 'next/link';
import { API_URL } from '@/lib/api';
import type { Blog } from '@/types/all';
import './_scss/diy.scss';

async function getBlogs(): Promise<Blog[] | null> {
    const response = await fetch(`${API_URL}/diy`, {
        next: { revalidate: 300 },
    });

    if (response.status === 404) {
        return null;
    }

    if (!response.ok) {
        throw new Error('Failed to fetch blogs');
    }

    return response.json();
}

export default async function DIY(): Promise<JSX.Element> {
    const blogs = (await getBlogs()) || [];

    return (<section id="diy">
        <h2>DIY</h2>
        <article>
            <ul>
                {blogs.map((blog: Blog, index: number) => (
                    <li key={index}>
                        <Link href={'blog/' + blog.slug} title={blog.posted}>
                            {blog.title}
                        </Link>
                        {blog.description}
                    </li>
                ))}
            </ul>
        </article>
    </section>);
}