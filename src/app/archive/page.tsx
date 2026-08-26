import React, { JSX } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Footer from '@/components/footer';
import '../_scss/_page.scss';
import { API_URL } from '@/lib/api';
import type { Blog } from '@/types/all';

export const metadata: Metadata = {
    title: 'Ω - Archive',
    description: '',
};

async function getBlogs(): Promise<Blog[] | null> {
    const response = await fetch(`${API_URL}/archive`, {
        next: { revalidate: 300 },
    });

    if (response.status === 404) {
        return null;
    }

    if (!response.ok) {
        throw new Error('Failed to fetch blogs');
    }

    return response.json();
}

async function getTutorials(): Promise<Blog[] | null> {
    const response = await fetch(`${API_URL}/tutorials`, {
        next: { revalidate: 300 },
    });

    if (response.status === 404) {
        return null;
    }

    if (!response.ok) {
        throw new Error('Failed to fetch tutorials');
    }

    return response.json();
}

export default async function Archive(): Promise<JSX.Element> {
    const blogs = (await getBlogs()) || [];
    const tutorials = (await getTutorials()) || [];

    return (<main>
        <div className="content-column">
            <h1>Archive</h1>
            <h2>Tutorials</h2>
            <p>
                I&#39;ve written a couple of tutorials, mostly for documentation purposes. Currently this website is
                running on Next.js, which is getting the data through an API. This way I can use Laravel with Filament
                to make my website more dynamic. A tutorial on that might follow soon.
            </p>
            <ul>
                {tutorials.map((tutorial: Blog, index: number) => (
                    <li key={index}>
                        <Link href={'/tutorials/' + tutorial.slug} title={tutorial.posted}>
                            {tutorial.title}
                        </Link>
                        {tutorial.description}
                    </li>
                ))}
            </ul>
            <h2>Bookmarks</h2>
            <p>
                My bookmarks are too much to all keep them stored in my browser and most of them are also for sharing,
                here is a short list of some resources that I use on a daily basis and you can
                also <a href="/downloads/bookmarks.html" download>download my full collection</a> as a file, ready to be
                imported in your browser.
            </p>
            <ul>
                <li><a href="https://tympanus.net/codrops/">Codrops</a></li>
                <li><a href="https://css-tricks.com/">CSS Tricks</a></li>
                <li><a href="https://caniuse.com/">Can I Use</a></li>
                <li><a href="https://www.smashingmagazine.com/">Smashing Magazine</a></li>
                <li><a href="https://blog.iusmentis.com/">Arnoud Engelfriet</a></li>
                <li><a href="https://tweakers.net/">Tweakers</a></li>
                <li><a href="https://gathering.tweakers.net/">Gathering of Tweakers</a></li>
                <li><a href="https://tweakblogs.net/">Tweakblogs</a></li>
                <li><a href="https://xkcd.com/">xkcd</a></li>
                <li><a href="https://what-if.xkcd.com/">What If?</a></li>
                <li><a href="https://neal.fun/">Neal.fun</a></li>
                <li><a href="https://speld.nl/">De Speld</a></li>
                <li><a href="https://www.yankodesign.com/">Yanko Design</a></li>
                <li><a href="https://freesound.org">Freesound</a></li>
                <li><a href="https://www.looperman.com/">Looperman</a></li>
                <li><a href="https://nextgtrgod.github.io/webaudio-synth/">Web Synth</a></li>
                <li><a href="http://psytranceguide.com/">Psytrance Guide</a></li>
                <li><a href="https://codepen.io/jcoulterdesign/full/ZxXbeP/">Solar System</a></li>
                <li><a href="https://www.goabase.net/">Goa Base</a></li>
                <li><a href="http://everynoise.com/">Every Noise</a></li>
                <li><a href="https://ektoplazm.com/section/free-music">Ektoplazm</a></li>
                <li><a href="https://www.w3schools.com/colors/colors_converter.asp">Color Converter</a></li>
            </ul>
            <h2>Old Blogs</h2>
            <ul>
                {blogs.map((blog: Blog, index: number) => (
                    <li key={index}>
                        <Link href={'/blog/' + blog.slug} title={blog.posted}>
                            {blog.title}
                        </Link>
                        {blog.description}
                    </li>
                ))}
            </ul>
        </div>
        <Footer/>
    </main>);
}