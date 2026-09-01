'use client';

import { useEffect, useState } from 'react';

import './_scss/toggle.scss';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
    if (typeof window === 'undefined') {
        return 'dark';
    }

    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'light' || storedTheme === 'dark') {
        return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export default function Toggle() {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');

        const handleChange = (event: MediaQueryListEvent) => {
            if (localStorage.getItem('theme') === null) {
                setTheme(event.matches ? 'light' : 'dark');
            }
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    const toggleTheme = () => {
        const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';

        localStorage.setItem('theme', nextTheme);
        document.documentElement.style.colorScheme = nextTheme;
        setTheme(nextTheme);
    };

    return (
        <button type="button" className={`theme-toggle ${theme}`} onClick={toggleTheme}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="4"/>
                <path fill="none" strokeWidth="2" strokeLinecap="round" d="M12 2v2 M12 20v2 M4.93 4.93l1.41 1.41 M17.66 17.66l1.41 1.41 M2 12h2 M20 12h2 M4.93 19.07l1.41-1.41 M17.66 6.34l1.41-1.41"/>
            </svg>
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/>
            </svg>
        </button>
    );
}