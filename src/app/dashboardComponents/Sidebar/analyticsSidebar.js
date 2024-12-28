"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import {
  CButton,
  CCloseButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
} from "@coreui/react";
import Link from "next/link";
import "@/app/styles/sideBars/left.css";
import "@/app/styles/dashboard/sidebar/sidebar.css";

function SidebarLeft() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname(); // Get the current pathname directly

  const isActive = (href) => pathname === href;

  return (
    <>
      <CButton
        className="d-lg-none w-100 profile-sidebar-toggler"
        onClick={() => setVisible(true)}
      >
        Analytics Menu
      </CButton>
      <COffcanvas
        responsive="lg"
        expand="lg"
        placement="start"
        visible={visible}
        onHide={() => setVisible(false)}
        backdrop={false}
        className="list-offcanvas"
      >
        <COffcanvasHeader className="justify-content-end">
          <CCloseButton
            className="text-reset"
            onClick={() => setVisible(false)}
          />
        </COffcanvasHeader>
        <COffcanvasBody className="w-100 p-4">
          <div className="sidebar-layout-wrapper w-100">
            {/* <h2>Side MENU</h2> */}
            <div className="side-layout-body w-100 h-100">
              <ul className="sidebar-menu-list w-100">
                <li
                  className={isActive("/dashboard/analytics") ? "active" : ""}
                >
                  <Link
                    href={"/dashboard/analytics"}
                    onClick={() => setVisible(false)}
                  >
                    Subscriber
                  </Link>
                </li>
                <li
                  className={
                    isActive("/dashboard/analytics/streaming") ? "active" : ""
                  }
                >
                  <Link
                    href={"/dashboard/analytics/streaming"}
                    onClick={() => setVisible(false)}
                  >
                    Streaming
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </COffcanvasBody>
      </COffcanvas>
    </>
  );
}

export default SidebarLeft;
