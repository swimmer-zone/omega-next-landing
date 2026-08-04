'use client';

import { useEffect } from 'react';

export default function EasterEgg() {
    useEffect(() => {
        if (process.env.NODE_ENV !== 'production') return;

        let triggered = false;

        const threshold = 160; // width/height difference threshold

        const detectDevTools = () => {
            const widthDiff = window.outerWidth - window.innerWidth;
            const heightDiff = window.outerHeight - window.innerHeight;

            if (
                !triggered &&
                (widthDiff > threshold || heightDiff > threshold)
            ) {
                triggered = true;
                runEasterEgg();
            }
        };

        const runEasterEgg = () => {
            const final = [
                "       █████████",
                "     ███       ███",
                "    ██           ██",
                "   ██             ██",
                "  ██               ██",
                "  ██               ██",
                "  ██               ██",
                "   ██             ██",
                "    ███         ███",
                "      ███     ███",
                "       █████████",
                "     ███       ███",
                "  ████          ████",
            ];

            const chars = "Ω█▓▒░<>/\\|{}[]+=-*#@$%";
            const width = Math.max(...final.map(l => l.length));
            const height = final.length;

            const frame = Array.from({ length: height }, () =>
                Array.from({ length: width }, () => " ")
            );

            let progress = 0;

            const interval = setInterval(() => {
                for (let y = 0; y < height; y++) {
                    for (let x = 0; x < width; x++) {
                        if (final[y][x] && Math.random() > progress) {
                            frame[y][x] = chars[Math.floor(Math.random() * chars.length)];
                        } else {
                            frame[y][x] = final[y][x] || " ";
                        }
                    }
                }

                console.clear();
                console.log(
                    "%c" + frame.map(row => row.join("")).join("\n"),
                    "color:#6c6eec;font-weight:bold"
                );

                progress += 0.08;
            }, 400);
        };

        const interval = setInterval(detectDevTools, 500);

        return () => clearInterval(interval);
    }, []);

    return null;
}