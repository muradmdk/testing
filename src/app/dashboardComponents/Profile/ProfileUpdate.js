"use client";
import { CButton, CCol, CRow } from '@coreui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Select from 'react-select';

function ProfileUpdate() {
    const [coverImage, setCoverImage] = useState('/assets/dashboard/profile-cover.png');
    const [profileImage, setProfileImage] = useState('/assets/dashboard/profile-cover.png');
    const [detailEdit, setDetailEdit] = useState(false);
    const [userName, setUserName] = useState('Northern Attitude');
    const [about, setAbout] = useState('On our website, you can access an amazing collection of popular and new songs. Stream your favorite tracks in high quality and enjoy without interruptions.');
    const [location, setLocation] = useState('Kalma chowk underpass street#2');
    const [webLink, setWebLink] = useState('www.mymusic.com');
    const [selectedOptions, setSelectedOptions] = useState([]);

    // Options for the multiselect tag input
    const options = [
        { value: 'Pop Music', label: 'Pop Music' },
        { value: 'Pop Singing', label: 'Pop Singing' },
        { value: 'Slowmo', label: 'Slowmo' },
        { value: 'Part Song', label: 'Part Song' },
    ];

    const handleTagChange = (options) => {
        setSelectedOptions(options);
    };

    const handleCoverChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setCoverImage(URL.createObjectURL(file));
        }
    };

    const handleProfileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file));
        }
    };

    return (
        <>
            <div className='profile-update-container mb-4'>
                <div className='profile-cover-picture-wrapper'>
                    <Image src={coverImage} width={100} height={400} alt='profile cover' />
                    <label htmlFor='profile-cover' className='profile-edit-btn'>
                        <Image src={'/assets/dashboard/cam.svg'} width={20} height={20} alt='icon'/>
                    </label>
                    <input type='file' id='profile-cover' hidden onChange={handleCoverChange} />
                </div>
                <div className='user-details-wrapper pt-4'>
                    <CRow>
                        <CCol md={12}>
                            <div className='profile-details-wrapper d-flex justify-content-between'>
                                <div className='profile-img-wrapper mb-3 mb-lg-0'>
                                    <div className='position-relative img-inner-layer'>
                                        <Image src={profileImage} width={84} height={80} alt='profile' />
                                    </div>
                                    <label htmlFor='profile-img' className='profile-edit-btn profile-edit-btn2'>
                                        <Image src={'/assets/dashboard/cam.svg'} width={8} height={8} alt='icon'/>
                                    </label>
                                    <input type='file' id='profile-img' hidden onChange={handleProfileChange} />
                                </div>
                                <div className='ps-lg-3 about-txt-wrapper'>
                                    {detailEdit?
                                        <>
                                            <input 
                                                type='text' 
                                                placeholder='Enter Name' 
                                                value={userName} 
                                                onChange={(e)=>setUserName(e.target.value)}
                                                className='d-block form-control mb-3'
                                            />
                                            <textarea 
                                                placeholder='Enter Bio' 
                                                value={about} 
                                                onChange={(e)=>setAbout(e.target.value)}
                                                className='form-control'
                                                role='6'
                                            ></textarea>
                                        </>
                                    :
                                        <>
                                            <h3>{userName}</h3>
                                            <p>{about}</p>
                                        </>
                                    }
                                </div>
                                <div className='about-edit-wraper ps-lg-3'>
                                    <Link href={'#'} onClick={()=>setDetailEdit(!detailEdit)}>
                                        <Image src={'/assets/dashboard/edit-text.svg'} width={20} height={20} alt='icon'/>
                                    </Link>
                                </div>
                            </div>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol lg={6} className='mt-3'>
                            {detailEdit?
                                <input 
                                    type='text' 
                                    className='form-control'
                                    value={location}
                                    onChange={(e)=>setLocation(e.target.value)}
                                />
                                :
                                <div className='d-flex align-items-center address-wrapper'>
                                    <Image 
                                        src={'/assets/dashboard/location.svg'} 
                                        width={20} 
                                        height={20} 
                                        alt='icon'
                                    />
                                    <span className='ms-3'>{location}</span>
                                </div>
                            }
                        </CCol>
                        <CCol lg={6} className='mt-3'>
                            {detailEdit?
                                <input 
                                    type='text' 
                                    className='form-control'
                                    value={webLink}
                                    onChange={(e)=>setWebLink(e.target.value)}
                                />
                                :
                                <div className='d-flex align-items-center address-wrapper'>
                                    <Image 
                                        src={'/assets/dashboard/globe.svg'} 
                                        width={20} 
                                        height={20} 
                                        alt='icon'
                                    />
                                    <span className='ms-3'>{webLink}</span>
                                </div>
                            }
                        </CCol>
                        <CCol lg={12} className='mt-3'>
                            <label className='tag-label mb-2'>Genre/Tags</label>
                            <Select
                                isMulti
                                options={options}
                                value={selectedOptions}
                                onChange={handleTagChange}
                                placeholder="Select Genre/Tags"
                                closeMenuOnSelect={false}
                                className="select-input tag-select-wrapper"
                                classNamePrefix="select"
                            />
                        </CCol>
                        <CCol lg={5} className='mx-auto mt-5'>
                            <button className='profile-update-btn'>Update</button>
                        </CCol>
                    </CRow>
                </div>
            </div>
        </>
    );
}

export default ProfileUpdate;
