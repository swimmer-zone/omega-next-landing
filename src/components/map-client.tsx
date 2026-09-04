'use client';

import React, { JSX, useEffect, useState } from 'react';
import Link from 'next/link';
import {
    Annotation,
    ComposableMap,
    Geographies,
    Geography,
    Graticule,
    Latitude,
    Longitude,
    Marker,
} from '@vnedyalk0v/react19-simple-maps';

import type { City, Country, RotationAngles } from '@/types/all';

import countries from '../json/countries.json';

type Props = {
    visitedCities: City[];
    visitedCountries: Country[];
};

export default function MapClient({ visitedCities, visitedCountries }: Props): JSX.Element {
    const visitedCountryNames = new Set(
        visitedCountries.map((country) => country.name)
    );

    const [hoveredCity, setHoveredCity] = useState<string | null>(null);
    const [theme, setTheme] = useState<'light' | 'dark'>(
        () => document.documentElement.style.colorScheme as 'light' | 'dark'
    );

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setTheme(
                document.documentElement.style.colorScheme as 'light' | 'dark'
            );
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['style'],
        });

        return () => observer.disconnect();
    }, []);

    const isLight = theme === 'light';

    let i = 0;

    return (
        <ComposableMap
            projectionConfig={{
                rotate: [-45, -35, 0] as RotationAngles,
                scale: 350,
            }}
        >
            <Graticule stroke={isLight ? '#eeeeee' : '#111111'} />

            <Geographies geography={countries}>
                {({ geographies }) => (
                    <>
                        {geographies.map((geo) => {
                            const highlighted = visitedCountryNames.has(
                                geo.properties.name
                            );

                            i++;

                            return (
                                <Geography
                                    key={i}
                                    geography={geo}
                                    style={{
                                        default: {
                                            fill: highlighted
                                                ? '#6c6eecaa'
                                                : isLight ? '#ddddddaa' : '#222222aa',
                                            stroke: isLight ? '#ffffff' : '#000000',
                                        },
                                        hover: {
                                            fill: '#6c6eec44',
                                            stroke: isLight ? '#ffffff' : '#000000',
                                        },
                                        pressed: {
                                            fill: '#6c6eec88',
                                            stroke: isLight ? '#ffffff' : '#000000',
                                        },
                                    }}
                                />
                            );
                        })}
                    </>
                )}
            </Geographies>

            {visitedCities.map(({ name, latitude, longitude, link }) => {
                const label = (
                    <text
                        fill={
                            link
                                ? isLight ? '#222222' : '#dddddd'
                                : isLight ? '#444444' : '#bbbbbb'
                        }
                        style={{
                            cursor: link ? 'pointer' : 'default',
                            fontSize: '8px',
                        }}
                    >
                        {name}
                    </text>
                );

                return (
                    <React.Fragment key={name}>
                        <Marker
                            coordinates={[
                                longitude as Longitude,
                                latitude as Latitude,
                            ]}
                            onMouseEnter={() => setHoveredCity(name)}
                            onMouseLeave={() => setHoveredCity(null)}
                        >
                            <circle r={2} fill="#ffc917" />
                        </Marker>

                        {hoveredCity === name && (
                            <Annotation
                                subject={[
                                    longitude as Longitude,
                                    latitude as Latitude,
                                ]}
                                dx={2}
                                dy={2}
                                connectorProps={{
                                    stroke: '#888888',
                                    strokeWidth: 1,
                                    strokeLinecap: 'round',
                                }}
                            >
                                {link ? (
                                    <Link href={'/travels/' + link}>
                                        {label}
                                    </Link>
                                ) : (
                                    label
                                )}
                            </Annotation>
                        )}
                    </React.Fragment>
                );
            })}
        </ComposableMap>
    );
}