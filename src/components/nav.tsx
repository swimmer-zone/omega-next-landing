'use client';

import React, { useEffect, useState, JSX } from 'react';
import Image from 'next/image';

import './_scss/nav.scss';

const sections = [
    'header',
    'music',
    'travels',
    'whisky',
    'diy',
    'resume',
    'contact',
] as const;

export default function Nav(): JSX.Element {
    const [activeSection, setActiveSection] =
        useState<string>('header');

    const [scrollProgress, setScrollProgress] =
        useState(0);

    useEffect(() => {
        let frame: number | null = null;

        const handleScroll = () => {
            // Don't perform layout calculations for every individual
            // scroll event.
            if (frame !== null) {
                return;
            }

            frame = requestAnimationFrame(() => {
                const viewportMiddle =
                    window.scrollY + window.innerHeight / 2;

                let currentSection: string = sections[0];

                for (const id of sections) {
                    const section =
                        document.getElementById(id);

                    if (!section) {
                        continue;
                    }

                    const rect =
                        section.getBoundingClientRect();

                    if (
                        viewportMiddle >=
                        rect.top + window.scrollY &&
                        viewportMiddle <
                        rect.bottom + window.scrollY
                    ) {
                        currentSection = id;
                        break;
                    }
                }

                setActiveSection(currentSection);

                const maxScroll =
                    document.documentElement.scrollHeight -
                    window.innerHeight;

                setScrollProgress(
                    maxScroll > 0
                        ? window.scrollY / maxScroll
                        : 0
                );

                frame = null;
            });
        };

        handleScroll();

        window.addEventListener(
            'scroll',
            handleScroll,
            { passive: true }
        );

        window.addEventListener(
            'resize',
            handleScroll
        );

        return () => {
            window.removeEventListener(
                'scroll',
                handleScroll
            );

            window.removeEventListener(
                'resize',
                handleScroll
            );

            if (frame !== null) {
                cancelAnimationFrame(frame);
            }
        };
    }, []);

    return (
        <nav>
            <ul>
                {sections.map((section) => (
                    <li key={section}>
                        <a
                            href={`#${section}`}
                            className={
                                activeSection === section
                                    ? 'is-active'
                                    : ''
                            }
                        >
                            <Image
                                className="menu-image"
                                src={`vector/menu/${section}.svg`}
                                alt={section}
                                width={24}
                                height={24}
                            />
                        </a>
                    </li>
                ))}
            </ul>

            <div
                className="scroll-marker"
                style={{
                    top: `${scrollProgress * 100}%`,
                }}
            />
        </nav>
    );
}