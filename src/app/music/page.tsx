import React from 'react';
import { Metadata } from 'next';
import Tracks from '@/components/tracks';

import '../_scss/_page.scss';
import '../_scss/music.scss';

export const metadata: Metadata = {
    title: 'Ω - Music',
    description: 'All the places I have visited in descending order.',
};

export default async function Music() {
    const sections = [];
    for (let i = 1; i < 8; i++) {
        sections.push(<Tracks key={i} currentSection={i} showTitle={true} />)
    }

    return (<main>
        <h1>My Music</h1>
        {sections}
    </main>);
}