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
        Notification Menu
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
            <div className="side-layout-body w-100">
              <ul className="sidebar-menu-list w-100 ">
                <li
                  className={
                    isActive("/dashboard/notification") ? "active" : ""
                  }
                >
                  <Link
                    href={"/dashboard/notification"}
                    onClick={() => setVisible(false)}
                  >
                    All Notification
                  </Link>
                </li>
                <li
                  className={
                    isActive("/dashboard/notification/comments") ? "active" : ""
                  }
                >
                  <Link
                    href={"/dashboard/notification/comments"}
                    onClick={() => setVisible(false)}
                  >
                    Comments
                  </Link>
                </li>
                <li
                  className={
                    isActive("/dashboard/notification/reports") ? "active" : ""
                  }
                >
                  <Link
                    href={"/dashboard/notification/reports"}
                    onClick={() => setVisible(false)}
                  >
                    Reports
                  </Link>
                </li>
                <li
                  className={
                    isActive("/dashboard/notification/subscribe")
                      ? "active"
                      : ""
                  }
                >
                  <Link
                    href={"/dashboard/notification/subscribe"}
                    onClick={() => setVisible(false)}
                  >
                    Subscribe
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
