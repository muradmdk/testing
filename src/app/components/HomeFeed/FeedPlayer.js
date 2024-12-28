import React, { useEffect, useState } from 'react';
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useAppSelector, useAppDispatch } from '@/app/redux/store';
import { playTrack, pauseTrack, setTrack } from '@/app/redux/audioSlice';
import play from "@/app/assets/feed/play-icon.png"
import Image from 'next/image';
import "@/app/styles/Feeds/feeds.css"

export default function FeedPlayer({ trackSrc, trackId }) {
    const dispatch = useAppDispatch();
    const { currentTrackId, currentTrackSrc, isPlaying } = useAppSelector((state) => state.audio);
    const [isVisible, setIsVisible] = useState(false);

    const handleLoadTrack = () => {
        dispatch(setTrack({ id: trackId, src: trackSrc }));
    };

    useEffect(() => {
        setIsVisible(currentTrackId === trackId);
    }, [currentTrackId, trackId]);

    const playerStyle = {
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
    };

    return (
        <div>
            {currentTrackId !== trackId && (
                <div className='header-audio-control' onClick={handleLoadTrack}>
                    <button type='button'>
                        <Image src={play} width={34} height={34} alt='play-icon' />
                    </button>
                </div>
            )}
            <div className='feed-player'>
                <div className='player-visibility' style={playerStyle}>
                    <AudioPlayer
                        src={currentTrackId === trackId ? currentTrackSrc : ""}
                        autoPlay={isPlaying && currentTrackId === trackId}
                        onPlay={() => dispatch(playTrack())}
                        onPause={() => dispatch(pauseTrack())}
                        showJumpControls={false}
                        customAdditionalControls={[]}
                        layout="horizontal-reverse"
                    />
                </div>
            </div>
        </div>
    );
}
