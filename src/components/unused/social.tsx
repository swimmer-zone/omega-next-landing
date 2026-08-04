import { JSX } from 'react';
import Image from 'next/image';
import './social.scss';
import { API_URL, STORAGE_URL } from '@/lib/api';
import type { Social } from '@/types/all';

type Props = {
    location: string
};

async function getSocials(): Promise<Social[] | null> {
    const response = await fetch(`${API_URL}/social`, {
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

export default async function Social({ location }: Props): Promise<JSX.Element> {
    const social = (await getSocials()) || [];

    return (
        <div className={'social ' + location}>
            {social.map((icon, key) => {

                return (
                    <a id={'social_' + key} key={'social_' + key} href={icon.url} title={icon.title}>
                        <Image className="svg" width={16} height={16} src={STORAGE_URL + '/' + icon.icon} alt={icon.title} />
                    </a>
                );
            })}
        </div>
    );
}