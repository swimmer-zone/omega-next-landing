'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atelierForestDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Carousel from '@/components/carousel';
import HexGallery from '@/components/hex-gallery';
import type { Gallery, Heading } from '@/types/all';

import './_scss/blog-client.scss';

type Props = {
    source: string;
    galleries?: Gallery[];
};

function slugify(text: string) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
}

function extractText(children: React.ReactNode): string {
    return React.Children.toArray(children)
        .map((child) => {
            if (typeof child === 'string' || typeof child === 'number') {
                return String(child);
            }

            if (React.isValidElement<{ children?: React.ReactNode }>(child)) {
                return extractText(child.props.children);
            }

            return '';
        })
        .join('');
}

function extractHeadings(markdown: string): Heading[] {
    const headingRegex = /^(#{2,4})\s+(.+)$/gm;

    return Array.from(markdown.matchAll(headingRegex)).map((match) => {
        const depth = match[1].length;
        const text = match[2].trim();

        return {
            depth,
            text,
            id: slugify(text),
        };
    });
}

export default function BlogClient({ source, galleries }: Props) {
    const headings = extractHeadings(source);

    const parts = source.split(
        /(\[toc]|\[(?:carousel|hex)\s+folder="[^"]+"[^\]]*])/gi
    );

    return (
        <>
            {parts.map((part, index) => {
                if (part.toLowerCase() === '[toc]') {
                    return (
                        <nav key={index} className="toc">
                            <strong>Table of Contents</strong>
                            <ul>
                                {headings.map((heading) => (
                                    <li
                                        key={heading.id}
                                        className={`toc-depth-${heading.depth}`}
                                    >
                                        <a href={`#${heading.id}`}>
                                            {heading.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    );
                }

                const shortcode = part.match(
                    /\[(carousel|hex)\s+folder="([^"]+)"[^\]]*]/
                );

                if (shortcode) {
                    const type = shortcode[1];
                    const folder = shortcode[2];
                    const gallery = (galleries ?? []).find(
                        (gallery) => gallery.slug === folder
                    );
                    if (!gallery) {
                        return (
                            <pre key={index} style={{ color: 'red' }}>
                                Missing gallery: {folder}
                            </pre>
                        );
                    }
                    if (type === 'carousel') {
                        return (<Carousel key={index} images={gallery.images}/>);
                    }
                    if (type === 'hex') {
                        return (
                            <HexGallery
                                key={index}
                                images={gallery.images}
                            />
                        );
                    }
                }

                return (
                    <ReactMarkdown
                        key={index}
                        remarkPlugins={[remarkGfm]}
                        components={{
                            h2({ children }) {
                                const text = extractText(children);
                                const id = slugify(text);

                                return <h2 id={id}>{children}</h2>;
                            },

                            h3({ children }) {
                                const text = extractText(children);
                                const id = slugify(text);

                                return <h3 id={id}>{children}</h3>;
                            },

                            h4({ children }) {
                                const text = extractText(children);
                                const id = slugify(text);

                                return <h4 id={id}>{children}</h4>;
                            },

                            code({
                                     inline,
                                     className,
                                     children,
                                     ...props
                                 }: {
                                inline?: boolean;
                                className?: string;
                                children?: React.ReactNode;
                            }) {
                                const match = /language-(\w+)/.exec(className || '');

                                if (!inline && match) {
                                    const code = String(children).replace(/\n$/, '');

                                    return (
                                        <div className="codeParent">
                                            <CopyToClipboard text={code}>
                                                <button className="copyButton" aria-label="Copy code">
                                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.24 2H11.3458C9.58159 1.99999 8.18418 1.99997 7.09054 2.1476C5.96501 2.29953 5.05402 2.61964 4.33559 3.34096C3.61717 4.06227 3.29833 4.97692 3.14701 6.10697C2.99997 7.205 2.99999 8.60802 3 10.3793V16.2169C3 17.725 3.91995 19.0174 5.22717 19.5592C5.15989 18.6498 5.15994 17.3737 5.16 16.312L5.16 11.3976L5.16 11.3024C5.15993 10.0207 5.15986 8.91644 5.27828 8.03211C5.40519 7.08438 5.69139 6.17592 6.4253 5.43906C7.15921 4.70219 8.06404 4.41485 9.00798 4.28743C9.88877 4.16854 10.9887 4.1686 12.2652 4.16867L12.36 4.16868H15.24L15.3348 4.16867C16.6113 4.1686 17.7088 4.16854 18.5896 4.28743C18.0627 2.94779 16.7616 2 15.24 2Z" />
                                                        <path d="M6.6001 11.3974C6.6001 8.67119 6.6001 7.3081 7.44363 6.46118C8.28716 5.61426 9.64481 5.61426 12.3601 5.61426H15.2401C17.9554 5.61426 19.313 5.61426 20.1566 6.46118C21.0001 7.3081 21.0001 8.6712 21.0001 11.3974V16.2167C21.0001 18.9429 21.0001 20.306 20.1566 21.1529C19.313 21.9998 17.9554 21.9998 15.2401 21.9998H12.3601C9.64481 21.9998 8.28716 21.9998 7.44363 21.1529C6.6001 20.306 6.6001 18.9429 6.6001 16.2167V11.3974Z" />
                                                    </svg>
                                                </button>
                                            </CopyToClipboard>

                                            <SyntaxHighlighter
                                                style={atelierForestDark}
                                                language={match[1]}
                                                PreTag="div"
                                            >
                                                {code}
                                            </SyntaxHighlighter>
                                        </div>
                                    );
                                }

                                return (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                );
                            },
                        }}
                    >
                        {part}
                    </ReactMarkdown>
                );
            })}
        </>
    );
}
