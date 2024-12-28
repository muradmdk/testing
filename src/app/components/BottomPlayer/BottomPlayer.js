'use client';
import { CCard, CCol, CRow } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { togglePlayPause, playNextTrack, shuffleTracks } from "@/app/redux/audioPlayerSlice";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "@/app/styles/bottomplayer/bottomplayer.css";
import Image from "next/image";
import { useEffect } from "react";

const BottomPlayer = () => {
  const dispatch = useDispatch();
  const track = useSelector((state) => state.audioPlayer.currentTrack);
  const isPlaying = useSelector((state) => state.audioPlayer.isPlaying);
  const trackList = useSelector((state) => state.audioPlayer.trackList);
  const isShuffle = useSelector((state) => state.audioPlayer.isShuffle);

  const handlePlayPause = (isPlay) => {
    dispatch(togglePlayPause(isPlay));
  };

  const handleNextTrack = () => {
    dispatch(playNextTrack());
  };

  const handleShuffle = () => {
    dispatch(shuffleTracks());
  };
  useEffect(() => {
    if (track && !isPlaying) {
      dispatch(togglePlayPause(true));
    }
  }, [track, isPlaying, dispatch]);

  console.log("Current Track:", track?.trackName);
  console.log("Is Playing:", isPlaying);
  console.log("Shuffle State:", isShuffle);

  return (
    <div className="bottom-player-wrapper mt-5">
      <CRow>
        <CCol lg={12}>
          <CCard className="bottom-player-card">
            <CRow>
              <CCol lg={3}>
                <div className="single-track-info d-flex">
                  <div className="single-track-img pe-2">
                    {track && (
                      <Image
                        src={track.artistAvatar || '/default-avatar.png'}
                        alt="track image"
                        width={64}
                        height={64}
                      />
                    )}
                  </div>
                  <div className="single-track-desc">
                    <h5 className="mb-0">{track?.trackName || 'No Track Selected'}</h5>
                    <p className="mb-0">{track?.artistName || ''}</p>
                  </div>
                </div>
              </CCol>
              <CCol lg={9}>
                <AudioPlayer
                  key={track?.id}
                  autoPlay={isPlaying}
                  src={track?.trackSrc || ''}
                  onPlay={() => handlePlayPause(true)}
                  onPause={() => handlePlayPause(false)}
                  onEnded={handleNextTrack}
                  customAdditionalControls={[
                    RHAP_UI.LOOP,
                    <button key="shufflebtn" onClick={handleShuffle}>
                      Shuffle {isShuffle ? 'On' : 'Off'}
                    </button>,
                  ]}
                />
              </CCol>
            </CRow>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default BottomPlayer;
