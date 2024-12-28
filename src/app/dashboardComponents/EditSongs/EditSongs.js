import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "@/app/styles/dashboard/commonCard/commonCard.css";
import "@/app/styles/dashboard/edit-album/edit-album.css";
import "@/app/styles/UI/dropdownMenu.css";

import NewTrackIcon from "@/app/assets/dashboard/uploadNewTrack.svg";
import { useDeleteTrackMutation } from "@/app/redux/artist/SongCrudApiSlice";
import { toast } from "react-hot-toast";

function EditSongs({ AvailableAlbumSong }) {
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'short' }).toLowerCase();
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  const [deleteTrack , {isLoading}] = useDeleteTrackMutation()
  const deleteTracks = (id) => {
    return async () => {
      try {
        const response =  await deleteTrack(id).unwrap(); 
        if(response.result == "success"){
          toast.success(response?.message)
        }
      } catch (err) {
        console.error("Failed to delete track:", err);
        toast.error(err)
      }
    };
  };
  return (
    <>
      <div>
        <CRow>
          <CCol lg={8}>
            <div className="page-title-wrapper mb-4">
              <h3 className="mb-0">Track List</h3>
            </div>
          </CCol>
          <CCol lg={4}>
            <div className="text-end">
              <Link href={"/dashboard/create-song"}>
                <Image
                  src={NewTrackIcon}
                  width={50}
                  height={50}
                  alt="create-song-icon"
                ></Image>
              </Link>
            </div>
          </CCol>
        </CRow>
        <div className="songs-list-wrapper mt-3">
          {AvailableAlbumSong?.count > 0 ? (
            <>
              <CRow className="align-items-center gx-1">
                <CCol xs={5}>
                  <p className="fs-20 fw-600 lh-20 page-title font-lato">
                    Track Name{" "}
                  </p>
                </CCol>
                <CCol xs={3} className="ps-2 d-flex justify-content-start">
                  <p className="fs-20 fw-600 lh-20 page-title font-lato">
                    Relase Date
                  </p>
                </CCol>
              </CRow>
              <ul className="ps-0 pe-2">
                {AvailableAlbumSong?.rows.map((artist, index) => (
                  <li className="mb-3" key={index}>
                    <CRow className="align-items-center gx-1 single-ablum-list">
                      <CCol xs={5}>
                        <div className="artist-avatar d-flex align-items-center">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_IMG_BASE_URL}/${artist?.cover_file}`}
                            width={55}
                            height={55}
                            alt="artist"
                          />
                          <p className="ps-3 fs-16 fw-400 lh-16 mb-1 font-lato track-name">
                            {artist?.song_name}
                          </p>
                        </div>
                      </CCol>
                      <CCol xs={4} className="ps-2">
                        <div className="queue-list-disc d-flex justify-content-start">
                          <span className="fs-16 fw-400 lh-16 font-lato track-name">
                            {formatDate(artist?.release_date)}
                          </span>
                        </div>
                      </CCol>
                      <CCol
                        xs={3}
                        className="d-flex justify-content-end position-relative"
                      >
                        <div className="custom-dropdown-menu pe-3">
                          <CDropdown popper={true}>
                            <CDropdownToggle>
                              <span>
                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 15 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.5 3.75C8.27665 3.75 8.90625 3.1204 8.90625 2.34375C8.90625 1.5671 8.27665 0.9375 7.5 0.9375C6.72335 0.9375 6.09375 1.5671 6.09375 2.34375C6.09375 3.1204 6.72335 3.75 7.5 3.75Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M7.5 8.90625C8.27665 8.90625 8.90625 8.27665 8.90625 7.5C8.90625 6.72335 6.72335 6.09375 7.5 6.09375C6.72335 6.09375 6.09375 6.72335 6.09375 7.5C6.09375 8.27665 6.72335 8.90625 7.5 8.90625Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M7.5 14.0625C8.27665 14.0625 8.90625 13.4329 8.90625 12.6562C8.90625 11.8796 8.27665 11.25 7.5 11.25C6.72335 11.25 6.09375 11.8796 6.09375 12.6562C6.09375 13.4329 6.72335 14.0625 7.5 14.0625Z"
                                    fill="white"
                                  />
                                </svg>
                              </span>
                            </CDropdownToggle>
                            <CDropdownMenu>
                              <Link
                                href={`/dashboard/song-view/${artist.id}`}
                                className="d-flex align-items-center dropdown-item"
                              >
                                <span className="fw-400 fs-16 text-white">
                                  View
                                </span>
                              </Link>
                              <Link
                                href={`/dashboard/song-edit/${artist.id}`}
                                className="d-flex align-items-center dropdown-item"
                              >
                                <span className="fw-400 fs-16 text-white">
                                  Edit
                                </span>
                              </Link>
                              <button
                                type="button"
                                className="d-flex align-items-center dropdown-item"
                                onClick={deleteTracks(artist.id)}
                              >
                                <span className="fw-400 fs-16 text-white">
                                  Delete
                                </span>
                              </button>
                            </CDropdownMenu>
                          </CDropdown>
                        </div>
                      </CCol>
                    </CRow>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <div className="text-center">
                <p className="fs-20 fw-600 lh-20 page-title font-lato">
                  No Song Available in This Album
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default EditSongs;
