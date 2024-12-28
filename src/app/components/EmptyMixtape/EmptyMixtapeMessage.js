"use client";

import React from "react";
import "@/app/styles/mixtape/mixtape.css";
import Link from "next/link";

export default function EmptyMixtapeMessage() {


  return (
    <div className="empty-mixtape-message text-center">
      <label className="d-block pt-4 pb-3">Seems a little quiet over here</label>
      <p className="mb-4">Select a track to share it with your followers</p>
      <Link href={'mixtape/create-mixtape'}>Create Your Mixtape</Link>
    </div>
  );
}
