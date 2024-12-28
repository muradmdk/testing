import React from "react";
import ArtistList from "@/app/components/ArtistList/ArtistList";
import MixTapeList from "@/app/components/Profile/MixTape/MixTapeList";
import mixtapeThumbnail from "@/app/assets/mixtape.png";

function SubscribedList() {
  const mixtapesArray = [
    {
      id: 1,
      Title: "Retro English Song",
      Subscriber: "47",
      songs: "42",
      Hours: "2",
      minutes: "15",
      AlbumThumbnail: mixtapeThumbnail,
    },
  ];
  return (
    <>
      <div className="pt-3">
        <ArtistList title="Artists" btnVisiblity={false} limit={6} />
        <div className="mt-5">
          <MixTapeList mixtapes={mixtapesArray} title="Mixtapes" />
        </div>
      </div>
    </>
  );
}

export default SubscribedList;
