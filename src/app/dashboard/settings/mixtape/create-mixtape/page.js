"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormTextarea,
  CButton,
  CRow,
  CCol,
} from "@coreui/react";
import "@/app/styles/mixtape/mixtape.css";
import uploadImage from "@/app/assets/mixtape/upload-img.svg";
import Image from "next/image";
import trash from "@/app/assets/feed/trash.svg";

import search from "@/app/assets/feed/search.svg"
import Link from "next/link";

function MixtapeForm() {
  const [preview, setPreview] = useState(null);
  const [originalImage, setOriginalImage] = useState(null);
  const [isDeleted, setIsDeleted] = useState(false);
  // const [queueList, setQueueList] = useState([]);
  // const [selectedArtistIndex, setSelectedArtistIndex] = useState(null);
  // const [visibleSongsCount, setVisibleSongsCount] = useState(6);
  // const [selectedSongs, setSelectedSongs] = useState([]);

  // const handleAvatarClick = (index) => {
  //   setSelectedArtistIndex(index);
  //   setVisibleSongsCount(6);
  // };

  // const handleLoadMore = () => {
  //   setVisibleSongsCount((prevCount) => prevCount + 6);
  // };

  // const handleAddSong = (song) => {
  //   setSelectedSongs((prevSelected) => {
  //     if (!prevSelected.some((s) => s.id === song.id)) {
  //       return [...prevSelected, song];
  //     }
  //     return prevSelected;
  //   });
  // };

  // const handleRemoveSong = (song) => {
  //   setSelectedSongs((prevSelected) =>
  //     prevSelected.filter((s) => s.id !== song.id)
  //   );
  // };

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
        {
          id: 7,
          trackIcon: "/assets/artist/11.png",
          trackName: "Anti-Hero 2",
          trackAlbum: "Midnights 2",
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

  // useEffect(() => {
  //   const fetchQueueList = async () => {
  //     const res = await fetch("/data/queueList.json");
  //     const data = await res.json();
  //     setQueueList(data);
  //   };

  //   fetchQueueList();
  // }, []);


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

  useEffect(() => {
    console.log("Selected Songs:", selectedSongs);
  }, [selectedSongs]);



  const formik = useFormik({
    initialValues: {
      userName: "",
      mixtapeName: "",
      coverImage: null,
      bioDescription: "",
      price: 0,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
      setOriginalImage(previewUrl);
      setIsDeleted(false);
      formik.setFieldValue("coverImage", file);
    }
  };

  const handleDeleteImage = () => {
    formik.setFieldValue("coverImage", null);
    setPreview(null);
    setIsDeleted(true);
  };

  return (
    <div className="mixtape-wrapper">
      <h2 className="mixtape-title mb-3">Create Mixtape</h2>
      <CForm onSubmit={formik.handleSubmit} className="mixtape-form">
        <CRow>
          <CCol lg={6} className="mb-3">
            <CFormLabel htmlFor="userName" className="mixtape-label">
              User Name
            </CFormLabel>
            <CFormInput
              id="userName"
              name="userName"
              type="text"
              placeholder="Enter your user name"
              value={formik.values.userName}
              onChange={formik.handleChange}
            />
          </CCol>
          <CCol lg={6} className="mb-3">
            <CFormLabel htmlFor="mixtapeName" className="mixtape-label">
              Mixtape Name
            </CFormLabel>
            <CFormInput
              id="mixtapeName"
              name="mixtapeName"
              type="text"
              placeholder="Enter your mixtape name"
              value={formik.values.mixtapeName}
              onChange={formik.handleChange}
            />
          </CCol>
          <CCol lg={6} className="mb-3">
            <CFormLabel htmlFor="price" className="mixtape-label">
              Price
            </CFormLabel>
            <CFormInput
              id="price"
              name="price"
              type="number"
              min={0}
              placeholder="Enter subscription charges"
              value={formik.values.price}
              onChange={formik.handleChange}
            />
          </CCol>
          <CCol lg={6} className="mb-3">
            <CFormLabel htmlFor="coverImage" className="mixtape-label">
              Cover Image
            </CFormLabel>
            <div className="cover-image-upload">
              <div>
                <Image src={uploadImage} alt="upload" width={20} height={20} />
              </div>
              <input
                id="coverImage"
                name="coverImage"
                type="file"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <label htmlFor="coverImage" className="upload-label">
                Upload Or Drag & Drop
              </label>
            </div>
          </CCol>
        </CRow>

        {(preview || (!isDeleted && originalImage)) && (
          <CRow className="mb-3">
            <CCol lg={12}>
              <div className="image-preview">
                <Image
                  src={preview || originalImage}
                  alt="Image Preview"
                  width={100}
                  height={100}
                  className="rounded img-preview"
                />
                <div className="image-controls">
                  <CButton onClick={handleDeleteImage}>
                    <Image src={trash} width={24} height={24} alt="delete-image"></Image>
                  </CButton>
                </div>
              </div>
            </CCol>
          </CRow>
        )}

        <CRow className="mb-3">
          <CCol lg={12}>
            <CFormLabel htmlFor="bioDescription" className="mixtape-label">
              Bio / Description
            </CFormLabel>
            <CFormTextarea
              id="bioDescription"
              name="bioDescription"
              rows="4"
              placeholder="Enter Mix Tape Description/Bio"
              value={formik.values.bioDescription}
              onChange={formik.handleChange}
            />
          </CCol>
        </CRow>
        <CRow >
          <CCol lg={12} className="mb-3">
            <div>
              <h2 className="mixtape-title mb-0">Create Track List</h2>
            </div>
          </CCol>
          <CCol lg={2}>
          </CCol>
          <CCol lg={10}>
            <div className="mixtape-search-wrapper position-relative">
              <input type="text" className="w-100" placeholder="Search music,albums, or genres" />
              <div className="mixtape-search-btn">
                <button type="button"><Image src={search} width={30} height={30} alt="search"></Image></button>
              </div>
            </div>
          </CCol>

          <CCol lg={2}>
            <div className="sidebar-avatars">
              {SubSongArray.map((artist, index) => (
                <div
                  className="avatar"
                  key={artist.id}
                  onClick={() => handleArtistClick(artist)}
                >
                  <Image
                    style={{
                      transform: selectedArtist?.id === artist.id ? "scale(1.1)" : "scale(1.0)",
                      border: selectedArtist?.id === artist.id ? "2px solid #EF5660" : "transparent",
                    }}
                    src={artist.queueIcon}
                    width={45}
                    height={45}
                    alt={artist.artistName}
                    className="rounded-circle"
                  />
                </div>
              ))}
            </div>
          </CCol>
          <CCol lg={10} className="album-list-wrapper">
            <div className="create-mixtape-song-header d-none d-lg-block mt-3">
              <CRow className="align-items-center">
                <CCol lg={5}>
                  <div className="song-track-header">
                    <p className="mb-0">Track Name</p>
                  </div>
                </CCol>
                <CCol lg={4} className="ps-2 d-flex justify-content-center">
                  <div className="song-track-header">
                    <p className="mb-0">Album</p>
                  </div>
                </CCol>
                <CCol lg={3} className="d-flex justify-content-end">
                  <div className="song-track-header">
                    <p className="mb-0 pe-2">Add</p>
                  </div>
                </CCol>
              </CRow>
            </div>

            <div className="mt-2">
              <ul>
                {selectedArtist ? (
                  selectedArtist.songs.map((song) => (
                    <li key={song.id} >
                      <div className="single-ablum-list" style={{ backgroundColor: isSongSelected(song) ? "#EF5660" : "#4A506966" }}>
                        <CRow className="align-items-center" >
                          <CCol lg={5} className="mb-2 mb-lg-0">
                            <div className='track-thumbnail'>
                              <div className='d-flex align-items-center'>
                                <div className='track-img'>
                                  <Image src={song.trackIcon} width={55} height={55} alt={song.trackName} />
                                </div>
                                <div className='track-info-wrapper'>
                                  <span className='ps-2'>Track Name</span>
                                  <label className='ps-2'>{song.trackName}</label>
                                </div>
                              </div>
                            </div>
                          </CCol>
                          <CCol lg={4} xs={6} className="ps-2">
                            <div className='track-info-wrapper text-start text-lg-center'>
                              <span>Album</span>
                              <label>{song.trackAlbum}</label>
                            </div>
                          </CCol>
                          <CCol
                            lg={3}
                            xs={6}
                            className="d-flex justify-content-end add-album-btn"
                          >
                            <CButton
                              type="button"
                              onClick={() => handleAddSong(song)}
                            >
                              {isSongSelected(song) ? <Image
                                src="/assets/albumlist/mins.svg"
                                width={25}
                                height={25}
                                alt="artist"
                              /> : <Image
                                src="/assets/albumlist/plus.svg"
                                width={25}
                                height={25}
                                alt="artist"
                              />}
                            </CButton>
                          </CCol>
                        </CRow>
                      </div>

                    </li>
                  ))
                ) : (
                  <div className="text-center mt-5">
                    <p className="no-selected-song">Please select an artist to view songs.</p>
                  </div>
                )}
              </ul>
            </div>
          </CCol>
        </CRow>

        {selectedArtist ? (
          <CRow className="justify-content-end">
            <CCol lg={10} className="d-flex justify-content-center align-items-center">
              <Link href="/dashboard/mixtape" className="mixtape-btn">Create Mixtape</Link>
            </CCol>
          </CRow>
        ) : (
          <CRow className="justify-content-end">
            <CCol lg={10} className="d-flex justify-content-center align-items-center">
              <div>
                <p className="no-selected-song">Nothing to Submit</p>
              </div>
            </CCol>
          </CRow>
        )}

      </CForm>
    </div>
  );
}

export default MixtapeForm;
