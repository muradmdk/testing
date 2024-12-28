'use client';
import { CCol, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setTrackList, loadTrack } from '@/app/redux/audioPlayerSlice';
import mixtapeIcon from '@/app/assets/sidebarIcons/mixtape.svg';
import playsongIcon from '@/app/assets/sidebarIcons/playsong.svg';
import albumIcon from '@/app/assets/sidebarIcons/album.svg';
import artistIcon from '@/app/assets/sidebarIcons/artist.svg';
import shareIcon from '@/app/assets/sidebarIcons/share.svg';
import ShareModal from '../../SharingModal/ShareModal';
import ListMover from "@/app/assets/sidebar/list-mover.svg";
import Link from 'next/link';

import "@/app/styles/UI/dropdownMenu.css"

function QueueList({ list, dropdownCheck }) {
  const [shareModalVisible, setShareModalVisible] = useState(false);
  const [items, setItems] = useState(list);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const dispatch = useDispatch();
  const currentPlayingIndexInfo = useSelector((state) => state.audioPlayer.currentTrackIndex);

  useEffect(() => {
    dispatch(setTrackList(list));
  }, [list, dispatch]);

  const openShareModal = () => setShareModalVisible(true);
  const closeShareModal = () => setShareModalVisible(false);

  const handleDragStart = (index) => setDraggedIndex(index);

  const handleDragOver = (index) => {
    if (draggedIndex === index) return;
    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(draggedIndex, 1);
    updatedItems.splice(index, 0, draggedItem);
    setDraggedIndex(index);
    setItems(updatedItems);
  };

  const handleDrop = () => setDraggedIndex(null);

  const playTrack = (index) => {
    dispatch(loadTrack(index));
  };

  return (
    <>
      <div className='queue-list-wrapper w-100'>
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={() => handleDragOver(index)}
              onDragEnd={handleDrop}
              className='single-artist-wrapper mb-2'
            >
              <div className='single-artist-layout'>
                <div className='list-mover'>
                  <Image src={ListMover} width={24} height={24} alt='drag handle' />
                </div>
                <div className='single-artist-layout-content'>
                  <div className={`single-artist-placeholder ${currentPlayingIndexInfo === index ? 'currently-playing' : ''}`}>
                    <div className='single-artist-no'>
                      <p className='mb-0'>{index + 1}</p>
                    </div>
                    <div className='single-artist-avatar' onClick={() => playTrack(index)}>
                      <Image src={item.artistAvatar} width={55} height={55} alt='artist' />
                    </div>
                    <div className='single-artist-avatar-content'>
                      <h4 className='mb-1'>{item.trackName}</h4>
                      <span className='d-block'>{item.artistName}</span>
                    </div>
                    <div className='single-artist-layout-menu'>
                      {dropdownCheck != true ? (
                        <div className='custom-dropdown-menu'>
                          <CDropdown popper={true}>
                            <CDropdownToggle>
                              <span>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.5 3.75C8.27665 3.75 8.90625 3.1204 8.90625 2.34375C8.90625 1.5671 8.27665 0.9375 7.5 0.9375C6.72335 0.9375 6.09375 1.5671 6.09375 2.34375C6.09375 3.1204 6.72335 3.75 7.5 3.75Z" fill="white" />
                                  <path d="M7.5 8.90625C8.27665 8.90625 8.90625 8.27665 8.90625 7.5C8.90625 6.72335 6.72335 6.09375 7.5 6.09375C6.72335 6.09375 6.09375 6.72335 6.09375 7.5C6.09375 8.27665 6.72335 8.90625 7.5 8.90625Z" fill="white" />
                                  <path d="M7.5 14.0625C8.27665 14.0625 8.90625 13.4329 8.90625 12.6562C8.90625 11.8796 8.27665 11.25 7.5 11.25C6.72335 11.25 6.09375 11.8796 6.09375 12.6562C6.09375 13.4329 6.72335 14.0625 7.5 14.0625Z" fill="white" />
                                </svg>
                              </span>
                            </CDropdownToggle>
                            <CDropdownMenu>
                              <button type='button' onClick={() => playTrack(index)} className='dropdown-item d-flex align-items-center'>
                                <Image src={playsongIcon} width={15} height={15} alt='icon' className='me-2' />
                                <span className='fw-400 fs-16 text-white'>Play Song</span>
                              </button>
                              <button type='button' className='d-flex align-items-center dropdown-item'>
                                <Image src={mixtapeIcon} width={15} height={15} alt='icon' className='me-2' />
                                <span className='fw-400 fs-16 text-white'>Add Mixtape</span>
                              </button>
                              <Link href="#" className='d-flex align-items-center dropdown-item'>
                                <Image src={albumIcon} width={15} height={15} alt='icon' className='me-2' />
                                <span className='fw-400 fs-16 text-white'>Go to Album</span>
                              </Link>
                              <Link href="#" className='d-flex align-items-center dropdown-item'>
                                <Image src={artistIcon} width={15} height={15} alt='icon' className='me-2' />
                                <span className='fw-400 fs-16 text-white'>Go to Artist</span>
                              </Link>
                              <button type='button' className='d-flex align-items-center dropdown-item' onClick={openShareModal}>
                                <Image src={shareIcon} width={15} height={15} alt='icon' className='me-2' />
                                <span className='fw-400 fs-16 text-white'>Share</span>
                              </button>
                            </CDropdownMenu>
                          </CDropdown>
                        </div>
                      ) : (
                        <div className='custom-dropdown-menu'>
                          <CDropdown popper={true}>
                            <CDropdownToggle>
                              <span>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.5 3.75C8.27665 3.75 8.90625 3.1204 8.90625 2.34375C8.90625 1.5671 8.27665 0.9375 7.5 0.9375C6.72335 0.9375 6.09375 1.5671 6.09375 2.34375C6.09375 3.1204 6.72335 3.75 7.5 3.75Z" fill="white" />
                                  <path d="M7.5 8.90625C8.27665 8.90625 8.90625 8.27665 8.90625 7.5C8.90625 6.72335 6.72335 6.09375 7.5 6.09375C6.72335 6.09375 6.09375 6.72335 6.09375 7.5C6.09375 8.27665 6.72335 8.90625 7.5 8.90625Z" fill="white" />
                                  <path d="M7.5 14.0625C8.27665 14.0625 8.90625 13.4329 8.90625 12.6562C8.90625 11.8796 8.27665 11.25 7.5 11.25C6.72335 11.25 6.09375 11.8796 6.09375 12.6562C6.09375 13.4329 6.72335 14.0625 7.5 14.0625Z" fill="white" />
                                </svg>
                              </span>
                            </CDropdownToggle>
                            <CDropdownMenu>
                              <Link href="#" className='d-flex align-items-center dropdown-item'>
                                <Image src={albumIcon} width={15} height={15} alt='icon' className='me-2' />
                                <span className='fw-400 fs-16 text-white'>Edit Song</span>
                              </Link>
                              <Link href="#" className='d-flex align-items-center dropdown-item'>
                                <Image src={artistIcon} width={15} height={15} alt='icon' className='me-2' />
                                <span className='fw-400 fs-16 text-white'>Delete</span>
                              </Link>
                              <button type='button' className='d-flex align-items-center dropdown-item' onClick={openShareModal}>
                                <Image src={shareIcon} width={15} height={15} alt='icon' className='me-2' />
                                <span className='fw-400 fs-16 text-white'>Share</span>
                              </button>
                            </CDropdownMenu>
                          </CDropdown>
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <ShareModal visible={shareModalVisible} onClose={closeShareModal} />
    </>
  );
}

export default QueueList;
