import React, { JSX } from 'react';
import Link from 'next/link';
import './_scss/diy.scss';
import Image from "next/image";

export default function DIY(): JSX.Element {
    return (<section id="diy">
        <Image
            src="/images/cabinet.jpg"
            alt=""
            width={216}
            height={238}
            className="diy-image"
            unoptimized
        />
        <article className="diy">
            <h2>DIY</h2>
            <p>
                Here you can see a cabinet that I made out of hexagons, you can find the full build
                log <Link href="/diy/cabinet">here</Link> as wel as
                some <Link href="/diy/casemod">other diy projects</Link>. In the past I have written some more blogs and
                tutorials, they are quite outdated now but you can find them
                in <a href="/archive">the archive</a>.
            </p>
        </article>
    </section>);
}
