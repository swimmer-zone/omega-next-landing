import React, { JSX } from 'react';

import Tracks from '@/components/tracks';

import './_scss/music.scss';

export default function Music(): JSX.Element {
    return (<section id="music">
        <h2>Top 10</h2>
        <audio></audio>
        <div>
            <p>
                Here you can listen to my personal top 10, as well as a live set that I have performed on a small
                festival. To find the full list of tracks, check out <a href="/music">this page</a>.
            </p>
        </div>
        <Tracks currentSection={0} showTitle={false} />
    </section>);
}