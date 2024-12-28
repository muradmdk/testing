"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import "@/app/styles/home/artistAcc.css";
import { CRow, CCol } from "@coreui/react";
import Image from "next/image";
import uploadIcon from "@/app/assets/acc-uploadsvg.svg";
import delIcon from "@/app/assets/trashbin.png";
import editIcon from "@/app/assets/edit.png";

function ArtistAcc() {
  const [bannerPreview, setBannerPreview] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);

  const genreOptions = [
    { value: "pop", label: "Pop" },
    { value: "rock", label: "Rock" },
    { value: "jazz", label: "Jazz" },
    { value: "hiphop", label: "Hip Hop" },
    { value: "classical", label: "Classical" },
  ];

  const InitialValues = {
    bannerImage: null,
    profileImage: null,
    brandName: "",
    location: "",
    website: "",
    tags: [],
    desc: "",
  };

  const ValidationSchema = Yup.object({
    bannerImage: Yup.mixed()
      .required("Banner image is required")
      .test(
        "fileType",
        "Only image files are allowed",
        (value) =>
          !value || (value && ["image/jpeg", "image/png"].includes(value.type))
      ),
    profileImage: Yup.mixed()
      .required("Profile image is required")
      .test(
        "fileType",
        "Only image files are allowed",
        (value) =>
          !value || (value && ["image/jpeg", "image/png"].includes(value.type))
      ),
    brandName: Yup.string().required("Brand name is required"),
    location: Yup.string().required("Location is required"),
    website: Yup.string()
      .url("Invalid website URL format")
      .required("Website is required"),
    tags: Yup.array()
      .of(
        Yup.object({
          value: Yup.string().required(),
          label: Yup.string().required(),
        })
      )
      .min(1, "At least one tag is required")
      .required("Tags are required"),
    desc: Yup.string()
      .max(500, "Description cannot exceed 500 characters")
      .required("Description is required"),
  });

  const handleImageChange = (event, setFieldValue, setPreview) => {
    const file = event.target.files[0];
    if (file) {
      setFieldValue(event.target.name, file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const removeImage = (setFieldValue, setPreview, fieldName) => {
    setFieldValue(fieldName, null);
    setPreview(null);
  };

  const handleSubmit = (values) => {
    console.log("Form values:", values);

    const formData = new FormData();

    // Append file fields
    if (values.bannerImage) {
      formData.append("bannerImage", values.bannerImage);
    }
    if (values.profileImage) {
      formData.append("profileImage", values.profileImage);
    }

    // Append other fields
    formData.append("brandName", values.brandName);
    formData.append("location", values.location);
    formData.append("website", values.website);
    formData.append("tags", values.tags.map((tag) => tag.value).join(","));
    formData.append("desc", values.desc);

    // Debugging: Log FormData entries
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
  };

  return (
    <div className="artist-acc-form">
      <Formik
        initialValues={InitialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <CRow>
              <CCol lg={12}>
                <div className="position-relative">
                  <div className="media-wrapper">
                    <div className="form-group">
                      {!bannerPreview ? (
                        <label className="upload-label d-block">
                          <div className="acc-media-content-wrapper">
                            <div>
                              <Image
                                src={uploadIcon}
                                width={50}
                                height={50}
                                alt="acc-banner-upload"
                              ></Image>
                              <p className="mb-0">Add Cover Image/Video</p>
                            </div>
                          </div>
                          <input
                            type="file"
                            name="bannerImage"
                            accept="image/jpeg, image/png"
                            onChange={(event) =>
                              handleImageChange(
                                event,
                                setFieldValue,
                                setBannerPreview
                              )
                            }
                            hidden
                          />
                        </label>
                      ) : (
                        <div className="image-preview banner-preview position-relative">
                          <Image
                            src={bannerPreview}
                            width={100}
                            height={100}
                            alt="Banner Preview"
                            className="preview-image-here"
                          />
                          <div className="image-controls">
                            <button
                              type="button"
                              className="del-control"
                              onClick={() =>
                                removeImage(
                                  setFieldValue,
                                  setBannerPreview,
                                  "bannerImage"
                                )
                              }
                            >
                              <Image
                                src={delIcon}
                                height={24}
                                width={24}
                                alt="del-icon"
                              ></Image>
                            </button>
                            <label className="edit-control">
                              <Image
                                src={editIcon}
                                height={24}
                                width={24}
                                alt="edit-icon"
                              ></Image>
                              <input
                                type="file"
                                name="bannerImage"
                                accept="image/jpeg, image/png"
                                onChange={(event) =>
                                  handleImageChange(
                                    event,
                                    setFieldValue,
                                    setBannerPreview
                                  )
                                }
                                hidden
                              />
                            </label>
                          </div>
                        </div>
                      )}
                      <ErrorMessage
                        name="bannerImage"
                        component="div"
                        className="error text-end"
                      />
                    </div>
                  </div>
                  <div className="profile-placeholder-wrapper">
                    <div className="form-group">
                      {!profilePreview ? (
                        <label className="upload-label">
                          <div className="acc-media-content-wrapper profile-preview">
                            <div>
                              <Image
                                src={uploadIcon}
                                width={46}
                                height={46}
                                alt="acc-banner-upload"
                              ></Image>
                              <p className="mb-0">Profile Picture</p>
                            </div>
                          </div>
                          <input
                            type="file"
                            name="profileImage"
                            accept="image/jpeg, image/png"
                            onChange={(event) =>
                              handleImageChange(
                                event,
                                setFieldValue,
                                setProfilePreview
                              )
                            }
                            hidden
                          />
                        </label>
                      ) : (
                        <div className="image-preview profile-prwview-wrapper position-relative d-inline-block">
                          <Image
                            src={profilePreview}
                            alt="Profile Preview"
                            width={160}
                            height={180}
                            className="position-relative"
                          />
                          <div className="image-controls">
                            <button
                              type="button"
                              className="del-control"
                              onClick={() =>
                                removeImage(
                                  setFieldValue,
                                  setProfilePreview,
                                  "profileImage"
                                )
                              }
                            >
                              <Image
                                src={delIcon}
                                height={24}
                                width={24}
                                alt="del-icon"
                              ></Image>
                            </button>
                            <label className="edit-control">
                              <Image
                                src={editIcon}
                                height={24}
                                width={24}
                                alt="edit-icon"
                              ></Image>
                              <input
                                type="file"
                                name="profileImage"
                                accept="image/jpeg, image/png"
                                onChange={(event) =>
                                  handleImageChange(
                                    event,
                                    setFieldValue,
                                    setProfilePreview
                                  )
                                }
                                hidden
                              />
                            </label>
                          </div>
                        </div>
                      )}
                      <ErrorMessage
                        name="profileImage"
                        component="div"
                        className="error"
                      />
                    </div>
                  </div>
                </div>
              </CCol>
            </CRow>
            <div className="form-inputs-wrapper">
              <CRow>
                <CCol lg={12}>
                  <div className="form-group">
                    <label>Artist / Brand Name</label>
                    <Field type="text" name="brandName" placeholder="Enter Name" />
                    <ErrorMessage
                      name="brandName"
                      component="div"
                      className="error"
                    />
                  </div>
                </CCol>
                <CCol lg={12}>
                  <div className="form-group">
                    <label>Location</label>
                    <Field type="text" name="location" placeholder="Enter Your Location" />
                    <ErrorMessage
                      name="location"
                      component="div"
                      className="error"
                    />
                  </div>
                </CCol>
                <CCol lg={12}>
                  <div className="form-group">
                    <label>Website</label>
                    <Field type="text" name="website" placeholder="Enter Website Link"  />
                    <ErrorMessage
                      name="website"
                      component="div"
                      className="error"
                    />
                  </div>
                </CCol>
                <CCol lg={12}>
                  <div className="form-group">
                    <label>Tags</label>
                    <Select
                      options={genreOptions}
                      isMulti
                      name="tags"
                      value={values.tags}
                      onChange={(selectedOptions) =>
                        setFieldValue("tags", selectedOptions || [])
                      }
                    />
                    <ErrorMessage
                      name="tags"
                      component="div"
                      className="error"
                    />
                  </div>
                </CCol>
                <CCol lg={12}>
                  <div className="form-group">
                    <label>Description</label>
                    <Field as="textarea" name="desc"  placeholder="Enter Description" rows={4} />
                    <ErrorMessage
                      name="desc"
                      component="div"
                      className="error"
                    />
                  </div>
                </CCol>
                <CCol lg={12}>
                  <div>
                    <button type="submit" className="themeRedBtn">Create Artist Account</button>
                  </div>
                </CCol>
              </CRow>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ArtistAcc;
