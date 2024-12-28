"use client";
import React from "react";
import "@/app/styles/profile/profile.css";
import ProfileUpdate from "@/app/components/Profile/ProfileUpdate";
import ArtistList from "@/app/components/ArtistList/ArtistList";
import EventsList from "@/app/components/Profile/Events/EventsList";
import MixTapeList from "@/app/components/Profile/MixTape/MixTapeList";
import mixtapeThumbnail from "@/app/assets/mixtape.png";

function ProfileWeb() {
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
      <ProfileUpdate />
      <div className="mt-5">
        <ArtistList title="Subscribed Artists" limit={5} btnVisiblity={false} />
      </div>
      <div className="mt-5">
        <EventsList />
      </div>
      <div className="mt-5">
        <MixTapeList mixtapes={mixtapesArray} title="Mixtapes" />
      </div>
    </>
  );
}

export default ProfileWeb;
