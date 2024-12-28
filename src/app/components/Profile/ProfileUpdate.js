"use client";
import React, { useState } from 'react';
import { CCol, CModal, CModalBody, CRow } from '@coreui/react';
import Image from 'next/image';
import Link from 'next/link';

function ProfileUpdate() {

    const [editName, setEditName] = useState(false);
    const [editBio, setEditBio] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [profileImage, setProfileImage] = useState('/assets/profile/profile.png');
    const [coverImage, setCoverImage] = useState('/assets/profile/profile-cover.png');
    const [visible, setVisible] = useState(false);

    //-- user name edit function
    const handleUserName = (e) => {
        e.preventDefault();
        setEditName(true);
    }

    // Handle profile image change
    const handleProfileImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
        document.getElementById('profile-picture').innerText = file.name;
    }

    // Handle profile image preview
    const handleProfileImageUpload = () => {
        if (selectedImage) {
            setProfileImage(selectedImage);
        }
        setVisible(false);
    }

    // Handle cover image change
    const handleCoverImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const coverImageUrl = URL.createObjectURL(file);
            setCoverImage(coverImageUrl);
        }
    }

   

    // Bio update
    const handleBioEdit = (e) => {
        e.preventDefault();
        setEditBio(true);
    }

    return (
        <>
                <CRow>
                    <CCol lg={12}>
                        <div
                            className='profile-cover-wrapper w-100'
                            style={{ backgroundImage: `url(${coverImage})` }}
                        >
                            {/*/--- Profile Cover Picture ---/*/}
                            <div className='profile-cover-img-wrapper'>
                                <label className='cover-photo-label' htmlFor='cover-img-input'>
                                    <Image src={'/assets/profile/img-icon.svg'} width={20} height={20} alt='image' />
                                    <span className='fs-16 fw-400 font-lato lh-19 ms-2'>Upload header image</span>
                                </label>
                                <input
                                    type='file'
                                    id='cover-img-input'
                                    hidden
                                    accept="image/*"
                                    onChange={handleCoverImageChange}
                                />
                            </div>

                            {/*/--- User Profile Image ---/*/}
                            <div className='user-profile-img'>
                                <div className='h-100 w-100 position-relative'>
                                    <Image src={profileImage} height={100} width={100} alt='profile picture' />
                                    <label
                                        className='dp-edit-btn'
                                        // htmlFor='dp-input'
                                        onClick={() => setVisible(!visible)}
                                    >
                                        <Image
                                            src={'/assets/edit-icon-white.svg'}
                                            height={24}
                                            width={24}
                                            alt='icon'
                                        />
                                    </label>
                                </div>
                            </div>

                            {/*/--- User Name ---/*/}
                            <div className='user-name d-flex align-items-center'>
                                {editName ?
                                    <input className='single-edit-input' placeholder='Enter New User Name' type='text' defaultValue='Ahme Hassan' />
                                    :
                                    <>
                                        <p className='mb-0 me-3'>Ahme Hassan</p>
                                        <Link
                                            href={'#'}
                                            onClick={(e) => handleUserName(e)}
                                        >
                                            <Image
                                                src={'/assets/edit-icon-white.svg'}
                                                height={24}
                                                width={24}
                                                alt='icon'
                                            />
                                        </Link>
                                    </>
                                }
                            </div>
                        </div>
                    </CCol>
                </CRow>
                <CRow className='mt-4'>
                    <CCol lg={12}>
                        <label className='color-white fs-35 fw-400 lh-42 font-lato mt-3'>
                            <span className='me-4'>Bios</span>
                            <Link href='#' onClick={(e)=>handleBioEdit(e)}>
                                <Image
                                    src={'/assets/edit-icon-white.svg'}
                                    height={24}
                                    width={24}
                                    alt='icon'
                                />
                            </Link>
                        </label>
                        {editBio? 
                            <textarea 
                                className='single-edit-input w-100 mt-3'
                                placeholder='Enter Bio'
                                rows={4}
                                defaultValue='On our website, you can access an amazing collection of popular and new songs. Stream your favorite tracks in high quality and enjoy without interruptions. '
                            ></textarea>
                        :
                            <p className='color-white fs-16 fw-400 font-lato lh-24 mb-0 mt-3'>
                                On our website, you can access an amazing collection of popular and new songs. Stream your favorite tracks in high quality and enjoy without interruptions. 
                            </p>
                        }
                    </CCol>
                </CRow>
 

            {/*/--- User Image Upload Modal ---/*/}
            <CModal
                alignment="center"
                visible={visible}
                onClose={() => setVisible(false)}
                aria-labelledby="LiveDemoExampleLabel"
            >
                <CModalBody>
                    <div className='photo-upload-modal'>
                        
                        <label 
                            className='theme-secondary-btn d-block w-100 text-center fw-400 font-lato fs-22 position-relative'  
                            htmlFor='dp-input'
                        >
                            <Image 
                                src={'/assets/profile/img-icon.svg'} 
                                width={25} 
                                height={25} 
                                alt='image'
                                className='position-absolute img-icon'
                            />
                            <span>Select Image</span>
                        </label>
                        <input
                            type='file'
                            id='dp-input'
                            hidden
                            accept="image/*" 
                            onChange={handleProfileImageChange} 
                        />
                        <span id='profile-picture'></span>
                        
                        <button 
                            className='mt-4 theme-primary-btn upload-btn fs-22 fw-400 font-lato w-100'
                            onClick={handleProfileImageUpload}
                        >
                            <span>Upload</span>
                        </button>

                    </div>
                </CModalBody>
            </CModal>
        </>
    )
}

export default ProfileUpdate;