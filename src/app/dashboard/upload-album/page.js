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
import minusIcon from "@/app/assets/dashboard/minus.svg";
import albumSongUploadIcon from "@/app/assets/dashboard/uploadFile.svg";
import "@/app/styles/dashboard/DashboardDefault/default.css";
import editIcon from "@/app/assets/dashboard/edit.svg";
import trashIcon from "@/app/assets/dashboard/trash.svg";

function CreateSong() {
  const [isEditingPermalink, setIsEditingPermalink] = useState(false);
  const [coverImage, setCoverImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] = useState("");
  const [isDragActive, setIsDragActive] = useState(false);
  const [albumSongs, setAlbumSongs] = useState([
    {
      songName: "",
      songCode: "",
      songReleseDate: "",
      songDesc: "",
      SongRecord: "",
      SongProducer: "",
      songWriter: "",
      SongArtist: "",
      SongMixingEngineer: "",
      SongMasterEngineer: "",
      SongPermalink: "",
      songSource: null,
      songCoverImage: null,
      songGenre: [], // Changed from null to empty array for multiple selections
    },
  ]);
  const formik = useFormik({
    initialValues: {
      albumTitle: "",
      albumDescription: "",
      albumLevel: "",
      albumStartDate: "",
      albumCode: "",
      albumEndDate: "",
      albumSongs,
    },
    validationSchema: Yup.object({
      albumTitle: Yup.string().required("Album Title is required!"),
      albumDescription: Yup.string().required("Album Description is required!"),
      albumLevel: Yup.string().required("Select a Subscription level!"),
      albumStartDate: Yup.date().required("Album Published Date is required!"),
      albumCode: Yup.string().required("Album code is required!"),
      albumEndDate: Yup.date().required("Album Release Date is required!"),

      albumSongs: Yup.array().of(
        Yup.object().shape({
          songName: Yup.string().required("Song Name is required!"),
          songCode: Yup.string().required("Song ISRC is required!"),
          songReleseDate: Yup.date().required("Song Release Date is required!"),
          songDesc: Yup.string().required("Song Description is required!"),
          SongRecord: Yup.string().required("Record Label is required!"),
          SongProducer: Yup.string().required("Producer is required!"),
          songWriter: Yup.string().required("Writer is required!"),
          SongArtist: Yup.string().required(
            "Featured/Guest Artist is required!"
          ),
          SongMixingEngineer: Yup.string().required(
            "Mixing Engineer is required!"
          ),
          SongMasterEngineer: Yup.string().required(
            "Master Engineer is required!"
          ),
          // SongPermalink: Yup.string().required("Permalink is required!"),
          songSource: Yup.mixed().required("Song file is required!"),
          songCoverImage: Yup.mixed().required("Cover Image is required!"),
          songGenre: Yup.array()
            .of(
              Yup.object().shape({
                value: Yup.string().required(),
                label: Yup.string().required(),
              })
            )
            .min(1, "At least one genre is required"),
        })
      ),
    }),
    onSubmit: (values) => {
      console.log("Form data:", values);
    },
  });

  const [selectedOptions, setSelectedOptions] = useState([]);
  const genreOptions = [
    { value: "pop", label: "Pop" },
    { value: "rock", label: "Rock" },
    { value: "jazz", label: "Jazz" },
    { value: "hiphop", label: "Hip Hop" },
    { value: "classical", label: "Classical" },
  ];

  const handleTagChange = (options) => {
    setSelectedOptions(options);
  };

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

  const handleAddSong = () => {
    const newSong = {
      songName: "",
      songCode: "",
      songReleseDate: "",
      songDesc: "",
      SongRecord: "",
      SongProducer: "",
      songWriter: "",
      SongArtist: "",
      SongMixingEngineer: "",
      SongMasterEngineer: "",
      SongPermalink: "",
      songSource: null,
      songCoverImage: null,
      songGenre: null,
    };

    const updatedSongs = [...formik.values.albumSongs, newSong];
    setAlbumSongs(updatedSongs);
    formik.setFieldValue("albumSongs", updatedSongs);
  };

  const handleRemoveSong = (index) => {
    const updatedSongs = albumSongs.filter(
      (_, songIndex) => songIndex !== index
    );
    setAlbumSongs(updatedSongs);
    formik.setFieldValue("albumSongs", updatedSongs);
  };

  return (
    <>
      <CRow>
        <CCol lg={12}>
          <form onSubmit={formik.handleSubmit}>
            <CRow>
              <CCol lg={3}>
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
                            <Image src={editIcon} width={20} height={20} alt="edit-icon" />
                          </button>
                          <button
                            type="button"
                            className=""
                            onClick={handleDelete}
                          >
                            <Image src={trashIcon} width={20} height={20} alt="trash-icon" />
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
                    <CCol lg={12} className="mb-3">
                      <div className="grey-input-wrapper no-label">
                        <CFormInput
                          type="text"
                          placeholder="Album Name"
                          name="albumTitle"
                          value={formik.values.albumTitle}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.albumTitle &&
                        formik.errors.albumTitle ? (
                          <div className="error-text">
                            {formik.errors.albumTitle}
                          </div>
                        ) : null}
                      </div>
                    </CCol>
                    <CCol lg={12} className="mb-4">
                      <div className="grey-input-wrapper no-label">
                        <CFormTextarea
                          placeholder="Album Description"
                          name="albumDescription"
                          rows={5}
                          value={formik.values.albumDescription}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        ></CFormTextarea>
                        {formik.touched.albumDescription &&
                        formik.errors.albumDescription ? (
                          <div className="error-text">
                            {formik.errors.albumDescription}
                          </div>
                        ) : null}
                      </div>
                    </CCol>
                    <CCol lg={6} className="mb-4">
                      <div className="grey-input-wrapper no-label">
                        <CFormSelect
                          name="albumLevel"
                          value={formik.values.albumLevel}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        >
                          <option value="" disabled>
                            Subscription Level
                          </option>
                          <option value="1">Level 1</option>
                          <option value="2">Level 2</option>
                          <option value="3">Level 3</option>
                        </CFormSelect>
                        {formik.touched.albumLevel &&
                        formik.errors.albumLevel ? (
                          <div className="error-text">
                            {formik.errors.albumLevel}
                          </div>
                        ) : null}
                      </div>
                    </CCol>
                    <CCol lg={6} className="mb-4">
                      <div className="grey-input-wrapper custom-date-input no-label">
                        <CFormInput
                          type="date"
                          name="albumStartDate"
                          value={formik.values.albumStartDate}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                      {formik.touched.albumStartDate &&
                      formik.errors.albumStartDate ? (
                        <div className="error-text">
                          {formik.errors.albumStartDate}
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
                          name="albumEndDate"
                          value={formik.values.albumEndDate}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                      {formik.touched.albumEndDate &&
                      formik.errors.albumEndDate ? (
                        <div className="error-text">
                          {formik.errors.albumEndDate}
                        </div>
                      ) : null}
                    </CCol>

                    {albumSongs.map((song, index) => (
                      <div key={index} className="single-song-wrapper">
                        <CRow>
                          {/* Song Source and Cover Image */}
                          <CCol lg={3}>
                            {/* Song Cover Image Upload */}
                            {formik.values.albumSongs[index]?.songCoverImage ? (
                              <div className="file-preview position-relative">
                                <Image
                                  src={URL.createObjectURL(
                                    formik.values.albumSongs[index]
                                      .songCoverImage
                                  )}
                                  alt="Song Cover"
                                  className="preview-image"
                                  width={100}
                                  height={100}
                                />
                                <div className="preview-action-btn">
                                  <button
                                    type="button"
                                    className="me-1"
                                    onClick={() =>
                                      formik.setFieldValue(
                                        `albumSongs[${index}].songCoverImage`,
                                        null
                                      )
                                    }
                                  >
                                    <Image
                                      src={trashIcon}
                                      width={16}
                                      height={16}
                                      alt="icons"
                                    ></Image>
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      document
                                        .getElementById(
                                          `songCoverImage-${index}`
                                        )
                                        .click()
                                    }
                                  >
                                    <Image
                                      src={editIcon}
                                      width={16}
                                      height={16}
                                      alt="icons"
                                    ></Image>
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <label
                                htmlFor={`songCoverImage-${index}`}
                                className="upload-label upload-cover-wrapper d-block"
                              >
                                <div className="d-flex h-100 w-100 flex-column justify-content-center text-center align-items-center">
                                  <Image
                                    src={albumSongUploadIcon}
                                    width={40}
                                    height={40}
                                    alt="upload-icons"
                                  ></Image>
                                  <span>Upload Cover Image</span>
                                </div>
                              </label>
                            )}
                            <input
                              id={`songCoverImage-${index}`}
                              type="file"
                              name={`albumSongs[${index}].songCoverImage`}
                              style={{ display: "none" }}
                              onChange={(e) => {
                                formik.setFieldValue(
                                  `albumSongs[${index}].songCoverImage`,
                                  e.target.files[0]
                                );
                              }}
                              onBlur={formik.handleBlur}
                            />
                            {formik.touched.albumSongs?.[index]
                              ?.songCoverImage &&
                              formik.errors.albumSongs?.[index]
                                ?.songCoverImage && (
                                <div className="error-text">
                                  {
                                    formik.errors.albumSongs[index]
                                      .songCoverImage
                                  }
                                </div>
                              )}

                            {/* Song File Upload */}
                            {formik.values.albumSongs[index]?.songSource ? (
                              <div className="file-preview audio-file-preview position-relative mt-3">
                                <span className="inner-name-preview">
                                  {
                                    formik.values.albumSongs[index].songSource
                                      .name
                                  }
                                </span>
                                <div className="preview-action-btn">
                                  <button
                                    type="button"
                                    className="me-1"
                                    onClick={() =>
                                      formik.setFieldValue(
                                        `albumSongs[${index}].songSource`,
                                        null
                                      )
                                    }
                                  >
                                    <Image
                                      src={trashIcon}
                                      width={16}
                                      height={16}
                                      alt="icons"
                                    ></Image>
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      document
                                        .getElementById(`songSource-${index}`)
                                        .click()
                                    }
                                  >
                                    <Image
                                      src={editIcon}
                                      width={16}
                                      height={16}
                                      alt="icons"
                                    ></Image>
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <label
                                htmlFor={`songSource-${index}`}
                                className="upload-label upload-cover-wrapper d-block mt-3"
                              >
                                <div className="d-flex h-100 w-100 flex-column justify-content-center text-center align-items-center">
                                  <Image
                                    src={albumSongUploadIcon}
                                    width={40}
                                    height={40}
                                    alt="upload-icons"
                                  ></Image>
                                  <span>Upload File</span>
                                </div>
                              </label>
                            )}
                            <input
                              id={`songSource-${index}`}
                              type="file"
                              name={`albumSongs[${index}].songSource`}
                              style={{ display: "none" }}
                              onChange={(e) => {
                                formik.setFieldValue(
                                  `albumSongs[${index}].songSource`,
                                  e.target.files[0]
                                );
                              }}
                              onBlur={formik.handleBlur}
                            />
                            {formik.touched.albumSongs?.[index]?.songSource &&
                              formik.errors.albumSongs?.[index]?.songSource && (
                                <div className="error-text">
                                  {formik.errors.albumSongs[index].songSource}
                                </div>
                              )}
                          </CCol>

                          {/* Song Details */}
                          <CCol lg={9}>
                            <CRow>
                              <CCol lg={11}>
                                <CRow>
                                  <CCol lg={12} className="mb-3">
                                    <div className="grey-input-wrapper no-label">
                                      <CFormInput
                                        type="text"
                                        placeholder="Song Name"
                                        name={`albumSongs[${index}].songName`}
                                        value={
                                          formik.values.albumSongs[index]
                                            .songName
                                        }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                      />
                                      {formik.touched.albumSongs?.[index]
                                        ?.songName &&
                                      formik.errors.albumSongs?.[index]
                                        ?.songName ? (
                                        <div className="error-text">
                                          {
                                            formik.errors.albumSongs[index]
                                              .songName
                                          }
                                        </div>
                                      ) : null}
                                    </div>
                                  </CCol>
                                  <CCol lg={12} className="mb-3">
                                    <Select
                                      options={genreOptions}
                                      name={`albumSongs[${index}].songGenre`}
                                      className="customMultiTag"
                                      value={
                                        formik.values.albumSongs[index]
                                          .songGenre
                                      }
                                      onChange={(selectedOptions) =>
                                        formik.setFieldValue(
                                          `albumSongs[${index}].songGenre`,
                                          selectedOptions
                                        )
                                      }
                                      onBlur={() =>
                                        formik.setFieldTouched(
                                          `albumSongs[${index}].songGenre`,
                                          true
                                        )
                                      }
                                      placeholder="Select Genre"
                                      isMulti // Allow multiple selections
                                    />
                                    {formik.touched.albumSongs?.[index]
                                      ?.songGenre &&
                                    formik.errors.albumSongs?.[index]
                                      ?.songGenre ? (
                                      <div className="error-text">
                                        {
                                          formik.errors.albumSongs[index]
                                            .songGenre
                                        }
                                      </div>
                                    ) : null}
                                  </CCol>
                                  <CCol lg={6} className="mb-3">
                                    <div className="grey-input-wrapper no-label">
                                      <CFormInput
                                        type="text"
                                        placeholder="Song ISRC"
                                        name={`albumSongs[${index}].songCode`}
                                        value={
                                          formik.values.albumSongs[index]
                                            .songCode
                                        }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                      />
                                      {formik.touched.albumSongs?.[index]
                                        ?.songCode &&
                                      formik.errors.albumSongs?.[index]
                                        ?.songCode ? (
                                        <div className="error-text">
                                          {
                                            formik.errors.albumSongs[index]
                                              .songCode
                                          }
                                        </div>
                                      ) : null}
                                    </div>
                                  </CCol>
                                  <CCol lg={6} className="mb-3">
                                    <div className="grey-input-wrapper no-label">
                                      <CFormInput
                                        type="date"
                                        name={`albumSongs[${index}].songReleseDate`}
                                        value={
                                          formik.values.albumSongs[index]
                                            .songReleseDate
                                        }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                      />
                                      {formik.touched.albumSongs?.[index]
                                        ?.songReleseDate &&
                                      formik.errors.albumSongs?.[index]
                                        ?.songReleseDate ? (
                                        <div className="error-text">
                                          {
                                            formik.errors.albumSongs[index]
                                              .songReleseDate
                                          }
                                        </div>
                                      ) : null}
                                    </div>
                                  </CCol>
                                  <CCol lg={12} className="mb-4">
                                    <div className="grey-input-wrapper no-label">
                                      <CFormTextarea
                                        placeholder="Song Description"
                                        name={`albumSongs[${index}].songDesc`}
                                        rows={5}
                                        value={
                                          formik.values.albumSongs[index]
                                            .songDesc
                                        }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                      ></CFormTextarea>
                                      {formik.touched.albumSongs?.[index]
                                        ?.songDesc &&
                                      formik.errors.albumSongs?.[index]
                                        ?.songDesc ? (
                                        <div className="error-text">
                                          {
                                            formik.errors.albumSongs[index]
                                              .songDesc
                                          }
                                        </div>
                                      ) : null}
                                    </div>
                                  </CCol>
                                  <CCol lg={4} className="mb-3">
                                    <div className="grey-input-wrapper no-label">
                                      <CFormInput
                                        type="text"
                                        placeholder="Record"
                                        name={`albumSongs[${index}].SongRecord`}
                                        value={
                                          formik.values.albumSongs[index]
                                            .SongRecord
                                        }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                      />
                                      {formik.touched.albumSongs?.[index]
                                        ?.SongRecord &&
                                      formik.errors.albumSongs?.[index]
                                        ?.SongRecord ? (
                                        <div className="error-text">
                                          {
                                            formik.errors.albumSongs[index]
                                              .SongRecord
                                          }
                                        </div>
                                      ) : null}
                                    </div>
                                  </CCol>
                                  <CCol lg={4} className="mb-3">
                                    <div className="grey-input-wrapper no-label">
                                      <CFormInput
                                        type="text"
                                        placeholder="Producer"
                                        name={`albumSongs[${index}].SongProducer`}
                                        value={
                                          formik.values.albumSongs[index]
                                            .SongProducer
                                        }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                      />
                                      {formik.touched.albumSongs?.[index]
                                        ?.SongProducer &&
                                      formik.errors.albumSongs?.[index]
                                        ?.SongProducer ? (
                                        <div className="error-text">
                                          {
                                            formik.errors.albumSongs[index]
                                              .SongProducer
                                          }
                                        </div>
                                      ) : null}
                                    </div>
                                  </CCol>
                                  <CCol lg={4} className="mb-3">
                                    <div className="grey-input-wrapper no-label">
                                      <CFormInput
                                        type="text"
                                        placeholder="Writer/Composer"
                                        name={`albumSongs[${index}].songWriter`}
                                        value={
                                          formik.values.albumSongs[index]
                                            .songWriter
                                        }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                      />
                                      {formik.touched.albumSongs?.[index]
                                        ?.songWriter &&
                                      formik.errors.albumSongs?.[index]
                                        ?.songWriter ? (
                                        <div className="error-text">
                                          {
                                            formik.errors.albumSongs[index]
                                              .songWriter
                                          }
                                        </div>
                                      ) : null}
                                    </div>
                                  </CCol>
                                  <CCol lg={4} className="mb-3">
                                    <div className="grey-input-wrapper no-label">
                                      <CFormInput
                                        type="text"
                                        placeholder="Featured/Guest Artist"
                                        name={`albumSongs[${index}].SongArtist`}
                                        value={
                                          formik.values.albumSongs[index]
                                            .SongArtist
                                        }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                      />
                                      {formik.touched.albumSongs?.[index]
                                        ?.SongArtist &&
                                      formik.errors.albumSongs?.[index]
                                        ?.SongArtist ? (
                                        <div className="error-text">
                                          {
                                            formik.errors.albumSongs[index]
                                              .SongArtist
                                          }
                                        </div>
                                      ) : null}
                                    </div>
                                  </CCol>
                                  <CCol lg={4} className="mb-3">
                                    <div className="grey-input-wrapper no-label">
                                      <CFormInput
                                        type="text"
                                        placeholder="Mixing Engineer"
                                        name={`albumSongs[${index}].SongMixingEngineer`}
                                        value={
                                          formik.values.albumSongs[index]
                                            .SongMixingEngineer
                                        }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                      />
                                      {formik.touched.albumSongs?.[index]
                                        ?.SongMixingEngineer &&
                                      formik.errors.albumSongs?.[index]
                                        ?.SongMixingEngineer ? (
                                        <div className="error-text">
                                          {
                                            formik.errors.albumSongs[index]
                                              .SongMixingEngineer
                                          }
                                        </div>
                                      ) : null}
                                    </div>
                                  </CCol>
                                  <CCol lg={4} className="mb-3">
                                    <div className="grey-input-wrapper no-label">
                                      <CFormInput
                                        type="text"
                                        placeholder="Mastering Engineer"
                                        name={`albumSongs[${index}].SongMasterEngineer`}
                                        value={
                                          formik.values.albumSongs[index]
                                            .SongMasterEngineer
                                        }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                      />
                                      {formik.touched.albumSongs?.[index]
                                        ?.SongMasterEngineer &&
                                      formik.errors.albumSongs?.[index]
                                        ?.SongMasterEngineer ? (
                                        <div className="error-text">
                                          {
                                            formik.errors.albumSongs[index]
                                              .SongMasterEngineer
                                          }
                                        </div>
                                      ) : null}
                                    </div>
                                  </CCol>
                                  <CCol lg={12} className="mb-3">
                                    <div className="grey-input-wrapper no-label">
                                      <CFormInput
                                        type="text"
                                        placeholder="Perma Links"
                                        readOnly
                                        name={`albumSongs[${index}].SongPermalink`}
                                        value={
                                          formik.values.albumSongs[index]
                                            .songName
                                        }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                      />
                                      {formik.touched.albumSongs?.[index]
                                        ?.songName &&
                                      formik.errors.albumSongs?.[index]
                                        ?.songName ? (
                                        <div className="error-text">
                                          {
                                            formik.errors.albumSongs[index]
                                              .songName
                                          }
                                        </div>
                                      ) : null}
                                    </div>
                                  </CCol>
                                </CRow>
                              </CCol>
                              <CCol lg={1} className="text-end">
                                <button
                                type="button"
                                  onClick={() => handleRemoveSong(index)}
                                  className="transparent-button text-end"
                                >
                                  <Image
                                    src={minusIcon}
                                    width={18}
                                    height={18}
                                    alt="minus-icon"
                                  ></Image>
                                </button>
                              </CCol>
                            </CRow>
                          </CCol>
                        </CRow>
                      </div>
                    ))}
                    <CCol lg={12} className="mb-3">
                      <div className="create-album-link text-end">
                        <button type="button" onClick={handleAddSong}>
                          <Image
                            src={plusIcon}
                            width={16}
                            height={16}
                            alt="plus-icon"
                            className="me-1"
                          />
                          Add More Songs
                        </button>
                      </div>
                    </CCol>

                    <CRow className="justify-content-end">
                      <CCol lg={9}>
                        <CRow>
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
                          <CCol lg={12} className="mb-3">
                            <div className="d-flex">
                              <CFormCheck id="flexCheckDefault" />
                              <label
                                htmlFor="flexCheckDefault"
                                className="custom-label3 ms-3"
                              >
                                I confirm that I am the rightful owner of this
                                song and all associated rights, and I have full
                                authority to upload and distribute this content
                                on this platform.
                              </label>
                            </div>
                          </CCol>
                          <CRow className="justify-content-center mt-4">
                            <CCol lg={6}>
                              <button
                                type="submit"
                                className="theme-primary-btn w-100 btn-dashboard"
                                style={{ padding: "11px 0px" }}
                              >
                                Upload
                              </button>
                            </CCol>
                          </CRow>
                        </CRow>
                      </CCol>
                    </CRow>
                  </CRow>
                </div>
              </CCol>
            </CRow>
          </form>
        </CCol>
      </CRow>
    </>
  );
}

export default CreateSong;
