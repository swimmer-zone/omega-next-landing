export type Blog = {
    title: string;
    slug: string;
    images: number;
    posted: string;
    description: string;
    galleries: Gallery[];
    body: string;
    published_at: string;
    panorama: string;
    image_count?: number | null;
};

export type City = {
    name: string;
    latitude: number;
    longitude: number;
    annotation: [number, number, number];
    link?: string | null;
};

export type Country = {
    name: string;
};

export type Gallery = {
    slug: string;
    images: string[];
};

export type Heading = {
    depth: number;
    text: string;
    id: string;
};

export type Intro = {
    content: string;
};

export type Section = {
    id: number;
    title: string;
    intro?: string | null;
    tracks: Track[];
};

export type RotationAngles = [number, number, number] & {
    __brand: 'rotationAngles';
};

export type Social = {
    url: string;
    title: string;
    icon: string;
};

export type Tasting = {
    id: number;
    brand: string;
    name: string;
    country: string;
    region: string | null;
    type: string;
    cask_type: string;
    age: string | null;
    glance: string;
    color: {
        name: string;
        color: string;
    } | null;
    strength: string;
    location: string;
    date_of_tasting: string;
    rating: number;
    notes: string | null;
    flavours: string[];
    finish: string;
};

export type Track = {
    id: number;
    title: string;
    slug: string;
    file: string;
    duration: number;
    remark?: string | null;
};