'use client';

import React, { JSX } from 'react';
import Image from 'next/image';
import Hexagons from '@/components/hexagons';
import './_scss/header.scss';

export default function Header(): JSX.Element {
    return (<header id="header">
        <Hexagons/>
        <Image className="logo" alt="Omega Logo" width="1400" height="500" src="vector/omega.svg"/>
        <p>
            Welcome to my website, scroll down to get to know me and my hobbies! Don&#39;t be shy to contact me, my
            details are at the bottom of the page.
        </p>
        <Image className="chevron" src="vector/chevron-animated.svg" alt="Chevron" width="128" height="128"/>
    </header>);
}