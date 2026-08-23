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
            className="diy-image cabinet"
            unoptimized
        />
        <Image
            src="/images/caddy.jpg"
            alt=""
            width={216}
            height={238}
            className="diy-image caddy"
            unoptimized
        />
        <Image
            src="/images/bar.jpg"
            alt=""
            width={216}
            height={238}
            className="diy-image bar"
            unoptimized
        />
        <article className="diy">
            <h2>DIY</h2>
            <p>
                I spend enough time making things on a screen, so every now and then I like to make something that I can
                actually touch.
            </p>
            <p>
                One of my bigger projects was this <Link href="/diy/cabinet">hexagonal book cabinet</Link>. It started
                as a fairly simple idea and turned into considerably more measuring, cutting and figuring things out
                than I had anticipated.
            </p>
            <p>
                In the past I have written some more blogs and tutorials, they are quite outdated now but you can find
                them in <a href="/archive">the archive</a> as well as
                some <Link href="/diy/casemod">other diy projects</Link>
            </p>
        </article>
    </section>);
}
