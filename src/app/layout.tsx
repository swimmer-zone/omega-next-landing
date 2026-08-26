import React, { JSX } from 'react';
import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
    title: 'Ω',
    description: 'Ω - My music',
    keywords: 'omega,water,phlegmatic,music,techno,ambient,minimal,lounge,blog,weblog,template,html,css,menu,responsive,travel,travels,travelblog,tutorials,diy,yupsie',
    authors: [{ name: 'Omega' }],
};
export const viewport: Viewport = {
    colorScheme: 'light',
    themeColor: '#6a6eec',
    width: 'device-width',
    initialScale: 1,
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>): JSX.Element {
    return (<html lang="en">
        <body>
            {children}
            <div style={{minHeight: '50px'}}>
                <Analytics/>
                <SpeedInsights/>
            </div>
        </body>
    </html>);
}