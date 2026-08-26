import React, { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import './_scss/diy.scss';

export default function DIY(): JSX.Element {
    return (<section id="diy">
        <article className="diy">
            <h2>DIY</h2>
            <p>
                I spend enough time making things on a screen, so every now and then I like to make something that I can
                actually touch.
            </p>
            <p>
                One of my bigger projects was this <Link href="/diy/cabinet">hexagonal book cabinet</Link>. It started
                as a fairly simple idea and turned into considerably more measuring, cutting and figuring things out
                than I had anticipated. On this page you can find a summary
                of my <Link href="/diy/casemod">other diy projects</Link>.
            </p>
            <p>
                In the past I have written some more blogs and tutorials, they are quite outdated now but you can still
                find them on my playground website in <a href="https://playground.ome.gs/archive">the archive</a>.
            </p>
            <div className="diy-images">
                <Image src="/images/cabinet.jpg" alt="" width={216} height={238} className="diy-image cabinet"/>
                <Image src="/images/caddy.jpg" alt="" width={216} height={238} className="diy-image caddy"/>
                <Image src="/images/bar.jpg" alt="" width={216} height={238} className="diy-image bar"/>
            </div>
        </article>
    </section>);
}
