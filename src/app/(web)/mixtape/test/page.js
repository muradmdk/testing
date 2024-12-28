"use client";
import React, { useState, useEffect } from "react";
import { CCol, CButton, CContainer, CRow } from "@coreui/react";
import Image from "next/image";

const SubSongArray = [
    {
      id: 1,
      artistName: "Taylor Swift",
      queueIcon: "/assets/artist/11.png",
      songs: [
        {
          id: 1,
          trackIcon: "/assets/artist/11.png",
          trackName: "Love Story",
          trackAlbum: "Fearless",
        },
        {
          id: 2,
          trackIcon: "/assets/artist/11.png",
          trackName: "Shake It Off",
          trackAlbum: "1989",
        },
        {
          id: 3,
          trackIcon: "/assets/artist/11.png",
          trackName: "Blank Space",
          trackAlbum: "1989",
        },
        {
          id: 4,
          trackIcon: "/assets/artist/11.png",
          trackName: "Cardigan",
          trackAlbum: "Folklore",
        },
        {
          id: 5,
          trackIcon: "/assets/artist/11.png",
          trackName: "Willow",
          trackAlbum: "Evermore",
        },
        {
          id: 6,
          trackIcon: "/assets/artist/11.png",
          trackName: "Anti-Hero",
          trackAlbum: "Midnights",
        },
      ],
    },
    {
      id: 2,
      artistName: "Harry Styles",
      queueIcon: "/assets/artist/12.png",
      songs: [
        {
          id: 1,
          trackIcon: "/assets/artist/12.png",
          trackName: "Watermelon Sugar",
          trackAlbum: "Fine Line",
        },
        {
          id: 2,
          trackIcon: "/assets/artist/12.png",
          trackName: "Adore You",
          trackAlbum: "Fine Line",
        },
      ],
    },
    {
      id: 3,
      artistName: "Eminem",
      queueIcon: "/assets/artist/10.png",
      songs: [
        {
          id: 1,
          trackIcon: "/assets/artist/10.png",
          trackName: "Lose Yourself",
          trackAlbum: "8 Mile",
        },
        {
          id: 2,
          trackIcon: "/assets/artist/10.png",
          trackName: "Stan",
          trackAlbum: "The Marshall Mathers LP",
        },
        {
          id: 3,
          trackIcon: "/assets/artist/10.png",
          trackName: "Not Afraid",
          trackAlbum: "Recovery",
        },
        {
          id: 4,
          trackIcon: "/assets/artist/10.png",
          trackName: "Love The Way You Lie",
          trackAlbum: "Recovery",
        },
      ],
    },
    {
      id: 4,
      artistName: "Selena Gomez",
      queueIcon: "/assets/artist/09.png",
      songs: [
        {
          id: 1,
          trackIcon: "/assets/artist/09.png",
          trackName: "Lose You to Love Me",
          trackAlbum: "Rare",
        },
        {
          id: 2,
          trackIcon: "/assets/artist/09.png",
          trackName: "Back to You",
          trackAlbum: "13 Reasons Why",
        },
      ],
    },
    {
      id: 5,
      artistName: "2Pac",
      queueIcon: "/assets/artist/08.png",
      songs: [
        {
          id: 1,
          trackIcon: "/assets/artist/08.png",
          trackName: "Changes",
          trackAlbum: "Greatest Hits",
        },
        {
          id: 2,
          trackIcon: "/assets/artist/08.png",
          trackName: "California Love",
          trackAlbum: "All Eyez on Me",
        },
      ],
    },
    {
      id: 6,
      artistName: "Lady Gaga",
      queueIcon: "/assets/artist/07.png",
      songs: [
        {
          id: 1,
          trackIcon: "/assets/artist/07.png",
          trackName: "Bad Romance",
          trackAlbum: "The Fame Monster",
        },
        {
          id: 2,
          trackIcon: "/assets/artist/07.png",
          trackName: "Shallow",
          trackAlbum: "A Star Is Born",
        },
      ],
    },
    {
      id: 7,
      artistName: "Zayn Malik",
      queueIcon: "/assets/artist/13.png",
      songs: [
        {
          id: 1,
          trackIcon: "/assets/artist/13.png",
          trackName: "Pillowtalk",
          trackAlbum: "Mind of Mine",
        },
        {
          id: 2,
          trackIcon: "/assets/artist/13.png",
          trackName: "Dusk Till Dawn",
          trackAlbum: "Icarus Falls",
        },
      ],
    },
    {
      id: 8,
      artistName: "Billie Eilish",
      queueIcon: "/assets/artist/06.png",
      songs: [
        {
          id: 1,
          trackIcon: "/assets/artist/06.png",
          trackName: "Bad Guy",
          trackAlbum: "When We All Fall Asleep, Where Do We Go?",
        },
        {
          id: 2,
          trackIcon: "/assets/artist/06.png",
          trackName: "Therefore I Am",
          trackAlbum: "Single",
        },
      ],
    },
    {
      id: 9,
      artistName: "Lana Del Rey",
      queueIcon: "/assets/artist/16.png",
      songs: [
        {
          id: 1,
          trackIcon: "/assets/artist/16.png",
          trackName: "Summertime Sadness",
          trackAlbum: "Born to Die",
        },
        {
          id: 2,
          trackIcon: "/assets/artist/16.png",
          trackName: "Young and Beautiful",
          trackAlbum: "The Great Gatsby",
        },
      ],
    },
    {
      id: 10,
      artistName: "Noah Kahan",
      queueIcon: "/assets/artist/17.png",
      songs: [
        {
          id: 1,
          trackIcon: "/assets/artist/17.png",
          trackName: "Hurt Somebody",
          trackAlbum: "Debut EP",
        },
        {
          id: 2,
          trackIcon: "/assets/artist/17.png",
          trackName: "False Confidence",
          trackAlbum: "I Was / I Am",
        },
      ],
    },
  ];

const MusicApp = () => {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [selectedSongs, setSelectedSongs] = useState([]);

  const handleArtistClick = (artist) => {
    setSelectedArtist(artist);
  };

  const handleAddSong = (song) => {
    const isAlreadySelected = selectedSongs.some(
      (selected) => selected.id === song.id && selected.artistId === selectedArtist.id
    );

    if (isAlreadySelected) {
      setSelectedSongs((prev) =>
        prev.filter(
          (selected) => !(selected.id === song.id && selected.artistId === selectedArtist.id)
        )
      );
    } else {
      setSelectedSongs((prev) => [
        ...prev,
        { ...song, artistId: selectedArtist.id, artistName: selectedArtist.artistName },
      ]);
    }
  };

  const isSongSelected = (song) =>
    selectedSongs.some(
      (selected) => selected.id === song.id && selected.artistId === selectedArtist.id
    );

  // Log selectedSongs array whenever it changes
  useEffect(() => {
    console.log("Selected Songs:", selectedSongs);
  }, [selectedSongs]);

  return (
    <CContainer>
      <CRow>
        <CCol lg={4}>
          <h3>Artists</h3>
          {SubSongArray.map((artist) => (
            <div
              key={artist.id}
              onClick={() => handleArtistClick(artist)}
              style={{
                cursor: "pointer",
                padding: "10px",
                backgroundColor: selectedArtist?.id === artist.id ? "#f0f0f0" : "transparent",
              }}
            >
              <Image src={artist.queueIcon} alt={artist.artistName} width={40} height={40} />
              <span style={{ marginLeft: "10px" }}>{artist.artistName}</span>
            </div>
          ))}
        </CCol>

        <CCol lg={8}>
          <h3>Songs</h3>
          {selectedArtist ? (
            selectedArtist.songs.map((song) => (
              <div
                key={song.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  backgroundColor: isSongSelected(song) ? "#d1e7dd" : "transparent",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
              >
                <Image src={song.trackIcon} alt={song.trackName} width={40} height={40} />
                <div style={{ marginLeft: "10px", flexGrow: 1 }}>
                  <strong>{song.trackName}</strong>
                  <p>{song.trackAlbum}</p>
                </div>
                <CButton
                  color={isSongSelected(song) ? "danger" : "primary"}
                  onClick={() => handleAddSong(song)}
                >
                  {isSongSelected(song) ? "Remove" : "Add"}
                </CButton>
              </div>
            ))
          ) : (
            <p>Please select an artist to view songs.</p>
          )}
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default MusicApp;
