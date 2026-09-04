import React from "react";

import TracksClient from '@/components/tracks-client';
import { API_URL } from '@/lib/api';

import type { Section } from '@/types/all';

type Props = {
    currentSection: number;
    showTitle: boolean;
};

async function getMusic(): Promise<Section[]> {
    const response = await fetch(API_URL + '/music', {
        next: { revalidate: 300 },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch music');
    }

    const json = await response.json();

    return json.data ?? json;
}

export default async function Tracks({currentSection, showTitle}: Props) {
    const sections = await getMusic();

    return <TracksClient section={sections[currentSection]} showTitle={showTitle} />;
}