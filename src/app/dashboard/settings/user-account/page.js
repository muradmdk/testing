"use client";
import React, { useState, useEffect } from "react";
import "@/app/styles/dashboard/commonCard/commonCard.css";
import {
  CCol,
  CModal,
  CModalBody,
  CRow,
} from "@coreui/react";
import Image from "next/image";
import UserAccountCard from "@/app/dashboardComponents/UserAccountCard/UserAccountCard";
import "@/app/styles/dashboard/DashboardDefault/modal.css";
import closeIcon from "@/app/assets/dashboard/cross.svg";
function UserAccount() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsersList = async () => {
      const res = await fetch("/data/usersList.json");
      const data = await res.json();
      setUsers(data);
    };

    fetchUsersList();
  }, []);

  const [visible, setVisible] = useState(false);

  return (
    <>
      <CRow>
        <CCol lg={12}>
          <div className="common-card">
            <div className="d-flex align-items-center justify-content-between">
              <h2>Account Manager</h2>
              <button type="button" style={{background:"transparent",border:"none"}}  onClick={() => setVisible(!visible)}>
                <Image
                  src={"/assets/dashboard/add-user.svg"}
                  width={25}
                  height={25}
                  alt="icon"
                />
              </button>
            </div>
            <CRow>
              {users.map((user, index) => (
                <CCol lg={6} md={6} sm={12} xs={12} key={index} className="mt-3">
                  <UserAccountCard
                    imgSrc={user.user_img}
                    name={user.user_name}
                    role={user.user_role}
                    email={user.email}
                  />
                </CCol>
              ))}
            </CRow>
          </div>
        </CCol>
      </CRow>

      <CModal
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="LiveDemoExampleLabel"
        alignment="center"
        className="modified-modal"
      >
        {/* onClick={() => setVisible(false)} */}
        <CModalBody>
          <div className="model-header-wrapper text-center position-relative">
            <h3>User Access</h3>
            <button type="button"  onClick={() => setVisible(false)}>
              <Image src={closeIcon} alt="close-icon" width={24} height={24} />
            </button>
          </div>

          <div className="label-forms-wrapper mt-4">
            <div className="ModelLable-inputs-wrapper mb-2 mb-lg-3">
              <label htmlFor="" className="d-block">Search User</label>
              <input type="search" placeholder="search by name or Email" />
            </div>
            <div className="ModelLable-inputs-wrapper mb-4 mb-lg-5">
              <label htmlFor="" className="d-block">Access Level</label>
              <select name="" id="">
                <option value="" disabled>Select Access Level</option>
                <option value="">Manager</option>
                <option value="">User</option>
                <option value="">Client</option>
              </select>
            </div>
            <div className="access-btn-wrapper mb-2 mb-lg-4">
                <button type="button">Grant Access</button>
            </div>
          </div>
        </CModalBody>
      </CModal>
    </>
  );
}

export default UserAccount;
