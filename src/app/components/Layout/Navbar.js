"use client";
import {
  CCloseButton,
  CContainer,
  CDropdown,
  CDropdownMenu,
  CDropdownToggle,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
} from "@coreui/react";
import React, { useState } from "react";
import "@/app/styles/navbar/navbar.css";
import Image from "next/image";
import logo from "@/app/assets/logo.svg";
import homeIcon from "@/app/assets/home.svg";
import artistIcon from "@/app/assets/artist.svg";
import libraryIcon from "@/app/assets/library.svg";
import redCarpetIcon from "@/app/assets/red-carpet.svg";
import profileIcon from "@/app/assets/user.svg";
import settingIcon from "@/app/assets/setting.svg";
import accountIcon from "@/app/assets/artist-icon.svg";
import filterIcon from "@/app/assets/filter.svg";
import notifiIcon from "@/app/assets/notify-icon.svg";
import mixtape from "@/app/assets/mixtape.svg";
import search from "@/app/assets/feed/search.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FilterModal from "../FilterModal/FilterModal";

function Navbar() {
  const [ModalVisible, setModalVisible] = useState(false);
  const openShareModal = () => setModalVisible(true);
  const closeShareModal = () => setModalVisible(false);

  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  const isActive = (currentPath) => pathname === currentPath;

  return (
    <>
      <section className="nav-wrapper">
        <CNavbar expand="lg">
          <CContainer fluid>
            <CNavbarBrand>
              <Link href="/">
                <Image src={logo} alt="logo" width="70" height="70" />
              </Link>
            </CNavbarBrand>
            <div className="d-flex align-items-center">
              <div className="navbar-filter-wrapper ms-3 me-2 d-inline-block d-lg-none">
                <button type="button" onClick={openShareModal}>
                  <Image src={filterIcon} width={15} height={15} alt="icon" />
                </button>
              </div>
              <div className="navbar-filter-wrapper ms-0 me-3 d-inline-block d-lg-none">
                <Link href={"/notifications"}>
                  <Image src={notifiIcon} width={15} height={15} alt="icon" />
                </Link>
              </div>

              <div className="navbar-dropdown-wrapper d-inline-block d-lg-none me-3">
                <div className="custom-dropdown-menu">
                  <CDropdown popper={true}>
                    <CDropdownToggle>
                      <div className="burger-menu-lines">
                        <span className="line line-1"></span>
                        <span className="line line-2"></span>
                        <span className="line line-3"></span>
                      </div>
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <Link
                        href="/profile"
                        className="d-flex align-items-center dropdown-item"
                      >
                        <Image
                          src={profileIcon}
                          width={15}
                          height={15}
                          alt="icon"
                          className="me-2"
                        />
                        <span className="fw-400 fs-16 text-white">Profile</span>
                      </Link>
                      <Link
                        href="/settings"
                        className="d-flex align-items-center dropdown-item"
                      >
                        <Image
                          src={settingIcon}
                          width={15}
                          height={15}
                          alt="icon"
                          className="me-2"
                        />
                        <span className="fw-400 fs-16 text-white">
                          Settings
                        </span>
                      </Link>
                      <Link
                        href="/artistAccount"
                        className="d-flex align-items-center dropdown-item"
                      >
                        <Image
                          src={accountIcon}
                          width={15}
                          height={15}
                          alt="icon"
                          className="me-2"
                        />
                        <span className="fw-400 fs-16 text-white">
                          Artist Ac
                        </span>
                      </Link>
                      <Link
                        href="/login"
                        className="d-flex align-items-center dropdown-item"
                      >
                        <Image
                          src={settingIcon}
                          width={15}
                          height={15}
                          alt="icon"
                          className="me-2"
                        />
                        <span className="fw-400 fs-16 text-white">Login</span>
                      </Link>
                      <Link
                        href="/dashboard"
                        className="d-flex align-items-center dropdown-item"
                      >
                        <Image
                          src={settingIcon}
                          width={15}
                          height={15}
                          alt="icon"
                          className="me-2"
                        />
                        <span className="fw-400 fs-16 text-white">
                          Dashboard
                        </span>
                      </Link>
                    </CDropdownMenu>
                  </CDropdown>
                </div>
              </div>
              {/* <CNavbarToggler
                                aria-controls="offcanvasNavbar"
                                aria-label="Toggle navigation"
                                onClick={() => setVisible(!visible)}
                            /> */}
              <button
                className="toggle-navigation d-lg-none d-inline-blokc"
                onClick={() => setVisible(!visible)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                  <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                </svg>
              </button>
            </div>

            <COffcanvas
              id="offcanvasNavbar"
              placement="end"
              portal={false}
              visible={visible}
              onHide={() => setVisible(false)}
            >
              <COffcanvasHeader className="justify-content-between">
                <COffcanvasTitle>
                  <Link href="/">
                    <Image src={logo} alt="logo" width="70" height="70" />
                  </Link>
                </COffcanvasTitle>
                <CCloseButton
                  className="text-reset"
                  onClick={() => setVisible(false)}
                />
              </COffcanvasHeader>
              <COffcanvasBody className="justify-content-between">
                <CNavbarNav>
                  <CNavItem>
                    <Link
                      href="/"
                      className={`nav-item nav-item-style  ${
                        isActive("/") ? "active" : ""
                      }`}
                      onClick={() => setVisible(false)}
                    >
                      <div className="single-nav-wrapper">
                        <div className="single-nav-icon">
                          <Image
                            src={homeIcon}
                            width={20}
                            height={20}
                            alt="nav-icon"
                          ></Image>
                        </div>
                        <div className="single-nav-desc">
                          <span>Home</span>
                        </div>
                      </div>
                    </Link>
                  </CNavItem>
                  <CNavItem>
                    <Link
                      href="/library"
                      className={`nav-item nav-item-style  ${
                        isActive("/library") ? "active" : ""
                      }`}
                      onClick={() => setVisible(false)}
                    >
                      <div className="single-nav-wrapper">
                        <div className="single-nav-icon">
                          <Image
                            src={libraryIcon}
                            width={20}
                            height={20}
                            alt="nav-icon"
                          ></Image>
                        </div>
                        <div className="single-nav-desc">
                          <span>Library</span>
                        </div>
                      </div>
                    </Link>
                  </CNavItem>
                  <CNavItem>
                    <Link
                      href="/events"
                      className={`nav-item nav-item-style  ${
                        isActive("/events") ? "active" : ""
                      }`}
                      onClick={() => setVisible(false)}
                    >
                      <div className="single-nav-wrapper">
                        <div className="single-nav-icon">
                          <Image
                            src={redCarpetIcon}
                            width={20}
                            height={20}
                            alt="nav-icon"
                          ></Image>
                        </div>
                        <div className="single-nav-desc">
                          <span>Events</span>
                        </div>
                      </div>
                    </Link>
                  </CNavItem>
                  <CNavItem>
                    <Link
                      href="/artists"
                      className={`nav-item nav-item-style  ${
                        isActive("/artists") ? "active" : ""
                      }`}
                      onClick={() => setVisible(false)}
                    >
                      <div className="single-nav-wrapper">
                        <div className="single-nav-icon">
                          <Image
                            src={artistIcon}
                            width={20}
                            height={20}
                            alt="nav-icon"
                          ></Image>
                        </div>
                        <div className="single-nav-desc">
                          <span>Artists</span>
                        </div>
                      </div>
                    </Link>
                  </CNavItem>
                  <CNavItem>
                    <Link
                      href="/mixtape"
                      className={`nav-item nav-item-style  ${
                        isActive("/mixtape") ? "active" : ""
                      }`}
                      onClick={() => setVisible(false)}
                    >
                      <div className="single-nav-wrapper">
                        <div className="single-nav-icon">
                          <Image
                            src={mixtape}
                            width={20}
                            height={20}
                            alt="nav-icon"
                          ></Image>
                        </div>
                        <div className="single-nav-desc">
                          <span>Mixtape</span>
                        </div>
                      </div>
                    </Link>
                  </CNavItem>
                </CNavbarNav>
                <div className="d-flex align-items-center">
                  <div className="navbar-search-wrapper position-relative">
                    <input
                      type="text"
                      placeholder="Search music, artists, albums, or genres"
                    />
                    <div className="navbar-submitbtn">
                      <Image
                        src={search}
                        width={20}
                        height={20}
                        alt="search-icon"
                      ></Image>
                    </div>
                  </div>
                  <div className="navbar-filter-wrapper ms-2 me-2 d-none d-lg-block">
                    <button type="button" onClick={openShareModal}>
                      <Image
                        src={filterIcon}
                        width={15}
                        height={15}
                        alt="icon"
                      />
                    </button>
                  </div>
                  <div className="navbar-filter-wrapper ms-0 me-3 d-none d-lg-block">
                    <Link href={"/notifications"}>
                      <Image
                        src={notifiIcon}
                        width={15}
                        height={15}
                        alt="icon"
                      />
                    </Link>
                  </div>
                  <div
                    className="navbar-dropdown-wrapper d-none d-lg-block"
                    style={{ position: "relative", top: "-3px" }}
                  >
                    <div className="custom-dropdown-menu">
                      <CDropdown popper={true}>
                        <CDropdownToggle>
                          <div className="burger-menu-lines">
                            <span className="line line-1"></span>
                            <span className="line line-2"></span>
                            <span className="line line-3"></span>
                          </div>
                        </CDropdownToggle>
                        <CDropdownMenu>
                          <Link
                            href="/profile"
                            className="d-flex align-items-center dropdown-item"
                          >
                            <Image
                              src={profileIcon}
                              width={15}
                              height={15}
                              alt="icon"
                              className="me-2"
                            />
                            <span className="fw-400 fs-16 text-white">
                              Profile
                            </span>
                          </Link>
                          <Link
                            href="/settings"
                            className="d-flex align-items-center dropdown-item"
                          >
                            <Image
                              src={settingIcon}
                              width={15}
                              height={15}
                              alt="icon"
                              className="me-2"
                            />
                            <span className="fw-400 fs-16 text-white">
                              Settings
                            </span>
                          </Link>
                          <Link
                            href="/artistAccount"
                            className="d-flex align-items-center dropdown-item"
                          >
                            <Image
                              src={accountIcon}
                              width={15}
                              height={15}
                              alt="icon"
                              className="me-2"
                            />
                            <span className="fw-400 fs-16 text-white">
                              Artist Ac
                            </span>
                          </Link>
                          <Link
                            href="/login"
                            className="d-flex align-items-center dropdown-item"
                          >
                            <Image
                              src={settingIcon}
                              width={15}
                              height={15}
                              alt="icon"
                              className="me-2"
                            />
                            <span className="fw-400 fs-16 text-white">
                              Login
                            </span>
                          </Link>
                          <Link
                            href="/dashboard"
                            className="d-flex align-items-center dropdown-item"
                          >
                            <Image
                              src={settingIcon}
                              width={15}
                              height={15}
                              alt="icon"
                              className="me-2"
                            />
                            <span className="fw-400 fs-16 text-white">
                              Dashboard
                            </span>
                          </Link>
                        </CDropdownMenu>
                      </CDropdown>
                    </div>
                  </div>
                </div>
              </COffcanvasBody>
            </COffcanvas>
          </CContainer>
        </CNavbar>

        <FilterModal visible={ModalVisible} onClose={closeShareModal} />
      </section>
    </>
  );
}

export default Navbar;
