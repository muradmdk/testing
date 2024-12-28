import React from "react";
import ArtistList from "@/app/components/ArtistList/ArtistList";
import MixTapeList from "@/app/components/Profile/MixTape/MixTapeList";
import mixtapeThumbnail from "@/app/assets/mixtape.png"

export default function Library() {

    const mixtapesArray = [
        {
            id: 1,
            Title: "Retro English Song",
            Subscriber: "47",
            songs: "42",
            Hours: "2",
            minutes: "15",
            AlbumThumbnail: mixtapeThumbnail
        },
        {
            id: 2,
            Title: "Classic Rock Hits",
            Subscriber: "120",
            songs: "36",
            Hours: "1",
            minutes: "45",
            AlbumThumbnail: mixtapeThumbnail
        },
        {
            id: 3,
            Title: "Jazz & Blues Essentials",
            Subscriber: "89",
            songs: "28",
            Hours: "2",
            minutes: "10",
            AlbumThumbnail: mixtapeThumbnail
        },
        {
            id: 4,
            Title: "Pop Anthems",
            Subscriber: "150",
            songs: "50",
            Hours: "3",
            minutes: "5",
            AlbumThumbnail: mixtapeThumbnail
        }
    ]
  return (
    <>
      <section className="library-wrapper">
        <ArtistList title="Subscribed Artists" btnVisiblity={true} limit={15} />
        <div className="subscribed-mixtapes-wrapper mt-4">
          <MixTapeList mixtapes={mixtapesArray} title="Subscribed Mixtapes"></MixTapeList>
        </div>
      </section>
    </>
  );
}
