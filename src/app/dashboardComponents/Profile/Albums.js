import { CCol, CRow } from "@coreui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useGetAllAlbumsQuery } from "@/app/redux/artist/CreateAlbumApiSlice";
import DemoAlbum from "@/app/assets/albumDemo.png";

function Albums() {
  const { data: AllAlbums, refetch } = useGetAllAlbumsQuery();
  useEffect(() => {
    refetch();
  }, [refetch]);
  return (
    <>
      <div className="albums-wrapper">
        <CRow className="align-items-center gx-1">
          <CCol xs={4}>
            <p className="fs-20 fw-600 lh-20 page-title font-lato">
              Album Name{" "}
            </p>
          </CCol>
          <CCol xs={3} className="ps-2">
            <p className="fs-20 fw-600 lh-20 page-title font-lato">
              Relase Date
            </p>
          </CCol>
          <CCol xs={2} className="">
            <p className="fs-20 fw-600 lh-20 page-title font-lato text-center">
              Songs
            </p>
          </CCol>
        </CRow>

        {AllAlbums?.data?.length > 0 ? (
          <ul className="ps-0 pe-2">
            {AllAlbums?.data?.map((artist, index) => (
              <li className="mb-2" key={index}>
                <CRow className="align-items-center gx-1 single-ablum-list">
                  <CCol xs={4}>
                    <div className="artist-avatar d-flex align-items-center">
                      {artist?.cover_art_path != null ? (
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMG_BASE_URL}/${artist?.cover_art_path}`}
                          width={55}
                          height={55}
                          alt="AlbumImage"
                        />
                      ) : (
                        <>
                          <Image
                            src={DemoAlbum}
                            width={55}
                            height={55}
                            alt="AlbumImage"
                          />
                        </>
                      )}

                      <p className="ps-3 fs-16 fw-400 lh-16 mb-1 font-lato track-name">
                        {artist?.name}
                      </p>
                    </div>
                  </CCol>
                  <CCol xs={3} className="ps-2">
                    <div className="queue-list-disc d-flex justify-content-center">
                      <span className="fs-16 fw-400 lh-16 font-lato track-name">
                        {artist?.release_date}
                      </span>
                    </div>
                  </CCol>
                  <CCol xs={2}>
                    <div className="text-center">
                      <span className="track-name">12</span>
                    </div>
                  </CCol>
                  <CCol
                    xs={3}
                    className="d-flex justify-content-end add-album-btn"
                  >
                    <Link
                      href={`/dashboard/edit-album/${artist?.id}`}
                      className="px-2"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_848_19276)">
                          <path
                            d="M19.8633 2.56567C19.8639 2.0578 19.7137 1.56119 19.4318 1.13873C19.1499 0.716267 18.749 0.386966 18.2799 0.192535C17.8107 -0.00189555 17.2944 -0.0527091 16.7963 0.0465308C16.2982 0.145771 15.8408 0.390599 15.482 0.750006L3.44992 12.7818C3.37058 12.8612 3.31406 12.9605 3.28629 13.0692L2.28711 16.9827C2.2596 17.0904 2.26133 17.2036 2.29213 17.3104C2.32292 17.4173 2.38166 17.514 2.4623 17.5905C2.54293 17.6671 2.64253 17.7208 2.75082 17.746C2.85912 17.7713 2.97218 17.7671 3.07836 17.7341L6.82535 16.5684C6.92204 16.5383 7.00998 16.4851 7.0816 16.4135L19.1136 4.38153C19.3524 4.14345 19.5417 3.86038 19.6703 3.54869C19.799 3.23699 19.8646 2.90288 19.8633 2.56567ZM6.30676 15.4206L3.77496 16.2083L4.45504 13.5445L14.9844 3.01512L16.8484 4.87891L6.30676 15.4206ZM18.2298 3.49766L17.7322 3.99516L15.8683 2.13122L16.3658 1.63372C16.613 1.38654 16.9482 1.24768 17.2978 1.24768C17.6474 1.24768 17.9826 1.38654 18.2298 1.63372C18.4769 1.88089 18.6158 2.21613 18.6158 2.56569C18.6158 2.91525 18.4769 3.25049 18.2298 3.49766ZM13.6475 20H0.761719C0.595958 20 0.436987 19.9342 0.319777 19.8169C0.202567 19.6997 0.136719 19.5408 0.136719 19.375C0.136719 19.2092 0.202567 19.0503 0.319777 18.9331C0.436987 18.8159 0.595958 18.75 0.761719 18.75H13.6475C13.8133 18.75 13.9723 18.8159 14.0895 18.9331C14.2067 19.0503 14.2725 19.2092 14.2725 19.375C14.2725 19.5408 14.2067 19.6997 14.0895 19.8169C13.9723 19.9342 13.8133 20 13.6475 20Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_848_19276">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </CCol>
                </CRow>
              </li>
            ))}
          </ul>
        ) : (
          <p>No Album Available</p>
        )}
      </div>
    </>
  );
}

export default Albums;
