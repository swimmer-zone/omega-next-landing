'use client';

import Image from 'next/image';

import './_scss/hex-gallery.scss';

type Props = {
    images?: string[];
};

export default function HexGallery({ images }: Props) {
    const list = Array.isArray(images) ? images : [];
    if (list.length === 0) return null;

    return (
        <section className="hexagon-gallery">
            {list.map((src, index) => (
                <Image
                    key={src}
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    width={216}
                    height={238}
                    className="shade"
                    unoptimized
                />
            ))}
        </section>
    );
}