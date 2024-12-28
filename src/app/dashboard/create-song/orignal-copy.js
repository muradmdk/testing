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

function CreateSong() {
  const [isEditingPermalink, setIsEditingPermalink] = useState(false);
  const [coverImage, setCoverImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] = useState("");
  const formik = useFormik({
    initialValues: {
      title: "",
      album: "",
      description: "",
      level: "",
      startDate: "",
      albumCode: "",
      endDate: "",
      recordLabel: "",
      producer: "",
      writer: "",
      artist: "",
      mixingEngineer: "",
      masterEngineer: "",
      permalink: "www.detailx.com/hassan/dizlinggray",
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

  const handleTagChange = (options) => {
    setSelectedOptions(options);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      const fileType = file.type.startsWith("image") ? "image" : "audio";

      setFileName(file.name);
      setFileType(fileType);

      // Update cover image or display music label
      if (fileType === "image") {
        setCoverImage(fileUrl);
      } else if (fileType === "audio") {
        setCoverImage(null); // Clear image if audio is uploaded
      }
    }
  };

  return (
    <>
      <CRow>
        <CCol lg={12}>
          <CForm onSubmit={formik.handleSubmit}>
            <CRow>
              <CCol lg={3} className="mb-4 mb-lg-0">
                <div className="uploading-wrapper ">
                  <div className="upload-placeholder-wrapper position-relative">
                    {/* Show "sss" div when coverImage is null */}
                    {!coverImage && fileType != "audio" && (
                      <div className="upload-msg">
                        <label htmlFor="">Plese Upload Any Media</label>
                      </div>
                    )}

                    {/* Display cover image if uploaded file is an image */}
                    {fileType === "image" && coverImage && (
                      <>
                        <div className="uploaded-img">
                          <Image
                            src={coverImage}
                            width={100}
                            height={280}
                            alt="profile cover"
                          />
                        </div>
                      </>
                    )}

                    {/* Display label and file name if uploaded file is audio */}
                    {fileType === "audio" && (
                      <div className="audio-upload-label text-center">
                        <p className="mb-0">Music Uploaded</p>
                        <p className="mb-0">{fileName}</p>
                      </div>
                    )}

                    <label
                      htmlFor="profile-cover"
                      className="upload-action-wrapper"
                    >
                      <Image
                        src={"/assets/dashboard/cam.svg"}
                        width={20}
                        height={20}
                        alt="icon"
                      />
                    </label>
                    <input
                      type="file"
                      id="profile-cover"
                      hidden
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
                      <h3 className="mb-0">Complete Your Song Upload</h3>
                    </div>
                    <CCol lg={12} className="mb-3">
                      <div className="grey-input-wrapper no-label">
                        <CFormInput
                          type="text"
                          placeholder="Song Name"
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
                    <CCol lg={12} className="mb-3">
                      <div className="grey-input-wrapper no-label">
                        <CFormSelect
                          name="album"
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
                          placeholder="Song ISRC"
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
                          name="title"
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
                          name="title"
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
                          name="title"
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
                          name="title"
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
                          name="title"
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
                          name="title"
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
