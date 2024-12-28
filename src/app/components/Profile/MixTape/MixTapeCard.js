import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function MixTapeCard({MixtapeData}) {
  return (
    <>
      <div className='mix-tape-card d-flex mt-3'>
        <div className='mix-tape-img'>
          <Link href='/mixtape'>
            <Image src={MixtapeData.AlbumThumbnail} width={120} height={98} alt='cover'/>
          </Link>
        </div>
        <div className='mix-tape-details ps-2'>
          <p className='font-lato fw-500 fs-21 lh-26 color-blue mb-0'>{MixtapeData.Title}</p>
          <span className='d-block fs-16 fw-400 font-lato lh-19 color-blue mt-2 mb-1'>{MixtapeData.Subscriber}K Subscriber</span>
          <span className='d-block fs-14 fw-400 font-lato lh-14 color-blue'>{MixtapeData.songs} Songs , {MixtapeData.Hours} Hours , {MixtapeData.minutes} Minutes</span>
        </div>
      </div>
    </>
  )
}

export default MixTapeCard;