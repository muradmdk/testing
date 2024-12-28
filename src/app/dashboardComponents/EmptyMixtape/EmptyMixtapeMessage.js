"use client";

import React from "react";
import { CButton } from "@coreui/react";
import "@/app/styles/mixtape/mixtape.css";
import { useRouter } from "next/navigation";

export default function EmptyMixtapeMessage() {
    const router = useRouter(); 

    const navigateToCreatePage = () => {
      router.push("/dashboard/mixtape/create-mixtape"); 
    };
  return (
    <div className="empty-mixtape-message text-center py-5">
      <p className="fs-16 fw-500 font-lato">Seems a little quiet over here</p>
      <p className="fs-18 fw-500 font-lato">
        Select a track to share it with your followers
      </p>

      <CButton
        type="submit"
        color="primary"
        className="mixtape-btn w-50 mt-3 px-4 py-3"
        onClick={navigateToCreatePage}
      >
        Create Your Mixtape
      </CButton>
    </div>
  );
}
