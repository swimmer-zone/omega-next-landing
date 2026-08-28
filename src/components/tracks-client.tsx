'use client';

import React, { JSX, useRef, useState } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import { STORAGE_URL } from '@/lib/api';

import type { Section } from '@/types/all';

import 'react-h5-audio-player/lib/styles.css';
import './_scss/tracks.scss';

function formatTime(seconds: number | null): string {
    if (seconds == null || Number.isNaN(seconds)) {
        return '';
    }

    return `${Math.floor(seconds / 60)}:${String(
        Math.floor(seconds % 60)
    ).padStart(2, '0')}`;
}

function countDown(
    duration: number | null,
    time: number | null
): string {
    if (
        time == null ||
        duration == null ||
        Number.isNaN(time)
    ) {
        return '';
    }

    return formatTime(duration - time);
}

function getVisitorId(): string {
    const key = 'omega_visitor_id';

    let visitorId = localStorage.getItem(key);

    if (!visitorId) {
        visitorId = crypto.randomUUID();
        localStorage.setItem(key, visitorId);
    }

    return visitorId;
}

type Props = {
    section: Section;
    showTitle: boolean;
};

export default function TracksClient({section, showTitle}: Props): JSX.Element {
    const playerRef = useRef<AudioPlayer | null>(null);
    const shouldPlayRef = useRef<boolean>(false);

    const currentPlayIdRef = useRef<number | null>(null);
    const lastProgressSentRef = useRef<number>(0);
    const firstTrack = section.tracks?.[0];

    const [currentTrack, setCurrentTrack] = useState<string | null>(
        firstTrack
            ? `${STORAGE_URL}/${firstTrack.file}`
            : null
    );
    const [currentTime, setCurrentTime] = useState<number | null>(null);
    const [duration, setDuration] = useState<number | null>(null);
    const [currentTrackIndex, setCurrentTrackIndex] = useState<number | null>(
        firstTrack ? 0 : null
    );

    const updatePlaySession = (
        playId: number,
        playedSeconds: number,
        durationSeconds: number | null,
        completed = false
    ) => {
        fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/track-plays/${playId}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    played_seconds: playedSeconds,
                    duration_seconds: durationSeconds,
                    completed,
                }),
            }
        ).catch(() => {});
    };

    const startPlaySession = async (trackId: number) => {
        currentPlayIdRef.current = null;
        lastProgressSentRef.current = 0;

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/tracks/${trackId}/play/start`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        visitor_id: getVisitorId(),
                        duration_seconds: null,
                    }),
                }
            );

            const data = await response.json();

            currentPlayIdRef.current = data.id;
        } catch {
            currentPlayIdRef.current = null;
        }
    };

    const getAudioElement = (): HTMLAudioElement | null => {
        return playerRef.current?.audio.current ?? null;
    };

    const playTrack = (index: number) => {
        const track = section.tracks[index];

        if (!track) {
            return;
        }

        const fileUrl = `${STORAGE_URL}/${track.file}`;

        shouldPlayRef.current = true;

        setCurrentTrack(fileUrl);
        setCurrentTrackIndex(index);
        setCurrentTime(null);
        setDuration(null);

        startPlaySession(track.id);
    };

    const handleCanPlay = () => {
        if (!shouldPlayRef.current) {
            return;
        }

        const audio = getAudioElement();

        if (!audio) {
            return;
        }

        shouldPlayRef.current = false;

        audio.play().catch(() => {});
    };

    const handleTrackClick = (index: number) => {
        playTrack(index);
    };

    const handlePrevious = () => {
        if (currentTrackIndex === null) {
            return;
        }

        const previousIndex = currentTrackIndex - 1;

        if (previousIndex < 0) {
            return;
        }

        playTrack(previousIndex);
    };

    const handleNext = () => {
        if (currentTrackIndex === null) {
            return;
        }

        const nextIndex = currentTrackIndex + 1;

        if (nextIndex >= section.tracks.length) {
            return;
        }

        playTrack(nextIndex);
    };

    const handleListen = (event: Event) => {
        const audio = event.currentTarget as HTMLAudioElement;

        const currentSeconds = Math.floor(audio.currentTime);

        const durationSeconds = Number.isFinite(audio.duration)
            ? Math.floor(audio.duration)
            : null;

        setCurrentTime(audio.currentTime);
        setDuration(
            Number.isFinite(audio.duration)
                ? audio.duration
                : null
        );

        const playId = currentPlayIdRef.current;

        if (!playId) {
            return;
        }

        if (
            currentSeconds >= 10 &&
            currentSeconds - lastProgressSentRef.current >= 5
        ) {
            lastProgressSentRef.current = currentSeconds;

            updatePlaySession(
                playId,
                currentSeconds,
                durationSeconds,
                false
            );
        }
    };

    const handleEnded = () => {
        const audio = getAudioElement();
        const playId = currentPlayIdRef.current;

        if (playId && audio) {
            const playedSeconds = Number.isFinite(audio.duration)
                ? Math.floor(audio.duration)
                : Math.floor(audio.currentTime);

            const durationSeconds = Number.isFinite(audio.duration)
                ? Math.floor(audio.duration)
                : null;

            updatePlaySession(
                playId,
                playedSeconds,
                durationSeconds,
                true
            );
        }

        if (
            currentTrackIndex === null ||
            currentTrackIndex >= section.tracks.length - 1
        ) {
            return;
        }

        playTrack(currentTrackIndex + 1);
    };

    const timeLeft = countDown(duration, currentTime);

    return (
        <>
            <article
                key={section.id}
                id={`section_${section.id}`}
                className={showTitle ? 'album' : 'no-album'}
            >
                    {showTitle && (
                        <h3>{section.title}</h3>
                    )}

                    <ul>
                        {(section.tracks ?? []).map(
                            (track, index) => {
                                const fileUrl =
                                    `${STORAGE_URL}/${track.file}`;

                                const isPlaying =
                                    currentTrack === fileUrl &&
                                    currentTime != null;

                                return (
                                    <li key={track.id}>
                                        <span className="a">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleTrackClick(index)
                                                }
                                                data-permalink={
                                                    track.slug
                                                }
                                                className={
                                                    isPlaying
                                                        ? 'track-button playing'
                                                        : 'track-button'
                                                }
                                            >
                                                {track.title}

                                                {track.remark && (
                                                    <small className="remark">
                                                        ({track.remark})
                                                    </small>
                                                )}
                                            </button>
                                        </span>

                                        <span
                                            className="duration"
                                            data-seconds={
                                                track.duration
                                            }
                                        >
                                            {isPlaying
                                                ? timeLeft
                                                : formatTime(
                                                    track.duration
                                                )}
                                        </span>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                <AudioPlayer
                    ref={playerRef}
                    src={currentTrack ?? undefined}
                    listenInterval={1000}
                    onListen={handleListen}
                    onCanPlay={handleCanPlay}
                    onClickPrevious={handlePrevious}
                    onClickNext={handleNext}
                    onEnded={handleEnded}
                    showSkipControls
                    showJumpControls={false}
                    customControlsSection={[
                        RHAP_UI.MAIN_CONTROLS,
                        RHAP_UI.VOLUME_CONTROLS,
                    ]}
                />
            </article>
        </>
    );
}