'use client';

import React, { useEffect, useState, JSX } from 'react';

import './_scss/nav.scss';
import Image from 'next/image';

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

    useEffect(() => {
        const header = document.querySelector('header');

        if (!header) {
            return;
        }

        const handleScroll = () => {
            const viewportMiddle = window.scrollY + window.innerHeight / 2;

            // Find the section containing the middle of the viewport
            let currentSection: string = sections[0];

            for (const id of sections) {
                const section = document.getElementById(id);

                if (!section) {
                    continue;
                }

                const sectionTop = section.getBoundingClientRect().top + window.scrollY;

                const sectionBottom = sectionTop + section.offsetHeight;

                if (viewportMiddle >= sectionTop && viewportMiddle < sectionBottom) {
                    currentSection = id;
                    break;
                }
            }

            setActiveSection(currentSection);
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

    return (
        <nav>
            <ul>
                {sections.map((section) => (
                    <li key={section}>
                        <a href={"#" + section} className={activeSection === section ? 'is-active' : ''}>
                            <Image className="menu-image"
                                   src={"vector/menu/" + section + ".svg"}
                                   alt={section}
                                   width="24"
                                   height="24"/>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}