import React, { JSX } from 'react';
import Image from 'next/image';
import { API_URL, STORAGE_URL } from '@/lib/api';
import Form from '@/components/form';
import type { Social } from '@/types/all';
import './_scss/footer.scss';

async function getSocials(): Promise<Social[] | null> {
    const response = await fetch(API_URL + '/social', {
        next: { revalidate: 300 },
    });

    if (response.status === 404) {
        return null;
    }

    if (!response.ok) {
        throw new Error('Failed to fetch links to social media');
    }

    return response.json();
}

export default async function Footer(): Promise<JSX.Element> {
    const social = (await getSocials()) || [];

    return (<footer id="contact">
        <h2>Contact</h2>
        <article>
            <Form/>

            <div className="social">
                {social.map((icon, key) => {
                    return (
                        <a id={'social_' + key} key={'social_' + key} href={icon.url} title={icon.title}>
                            <Image width={64} height={64} src={STORAGE_URL + '/' + icon.icon} alt={icon.title} />
                        </a>
                    );
                })}
            </div>
        </article>
    </footer>);
}