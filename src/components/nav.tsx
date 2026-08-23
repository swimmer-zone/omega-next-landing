'use client';

import React, { useEffect, useRef, useState, JSX } from 'react';
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
    const [activeSection, setActiveSection] = useState<string>('header');
    const [scrollProgress, setScrollProgress] = useState(0);

    const navRef = useRef<HTMLElement>(null);
    const draggingRef = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            const viewportMiddle =
                window.scrollY + window.innerHeight / 2;

            let currentSection: string = sections[0];

            for (const id of sections) {
                const section = document.getElementById(id);

                if (!section) {
                    continue;
                }

                const sectionTop =
                    section.getBoundingClientRect().top +
                    window.scrollY;

                const sectionBottom =
                    sectionTop + section.offsetHeight;

                if (
                    viewportMiddle >= sectionTop &&
                    viewportMiddle < sectionBottom
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
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll, {
            passive: true,
        });

        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const handlePointerDown = (
        event: React.PointerEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();

        draggingRef.current = true;

        event.currentTarget.setPointerCapture(event.pointerId);
    };

    const handlePointerMove = (
        event: React.PointerEvent<HTMLButtonElement>
    ) => {
        if (!draggingRef.current || !navRef.current) {
            return;
        }

        const nav = navRef.current;
        const rect = nav.getBoundingClientRect();

        const y = event.clientY - rect.top;

        const progress = Math.max(
            0,
            Math.min(1, y / rect.height)
        );

        const maxScroll =
            document.documentElement.scrollHeight -
            window.innerHeight;

        window.scrollTo({
            top: progress * maxScroll,
            behavior: 'auto',
        });
    };

    const handlePointerUp = (
        event: React.PointerEvent<HTMLButtonElement>
    ) => {
        draggingRef.current = false;

        event.currentTarget.releasePointerCapture(
            event.pointerId
        );
    };

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