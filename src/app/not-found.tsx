import React, { JSX } from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

import Hexagons from '@/components/hexagons';

import './_scss/not-found.scss';

export const metadata: Metadata = {
    title: 'ΩMG - 404',
    description: '404 - Not found',
};

export default function NotFound(): JSX.Element {
    return (<main>
        <Hexagons/>
        <div className="error">
            <Image src="/vector/omg.svg" alt="404" height="250" width="480" />
            <h1>404</h1>
        </div>
    </main>);
}