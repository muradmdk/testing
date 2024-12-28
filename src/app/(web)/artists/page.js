import React from 'react'
import ArtistList from '@/app/components/ArtistList/ArtistList';

export default function SingleArtistHome() {
  return (
    <>
    <ArtistList title='Artists' btnVisiblity={true} limit={15} />
    </>
  )
}
