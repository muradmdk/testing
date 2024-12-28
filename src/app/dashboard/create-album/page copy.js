"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "@/app/styles/dashboard/edit-album/edit-album.css";
import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CRow,
} from "@coreui/react";

import "@/app/styles/dashboard/songEditForm/songEditForm.css";
import Image from "next/image";
import "@/app/styles/dashboard/DashboardDefault/default.css";
import albumSongUploadIcon from "@/app/assets/dashboard/uploadFile.svg";
import editIcon from "@/app/assets/dashboard/edit.svg";
import trashIcon from "@/app/assets/dashboard/trash.svg";

function CreateSong() {
 const [coverImage, setCoverImage] = useState(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] = useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      subscription_id: "",
      upc_ean_code: "",
      published_date: "",
      release_date: "",
      cover_art_credit: "",
      cover_art_path: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required!"),
      album: Yup.string().required("Album is required!"),
      description: Yup.string().required("Description is required!"),
      level: Yup.string().required("Select a level!"),
      startDate: Yup.date().required("Start date is required!"),
      albumCode: Yup.string().required("Album code is required!"),
      endDate: Yup.date().required("End date is required!"),
    }),
    onSubmit: (values) => {
      console.log("Form data:", values);
    },
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCoverImage(imageUrl);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragActive(false);

    const file = event.dataTransfer.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCoverImage(imageUrl);
    }
  };

  const handleDelete = () => {
    setCoverImage(null);
  };

  const handleEdit = () => {
    document.getElementById("profile-cover").click();
  };

  return (
    <>
      <CRow>
        <CCol lg={12}>
          <CForm onSubmit={formik.handleSubmit}>
            <CRow>
              <CCol lg={3} className="mb-4 mb-lg-0">
                <div className="uploading-wrapper ">
                  <div
                    className={`upload-placeholder-wrapper position-relative ${
                      isDragActive ? "drag-active" : ""
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    {!coverImage ? (
                      <>
                        <div className="drag-drop-action-wrapper text-center">
                          <label htmlFor="profile-cover">
                            <Image
                              src={albumSongUploadIcon}
                              width={50}
                              height={50}
                              alt="icon"
                            />
                          </label>
                          <span className="d-block">
                            {isDragActive
                              ? "Drop the file here"
                              : "Drag and Drop Here"}
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="uploaded-img">
                          <Image
                            src={coverImage}
                            width={100}
                            height={280}
                            alt="profile cover"
                          />
                        </div>
                        <div className="drag-drop-action-buttons">
                          <button
                            type="button"
                            className="me-2"
                            onClick={handleEdit}
                          >
                            <Image
                              src={editIcon}
                              width={20}
                              height={20}
                              alt="edit-icon"
                            />
                          </button>
                          <button
                            type="button"
                            className=""
                            onClick={handleDelete}
                          >
                            <Image
                              src={trashIcon}
                              width={20}
                              height={20}
                              alt="trash-icon"
                            />
                          </button>
                        </div>
                      </>
                    )}
                    <input
                      type="file"
                      id="profile-cover"
                      hidden
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="grey-input-wrapper no-label mt-3">
                    <CFormInput
                      type="text"
                      placeholder="Cover Art Credit ( Artist Name )"
                      name="title"
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.title && formik.errors.title ? (
                      <div className="error-text">{formik.errors.title}</div>
                    ) : null}
                  </div>
                </div>
              </CCol>
              <CCol lg={9}>
                <div className="form-bg-wrapper">
                  <CRow>
                    <div className="page-title-wrapper mb-4">
                      <h3 className="mb-0">Complete Your Album Upload</h3>
                    </div>
                    <CCol lg={6} className="mb-3">
                      <div className="grey-input-wrapper no-label">
                        <CFormInput
                          type="text"
                          placeholder="Album Name"
                          name="title"
                          value={formik.values.title}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.title && formik.errors.title ? (
                          <div className="error-text">
                            {formik.errors.title}
                          </div>
                        ) : null}
                      </div>
                    </CCol>
                    <CCol lg={6} className="mb-3">
                      <div className="grey-input-wrapper no-label">
                        <CFormSelect
                          name="album"
                          value={formik.values.album}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        >
                          <option value="">
                            Select Library
                          </option>
                          <option value="1">Library 1</option>
                          <option value="2">Library 2</option>
                          <option value="3">Library 3</option>
                        </CFormSelect>
                        {formik.touched.album && formik.errors.album ? (
                          <div className="error-text">
                            {formik.errors.album}
                          </div>
                        ) : null}
                      </div>
                    </CCol>
                    <CCol lg={12} className="mb-4">
                      <div className="grey-input-wrapper no-label">
                        <CFormTextarea
                          placeholder="Album Description"
                          name="description"
                          rows={5}
                          value={formik.values.description}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        ></CFormTextarea>
                        {formik.touched.description &&
                        formik.errors.description ? (
                          <div className="error-text">
                            {formik.errors.description}
                          </div>
                        ) : null}
                      </div>
                    </CCol>
                    <CCol lg={6} className="mb-4">
                      <div className="grey-input-wrapper no-label">
                        <CFormSelect
                          name="level"
                          value={formik.values.level}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        >
                          <option value="" selected disabled>
                            Subscription Level
                          </option>
                          <option value="1">Level 1</option>
                          <option value="2">Level 2</option>
                          <option value="3">Level 3</option>
                        </CFormSelect>
                        {formik.touched.level && formik.errors.level ? (
                          <div className="error-text">
                            {formik.errors.level}
                          </div>
                        ) : null}
                      </div>
                    </CCol>
                    <CCol lg={6} className="mb-4">
                      <div className="grey-input-wrapper custom-date-input no-label">
                        <CFormInput
                          type="date"
                          name="startDate"
                          value={formik.values.startDate}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                      {formik.touched.startDate && formik.errors.startDate ? (
                        <div className="error-text">
                          {formik.errors.startDate}
                        </div>
                      ) : null}
                    </CCol>
                    <CCol lg={6} className="mb-4">
                      <div className="grey-input-wrapper no-label">
                        <CFormInput
                          type="text"
                          placeholder="Album UPC/EAN Code"
                          name="albumCode"
                          value={formik.values.albumCode}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.albumCode && formik.errors.albumCode ? (
                          <div className="error-text">
                            {formik.errors.albumCode}
                          </div>
                        ) : null}
                      </div>
                    </CCol>
                    <CCol lg={6} className="mb-4">
                      <div className="grey-input-wrapper custom-date-input no-label">
                        <CFormInput
                          type="date"
                          name="endDate"
                          value={formik.values.endDate}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                      {formik.touched.endDate && formik.errors.endDate ? (
                        <div className="error-text">
                          {formik.errors.endDate}
                        </div>
                      ) : null}
                    </CCol>

                    <CRow className="justify-content-center mt-4">
                      <CCol lg={6}>
                        <CButton
                          type="submit"
                          className="theme-primary-btn w-100 btn-dashboard"
                          style={{ padding: "11px 0px" }}
                        >
                          Create Album
                        </CButton>
                      </CCol>
                    </CRow>
                  </CRow>
                </div>
              </CCol>
            </CRow>
          </CForm>
        </CCol>
      </CRow>
    </>
  );
}

export default CreateSong;
