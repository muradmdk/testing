"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "@/app/styles/dashboard/edit-album/edit-album.css";
import {
  CButton,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CRow,
} from "@coreui/react";
import Select from "react-select";
import "@/app/styles/dashboard/songEditForm/songEditForm.css";
import Image from "next/image";
import Link from "next/link";
import plusIcon from "@/app/assets/dashboard/plus.svg";
import "@/app/styles/dashboard/DashboardDefault/default.css";
import albumSongUploadIcon from "@/app/assets/dashboard/uploadFile.svg";

function CreateSong() {
  const [isEditingPermalink, setIsEditingPermalink] = useState(false);
  const [coverImage, setCoverImage] = useState(null);
  const [isDragActive, setIsDragActive] = useState(false);
 

  // Initial Values
  const initialValues = {
    song_name: "",
    album_id: "",
    song_description: "",
    subscription_level_id: "",
    publish_date: "",
    song_isrc: "",
    release_date: "",
    genre_id: [],
    record_label: "",
    composer: "",
    featured: "",
    mixing_engineer: "",
    mastering_engineer: "",
    permalink: "www.detailx.com/hassan/dizlinggray",
    track_file: null,
    cover_picture: null,
  };

  const formik = useFormik({
    initialValues: {
      song_name: "",
      album_id: "",
      song_description: "",
      subscription_level_id: "",
      publish_date: "",
      song_isrc: "",
      release_date: "",
      genres: [],
      record_label: "",
      producer: "",
      composer: "",
      featured: "",
      mixing_engineer: "",
      mastering_engineer: "",
      permalink: "www.detailx.com/hassan/dizlinggray",
      track_file: null,
      cover_picture: null,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required!"),
      album: Yup.string().required("Album is required!"),
      description: Yup.string().required("Description is required!"),
      level: Yup.string().required("Select a level!"),
      startDate: Yup.date().required("Start date is required!"),
      albumCode: Yup.string().required("Album code is required!"),
      endDate: Yup.date().required("End date is required!"),
      recordLabel: Yup.string().required("Record Label is required!"),
      producer: Yup.string().required("Producer is required!"),
      writer: Yup.string().required("Writer is required!"),
      artist: Yup.string().required("Artist is required!"),
      mixingEngineer: Yup.string().required("Mixing Engineer is required!"),
      masterEngineer: Yup.string().required("Master Engineer is required!"),
    }),
    onSubmit: (values) => {
      console.log("Form data:", values);
    },
  });

  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = [
    { value: "Pop Music", label: "Pop Music" },
    { value: "Pop Singing", label: "Pop Singing" },
    { value: "Slowmo", label: "Slowmo" },
    { value: "Part Song", label: "Part Song" },
  ];

  const handleFileChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    if (file) {
      setFieldValue("cover_picture", file);
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

  const handleDrop = (event, setFieldValue) => {
    event.preventDefault();
    setIsDragActive(false);

    const file = event.dataTransfer.files[0];
    if (file) {
      setFieldValue("cover_picture", file);
      const imageUrl = URL.createObjectURL(file);
      setCoverImage(imageUrl);
    }
  };

  const handleDelete = (setFieldValue) => {
    setFieldValue("cover_picture", null);
    document.getElementById("profile-cover").value = ""; // Clear file input
    setCoverImage(null);
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
                    onDrop={(e) => handleDrop(e, setFieldValue)}
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
                            onClick={() =>
                              document.getElementById("profile-cover").click()
                            }
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
                            onClick={() => handleDelete(setFieldValue)}
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
                      onChange={(e) => handleFileChange(e, setFieldValue)}
                    />
                  </div>
                </div>
              </CCol>
              <CCol lg={9}>
                <div className="form-bg-wrapper">
                  <CRow>
                    <div className="page-title-wrapper mb-4">
                      <h3 className="mb-0">Complete Your Song Upload</h3>
                    </div>
                    <CCol lg={12} className="mb-3">
                      <div className="grey-input-wrapper no-label">
                        <CFormInput
                          type="text"
                          placeholder="Song Name"
                          name="song_name"
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
                    <CCol lg={12} className="mb-3">
                      <div className="grey-input-wrapper no-label">
                        <CFormSelect
                          name="album_id"
                          value={formik.values.album}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        >
                          <option value="" selected disabled>
                            Select Album
                          </option>
                          <option value="1">Level 1</option>
                          <option value="2">Level 2</option>
                          <option value="3">Level 3</option>
                        </CFormSelect>
                        {formik.touched.album && formik.errors.album ? (
                          <div className="error-text">
                            {formik.errors.album}
                          </div>
                        ) : null}
                      </div>
                    </CCol>
                    <CCol lg={12} className="mb-3">
                      <div className="create-album-link text-end">
                        <Link href={"/dashboard/create-album"}>
                          <Image
                            src={plusIcon}
                            width={16}
                            height={16}
                            alt="plus-icon"
                            className="me-1"
                          />
                          Create Album
                        </Link>
                      </div>
                    </CCol>
                    <CCol lg={12} className="mb-4">
                      <div className="grey-input-wrapper no-label">
                        <CFormTextarea
                          placeholder="Song Description"
                          name="song_description"
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
                          name="subscription_level_id"
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
                          name="publish_date"
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
                          placeholder="Song ISRC"
                          name="song_isrc"
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
                          name="release_date"
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
                    {/* Need to Style it */}
                    <CCol lg={12} className="mb-4">
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

                    <CCol lg={4} className="mb-4">
                      <div className="grey-input-wrapper no-label">
                        <CFormInput
                          type="text"
                          placeholder="Record Label"
                          name="record_label"
                          value={formik.values.recordLabel}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.recordLabel &&
                        formik.errors.recordLabel ? (
                          <div className="error-text">
                            {formik.errors.recordLabel}
                          </div>
                        ) : null}
                      </div>
                    </CCol>

                    <CCol lg={4} className="mb-4">
                      <div className="grey-input-wrapper no-label">
                        <CFormInput
                          type="text"
                          placeholder="Producer"
                          name="producer"
                          value={formik.values.producer}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.producer && formik.errors.producer ? (
                          <div className="error-text">
                            {formik.errors.producer}
                          </div>
                        ) : null}
                      </div>
                    </CCol>

                    <CCol lg={4} className="mb-4">
                      <div className="grey-input-wrapper no-label">
                        <CFormInput
                          type="text"
                          placeholder="Writer/Composer"
                          name="composer"
                          value={formik.values.writer}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.writer && formik.errors.writer ? (
                          <div className="error-text">
                            {formik.errors.writer}
                          </div>
                        ) : null}
                      </div>
                    </CCol>

                    <CCol lg={4} className="mb-4">
                      <div className="grey-input-wrapper no-label">
                        <CFormInput
                          type="text"
                          placeholder="Featured/Guest Artist"
                          name="featured"
                          value={formik.values.artist}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.artist && formik.errors.artist ? (
                          <div className="error-text">
                            {formik.errors.artist}
                          </div>
                        ) : null}
                      </div>
                    </CCol>

                    <CCol lg={4} className="mb-4">
                      <div className="grey-input-wrapper no-label">
                        <CFormInput
                          type="text"
                          placeholder="Mixing Engineer"
                          name="mixing_engineer"
                          value={formik.values.mixingEngineer}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.mixingEngineer &&
                        formik.errors.mixingEngineer ? (
                          <div className="error-text">
                            {formik.errors.mixingEngineer}
                          </div>
                        ) : null}
                      </div>
                    </CCol>

                    <CCol lg={4} className="mb-4">
                      <div className="grey-input-wrapper no-label">
                        <CFormInput
                          type="text"
                          placeholder="Mastering Engineer"
                          name="mastering_engineer"
                          value={formik.values.masterEngineer}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.masterEngineer &&
                        formik.errors.masterEngineer ? (
                          <div className="error-text">
                            {formik.errors.masterEngineer}
                          </div>
                        ) : null}
                      </div>
                    </CCol>

                    <CCol lg={12} className="mb-4">
                      <div className="d-flex align-items-center">
                        <label className="custom-label2">Privacy</label>
                        <div className="mx-4">
                          <CFormCheck
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            label="Public"
                          />
                        </div>
                        <div>
                          <CFormCheck
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            label="Private"
                            defaultChecked
                          />
                        </div>
                      </div>
                    </CCol>
                    {/* Permalink Section with Edit Functionality */}
                    <CCol lg={12} className="mb-4">
                      <label className="custom-label2">Permalink</label>
                      <div className="grey-input-wrapper">
                        {isEditingPermalink ? (
                          <CFormInput
                            type="text"
                            name="permalink"
                            value={formik.values.permalink}
                            onChange={formik.handleChange}
                            onBlur={() => setIsEditingPermalink(false)}
                          />
                        ) : (
                          <div className="d-flex align-items-center">
                            <p className="mb-0">{formik.values.permalink}</p>
                            <Link
                              href="#"
                              onClick={() => setIsEditingPermalink(true)}
                              className="ms-3"
                            >
                              <Image
                                src={"/assets/dashboard/edit.svg"}
                                width={16}
                                height={16}
                                alt="Edit icon"
                              />
                            </Link>
                          </div>
                        )}
                      </div>
                    </CCol>
                    <CCol lg={12} className="mb-3">
                      <div className="d-flex">
                        <CFormCheck id="flexCheckDefault" />
                        <label
                          htmlFor="flexCheckDefault"
                          className="custom-label3 ms-3"
                        >
                          I confirm that I am the rightful owner of this song
                          and all associated rights, and I have full authority
                          to upload and distribute this content on this
                          platform.
                        </label>
                      </div>
                    </CCol>
                    <CRow className="justify-content-center mt-4">
                      <CCol lg={6}>
                        <CButton
                          type="submit"
                          className="theme-primary-btn w-100 btn-dashboard"
                          style={{ padding: "11px 0px" }}
                        >
                          Upload
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
