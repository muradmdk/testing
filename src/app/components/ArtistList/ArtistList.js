"use client";
import Image from 'next/image';
import { useEffect, useState } from "react";
import Link from 'next/link';
import "@/app/styles/artist/artist.css"
function ArtistList({ title, limit, btnVisiblity }) {
  const [artistList, setArtistList] = useState([]);
  const [displayedCount, setDisplayedCount] = useState(limit); // Track how many artists are displayed

  useEffect(() => {
    const fetchArtistList = async () => {
      const res = await fetch("/data/artistsList.json");
      const data = await res.json();
      setArtistList(data);
    };

    fetchArtistList();
  }, []);

  const handleLoadMore = (e) => {
    e.preventDefault();
    const newCount = Math.min(displayedCount + 5, artistList.length);
    setDisplayedCount(newCount);
  };
  const displayedArtists = artistList.slice(0, displayedCount);

  return (
    <>
      <h2 className='artist-main-title mb-4'>{title}</h2>
      <div className='artist-list-wrapper text-center d-flex align-items-center flex-wrap'>
        {displayedArtists.map((artist, index) => (
         <Link href={`/artists/${index}`} className='mb-2' key={index}>
            <div className='artist-card'>
              <div className='artist-img mx-auto'>
                <Image src={artist.artistIcon} width={80} height={80} alt={artist.artistTitle} />
              </div>
              <div className='artist-title mt-2'>
                <p className='mb-0'>{artist.artistTitle}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {btnVisiblity && displayedCount < artistList.length && (
        <div className='d-flex justify-content-center'>
          <Link href='#' className='text-center' onClick={(e) => handleLoadMore(e)}>
            <label className='load-more-btn'>+</label>
            <span className='d-block mt-2 fw-400 font-lato fs-16 lh-19 color-blue'>Load More</span>
          </Link>
        </div>
      )}
    </>
  );
}

export default ArtistList;
