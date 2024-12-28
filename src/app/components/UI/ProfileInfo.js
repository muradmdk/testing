import React, { useState } from 'react';
import Image from 'next/image';
import "./profileInfo.css"
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react';
// Avatar
import Avatar from "@/app/assets/feed/demo-img.png";
import Link from 'next/link';
import close from "@/app/assets/feed/close.png";


export default function ProfileInfo({ avatar, profileName, subDetail, subs }) {
  const [visible, setVisible] = useState(false);
  const subscriberList = [
    {
      id: 1,
      avatar: Avatar,
      title: "John Doe",
      desc: "Product Manager",
    },
    {
      id: 2,
      avatar: Avatar,
      title: "Jane Smith",
      desc: "Software Engineer",
    },
    {
      id: 3,
      avatar: Avatar,
      title: "Alice Johnson",
      desc: "Marketing Specialist",
    },
    {
      id: 4,
      avatar: Avatar,
      title: "Michael Brown",
      desc: "UI/UX Designer",
    },
    {
      id: 5,
      avatar: Avatar,
      title: "Emily Davis",
      desc: "Sales Representative",
    },
    {
      id: 6,
      avatar: Avatar,
      title: "William Martinez",
      desc: "Data Scientist",
    },
    {
      id: 7,
      avatar: Avatar,
      title: "Sophia Wilson",
      desc: "Content Writer",
    },
    {
      id: 8,
      avatar: Avatar,
      title: "James Anderson",
      desc: "Project Manager",
    },
    {
      id: 9,
      avatar: Avatar,
      title: "Isabella Thomas",
      desc: "Business Analyst",
    },
    {
      id: 10,
      avatar: Avatar,
      title: "Oliver Taylor",
      desc: "DevOps Engineer",
    },
  ];

  return (
    <>
      <div className='profileInfo-wrapper'>
        <div className='profile-avatar'>
          <Image src={avatar} width={64} height={64} alt='avatar' />
        </div>
        <div className='profile-desc ps-2'>
          <h4>{profileName}</h4>
          {/* <p className='mb-0'>{subDetail}</p> */}
          <button type='button' onClick={() => setVisible(!visible)}><span>{subs}</span> subs</button>
        </div>
      </div>
      <CModal
        visible={visible}
        alignment="center"
        scrollable
        aria-labelledby="SubscriberList"
        className='SubscriberList-model'
      >
        <CModalHeader className='position-relative'>
          <CModalTitle id="VerticallyCenteredScrollableExample2">Subscriber List</CModalTitle>
          <button type='button' className='sub-close-btn' onClick={() => setVisible(false)}><Image src={close} width={24} height={24} alt='close'></Image></button>
        </CModalHeader>
        <CModalBody>
          <div className='artist-subscriber-modelWrapper'>
            <ul>
              {subscriberList.map((subscriber) => (
                <li key={subscriber.id}>
                  <div className="single-subscriber-wrapper">

                    <div className="single-sub-avatar">
                      <div className='avatar-sub'>
                        <Image src={subscriber.avatar} width={44} height={44} alt="Subscriber Avatar" />
                      </div>

                      <div className="subscriber-info ps-2">
                        <h5>{subscriber.title}</h5>
                        <p>{subscriber.desc}</p>
                      </div>
                    </div>
                    <div className='sub-message'>
                      <Link href="#">Message</Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </CModalBody>
      </CModal>
    </>
  )
}
