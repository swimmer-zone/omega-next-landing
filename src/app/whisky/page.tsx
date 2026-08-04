import React, { JSX } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer';
import Rating from '@/components/rating';
import type { Tasting } from '@/types/all';

import '../_scss/_page.scss';
import '../_scss/whisky.scss';

import { API_URL } from '@/lib/api';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Ω - Whisky',
    description: 'My whisky tastings.',
};

async function getTastings(): Promise<Tasting[] | null> {
    const response = await fetch(`${API_URL}/whisky`, {
        next: { revalidate: 300 },
    });

    if (response.status === 404) {
        return null;
    }

    if (!response.ok) {
        throw new Error('Failed to fetch tastings');
    }

    const json = await response.json();

    return json.data;
}

export default async function Whisky(): Promise<JSX.Element> {
    const tastings = await getTastings();

    if (!tastings) {
        return notFound();
    }
    if (tastings.length === 0) {
        return (<main>
            <div className="content-column">
                <h1>Whisky</h1>
                <p>No tastings available</p>
            </div>
            <Footer/>
        </main>);
    }

    return (<main>
        <div className="content-column">
            <h1>Whisky</h1>
            <p key="intro">
                My love for whisky began quite some time ago when I went to the liquor store and let them advise me a
                whisky that was not too peaty and I came home with the Tomatin Legacy, which was more of the spicy and
                fruity kind (vanilla and citrus). It really took off when I went
                to <Link href="/travels/uk#edinburgh">Edinburgh</Link> and visited the whisky museum. From that moment
                on I have tried {tastings.length} whisky&apos;s, starting with Scotch, but after visiting the
                Teeling distillery and the whiskey museum in <Link href="/travels/uk#dublin">Dublin</Link> my interest
                in Irish whiskey grew as well.
            </p>
            <p>A couple of resources to explore whisky</p>
            <ul>
                <li>
                    <a href="https://blog.thewhiskyexchange.com/2022/11/whisky-101-part-one-a-beginners-guide/">
                        Whisky 101 - A beginner&apos;s guide
                    </a>
                </li>
                <li>
                    <a href="https://blog.thewhiskyexchange.com/2022/11/whisky-101-part-two-whiskey-around-the-world/">
                        Whisky 101 - Whisk(e)y around the world
                    </a>
                </li>
            </ul>

            <h2 id="whiskys">My Tastings</h2>

            {tastings.map(tasting => {
                return (<React.Fragment key={tasting.id + '_fragment'}>
                    <div className="whisky-wrapper" key={tasting.id + '_wrapper'}>
                        <div className="whisky-header" key={tasting.id + '_header'}>
                            <h2 key={tasting.id + '_title'}>{tasting.brand}</h2>
                            <h3 key={tasting.id + '_name'}>{tasting.name}</h3>
                        </div>
                        <div className="rating-wrapper">
                            <Rating rating={tasting.rating as number}/>
                        </div>
                        <div className="specs">
                            <div className="spec-label">Origin:</div>
                            <div className="spec-value">
                                {tasting.country} {tasting.region && <>&gt; {tasting.region}</>}
                            </div>

                            <div className="spec-label">Type:</div>
                            <div className="spec-value">{tasting.type}</div>

                            <div className="spec-label">Cask Type:</div>
                            <div className="spec-value">{tasting.cask_type}</div>

                            {tasting.notes && <>
                                <div className="spec-label">Age:</div>
                                <div className="spec-value">{tasting.age}</div>
                            </>}

                            <div className="spec-label">Glance:</div>
                            <div className="spec-value">{tasting.glance}</div>

                            <div className="spec-label">Color:</div>
                            <div className="spec-value">
                                <div className="color-swatch" style={{backgroundColor: tasting.color?.color}}/>
                                {tasting.color?.name}
                            </div>

                            <div className="spec-label">Strength:</div>
                            <div className="spec-value">{tasting.strength}% abv</div>

                            <div className="spec-label">Tasted at:</div>
                            <div className="spec-value">{tasting.location}</div>

                            <div className="spec-label">Date:</div>
                            <div className="spec-value">{tasting.date_of_tasting}</div>

                            <div className="spec-label">Flavour:</div>
                            <div className="spec-value">{tasting.flavours}</div>

                            <div className="spec-label">Finish:</div>
                            <div className="spec-value">{tasting.finish}</div>

                            {tasting.notes && <>
                                <div className="spec-label">Other notes:</div>
                                <div className="spec-value">{tasting.notes}</div>
                            </>}
                        </div>
                        {tasting.region && <div className="whisky-map">
                            <Image src={"/vector/whisky/" + tasting.region.toLowerCase() + ".svg"} alt="" height={200} width={200}/>
                        </div>}
                        {!tasting.region && <div className="whisky-map"></div>}
                    </div>
                </React.Fragment>);
            })}
        </div>
        <Footer/>
    </main>);
}