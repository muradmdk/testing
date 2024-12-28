"use client";
import React, { useState } from "react";
import "@/app/styles/auth/artistRegister.css";
import {
  CButton,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from "@coreui/react";
import Image from "next/image";
import Link from "next/link";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import pIcon from "@/app/assets/auth/eye-hide.svg";
import { toast } from "react-hot-toast";

function ArtistRegister() {
  const [formStep, setFormStep] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputType, setInputType] = useState(false);
  const [profileImagePreview, setProfileImagePreview] = useState(null);
  const [coverImagePreview, setCoverImagePreview] = useState(null);

  const handleImageChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImagePreview(imageURL);
      setFieldValue("profilePicture", file);
    }
  };

  const handleCoverImageChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setCoverImagePreview(imageURL);
      setFieldValue("coverImage", file);
    }
  };

  const handleNextFormStep = () => setFormStep(2);
  const handlePrevFormStep = () => setFormStep(1);

  const options = [
    { value: "Pop Music", label: "Pop Music" },
    { value: "Pop Singing", label: "Pop Singing" },
    { value: "Slowmo", label: "Slowmo" },
    { value: "Part Song", label: "Part Song" },
  ];

  const handleTagChange = (options, setFieldValue) => {
    setSelectedOptions(options);
    setFieldValue("tags", options);
  };

  const validationSchema = Yup.object().shape({
    artistName: Yup.string().required("Artist / Brand Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    location: Yup.string().required("Location is required"),
    website: Yup.string()
      .url("Invalid URL format")
      .required("Website is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    profilePicture: Yup.mixed().required("Profile Picture is required"),
    coverImage: Yup.mixed().required("Cover Image is required"),
    tags: Yup.array()
      .min(1, "At least one genre/tag is required")
      .required("Tags are required"),
  });

  return (
    <section className="artist-register-wrapper">
      <CContainer>
        <CRow>
          <CCol lg={12}>
            <div className="artist-auth-card">
              <CRow>
                <CCol lg={6}>
                  <div className="auth-inner-card">
                    {formStep === 2 && (
                      <CButton
                        className="p-0 mb-3"
                        onClick={handlePrevFormStep}
                      >
                        <Image
                          src={"/assets/artistRegister/back-arrow.svg"}
                          width={40}
                          height={37}
                          alt="back"
                        />
                      </CButton>
                    )}
                    <h2>Create Artist Account</h2>
                    <Formik
                      initialValues={{
                        artistName: "",
                        email: "",
                        name: "",
                        description: "",
                        location: "",
                        website: "",
                        password: "",
                        profilePicture: null,
                        coverImage: null,
                        tags: [],
                      }}
                      validationSchema={validationSchema}
                      onSubmit={async (values, { setSubmitting }) => {
                        try {
                          await validationSchema.validate(values, {
                            abortEarly: false,
                          });
                          console.log("Form Submitted", values);
                          toast.success("Form submitted successfully!");
                        } catch (validationErrors) {
                          validationErrors.inner.forEach((error) => {
                            toast.error(error.message);
                          });
                          setSubmitting(false);
                        }
                      }}
                    >
                      {({ setFieldValue, handleSubmit }) => (
                        <CForm onSubmit={handleSubmit}>
                          {formStep === 1 ? (
                            <>
                              <div className="auth-form-input">
                                <CFormLabel>Artist / Brand Name</CFormLabel>
                                <Field
                                  as={CFormInput}
                                  name="artistName"
                                  placeholder="Enter name"
                                />
                                <ErrorMessage
                                  name="artistName"
                                  component="div"
                                  className="text-danger"
                                />
                              </div>
                              <div className="auth-form-input">
                                <CFormLabel>Email</CFormLabel>
                                <Field
                                  as={CFormInput}
                                  type="email"
                                  name="email"
                                  placeholder="username@gmail.com"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className="text-danger"
                                />
                              </div>
                              <div className="auth-form-input">
                                <CFormLabel>Name</CFormLabel>
                                <Field
                                  as={CFormInput}
                                  name="name"
                                  placeholder="Enter your name"
                                />
                                <ErrorMessage
                                  name="name"
                                  component="div"
                                  className="text-danger"
                                />
                              </div>
                              <div className="auth-form-input">
                                <CFormLabel>Description</CFormLabel>
                                <Field
                                  as={CFormTextarea}
                                  name="description"
                                  rows={3}
                                  placeholder="Enter Description"
                                />
                                <ErrorMessage
                                  name="description"
                                  component="div"
                                  className="text-danger"
                                />
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="mb-3">
                                  <div className="auth-form-input">
                                    <CFormLabel>Profile Picture</CFormLabel>
                                  </div>
                                  <label
                                    htmlFor="profilePic"
                                    className="picture-label"
                                  >
                                    <Image
                                      src={
                                        profileImagePreview ||
                                        "/assets/artistRegister/upload-placeholder.svg"
                                      }
                                      width={130}
                                      height={118}
                                      alt="upload icon"
                                    />
                                  </label>
                                  <input
                                    type="file"
                                    id="profilePic"
                                    hidden
                                    onChange={(e) =>
                                      handleImageChange(e, setFieldValue)
                                    }
                                  />
                                  <ErrorMessage
                                    name="profilePicture"
                                    component="div"
                                    className="text-danger"
                                  />
                                </div>

                                <div className="mb-3">
                                  <div className="auth-form-input">
                                    <CFormLabel>Cover Image</CFormLabel>
                                  </div>
                                  <label
                                    htmlFor="coverPic"
                                    className="picture-label"
                                  >
                                    <Image
                                      src={
                                        coverImagePreview ||
                                        "/assets/artistRegister/upload-placeholder.svg"
                                      }
                                      width={130}
                                      height={118}
                                      alt="upload icon"
                                    />
                                  </label>
                                  <input
                                    type="file"
                                    id="coverPic"
                                    hidden
                                    onChange={(e) =>
                                      handleCoverImageChange(e, setFieldValue)
                                    }
                                  />
                                  <ErrorMessage
                                    name="coverImage"
                                    component="div"
                                    className="text-danger"
                                  />
                                </div>
                              </div>

                              <div className="auth-form-input">
                                <CFormLabel>Location</CFormLabel>
                                <Field
                                  as={CFormInput}
                                  name="location"
                                  placeholder="Enter Your Location"
                                />
                                <ErrorMessage
                                  name="location"
                                  component="div"
                                  className="text-danger"
                                />
                              </div>

                              <div className="auth-form-input">
                                <CFormLabel>Website</CFormLabel>
                                <Field
                                  as={CFormInput}
                                  name="website"
                                  placeholder="Enter Your Website"
                                />
                                <ErrorMessage
                                  name="website"
                                  component="div"
                                  className="text-danger"
                                />
                              </div>

                              <div className="auth-form-input">
                                <CFormLabel>Genre/Tags</CFormLabel>
                                <Select
                                  isMulti
                                  options={options}
                                  value={selectedOptions}
                                  onChange={(option) =>
                                    handleTagChange(option, setFieldValue)
                                  }
                                  placeholder="Select Genre/Tags"
                                  closeMenuOnSelect={false}
                                  className="select-input tag-select-wrapper"
                                  classNamePrefix="select"
                                />
                                <ErrorMessage
                                  name="tags"
                                  component="div"
                                  className="text-danger"
                                />
                              </div>

                              <div className="auth-form-input position-relative">
                                <CFormLabel>Password</CFormLabel>
                                <Field
                                  as={CFormInput}
                                  type={inputType ? "text" : "password"}
                                  name="password"
                                  placeholder="Password"
                                  className="pe-5"
                                />
                                <Link
                                  href="#"
                                  className="toggle-password"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setInputType(!inputType);
                                  }}
                                >
                                  <Image
                                    src={pIcon}
                                    width={16}
                                    height={16}
                                    alt="icon"
                                  />
                                </Link>
                                <ErrorMessage
                                  name="password"
                                  component="div"
                                  className="text-danger"
                                />
                              </div>

                              <CButton
                                type="submit"
                                className="theme-primary-btn w-100 mt-3"
                              >
                                Submit
                              </CButton>

                              <p className="mt-3 fs-14 fw-400 text-center mb-0">
                                Already have an account?
                                <Link
                                  href="/"
                                  className="font-lato fw-600 register-link fs-14 fs-700 ps-1"
                                  style={{ color: "#EF5660" }}
                                >
                                  Login Now
                                </Link>
                              </p>
                            </>
                          )}
                        </CForm>
                      )}
                    </Formik>

                    {formStep === 1 && (
                      <>
                        <CButton
                          className="theme-primary-btn w-100 mt-3"
                          onClick={handleNextFormStep}
                        >
                          Next
                        </CButton>
                        <p className="mt-3 fs-14 fw-400 text-center mb-0">
                          Already have an account?
                          <Link
                            href="/"
                            className="font-lato fw-600 register-link fs-14 fs-700 ps-1"
                            style={{ color: "#EF5660" }}
                          >
                            Login Now
                          </Link>
                        </p>
                      </>
                    )}
                  </div>
                </CCol>
              </CRow>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </section>
  );
}

export default ArtistRegister;
