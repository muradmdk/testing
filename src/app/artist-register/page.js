"use client";
import React, { useState } from "react";
import "@/app/styles/auth/artistRegister.css";
import {
  CButton,
  CCol,
  CContainer,
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
import { useRouter } from "next/navigation";
import { useRegisterArtistMutation,useGetGenresQuery } from "@/app/redux/web/ArtistRegisterApiSlice";

function ArtistRegister() {
  const [formStep, setFormStep] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputType, setInputType] = useState(false);
  const [profileImagePreview, setProfileImagePreview] = useState(null);
  const [coverImagePreview, setCoverImagePreview] = useState(null);
  const [registerArtist, { isLoading }] = useRegisterArtistMutation();
  const { data: genres, error, isLoading: genresLoading } = useGetGenresQuery();
  const router = useRouter();

  const handleImageChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImagePreview(imageURL);
      setFieldValue("profile_picture", file);
    }
  };

  const handleCoverImageChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setCoverImagePreview(imageURL);
      setFieldValue("cover_picture", file);
    }
  };

  const handleNextFormStep = () => setFormStep(2);
  const handlePrevFormStep = () => setFormStep(1);
  
  const options = genres
    ? genres.map((genre) => ({ value: genre.id, label: genre.name }))
    : [];

  const handleTagChange = (options, setFieldValue) => {
    setSelectedOptions(options);
    setFieldValue("tags_id", options);
  };

  const validationSchema = Yup.object().shape({
    artist_name: Yup.string().required("Artist / Brand Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    name: Yup.string().required("Name is required"),
    gender: Yup.string().required("Gender is required"),
    description: Yup.string().required("Description is required"),
    address: Yup.string().required("Location is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    profile_picture: Yup.mixed().required("Profile Picture is required"),
    cover_picture: Yup.mixed().required("Cover Image is required"),
    tags_id: Yup.array()
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
                        artist_name: "",
                        email: "",
                        name: "",
                        gender: "",
                        description: "",
                        address: "",
                        password: "",
                        profile_picture: null,
                        cover_picture: null,
                        tags_id: [],
                      }}
                      validationSchema={validationSchema}
                      onSubmit={async (values, { setSubmitting }) => {
                        try {
                          const formData = new FormData();
                          Object.entries(values).forEach(([key, value]) => {
                            if (key === "tags_id") {
                              value.forEach((tag) =>
                                formData.append(key, tag.value)
                              );
                            } else {
                              formData.append(key, value);
                            }
                          });

                          await registerArtist(formData).unwrap();
                          toast.success(
                            "Registration successful! Redirecting to login..."
                          );
                          router.push("/");
                        } catch (error) {
                          toast.error(
                            error?.data?.message ||
                              "Something went wrong. Please try again."
                          );
                        } finally {
                          setSubmitting(false);
                        }
                      }}
                    >
                      {({
                        setFieldValue,
                        validateForm,
                        handleSubmit,
                        setSubmitting,
                      }) => (
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            validateForm().then((errors) => {
                              if (Object.keys(errors).length > 0) {
                                Object.values(errors).forEach((error) =>
                                  toast.error(error)
                                );
                                setSubmitting(false);
                              } else {
                                handleSubmit(e);
                              }
                            });
                          }}
                        >
                          {formStep === 1 ? (
                            <>
                              <div className="auth-form-input">
                                <CFormLabel htmlFor="artist_name">
                                  Artist / Brand Name
                                </CFormLabel>
                                <Field
                                  as={CFormInput}
                                  name="artist_name"
                                  id="artist_name"
                                  placeholder="Enter name"
                                />
                                <ErrorMessage
                                  name="artist_name"
                                  component="div"
                                  className="text-danger"
                                />
                              </div>
                              <div className="auth-form-input">
                                <CFormLabel htmlFor="email">Email</CFormLabel>
                                <Field
                                  as={CFormInput}
                                  type="email"
                                  name="email"
                                  id="email"
                                  placeholder="username@gmail.com"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className="text-danger"
                                />
                              </div>
                              <div className="auth-form-input">
                                <CFormLabel htmlFor="name">Name</CFormLabel>
                                <Field
                                  as={CFormInput}
                                  name="name"
                                  id="name"
                                  placeholder="Enter your name"
                                />
                                <ErrorMessage
                                  name="name"
                                  component="div"
                                  className="text-danger"
                                />
                              </div>
                              <div className="auth-form-input">
                                <CFormLabel>Gender</CFormLabel>
                                <Field
                                  as="select"
                                  name="gender"
                                  className="form-control"
                                >
                                  <option value="" disabled>
                                    Select Gender
                                  </option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                  <option value="Other">Other</option>
                                </Field>
                                <ErrorMessage
                                  name="gender"
                                  component="div"
                                  className="text-danger"
                                />
                              </div>
                              <div className="auth-form-input">
                                <CFormLabel htmlFor="description">
                                  Description
                                </CFormLabel>
                                <Field
                                  as={CFormTextarea}
                                  name="description"
                                  id="description"
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
                                    <CFormLabel htmlFor="profilePic">
                                      Profile Picture
                                    </CFormLabel>
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
                                    name="profile_picture"
                                    component="div"
                                    className="text-danger"
                                  />
                                </div>

                                <div className="mb-3">
                                  <div className="auth-form-input">
                                    <CFormLabel htmlFor="coverPic">
                                      Cover Image
                                    </CFormLabel>
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
                                    name="cover_picture"
                                    component="div"
                                    className="text-danger"
                                  />
                                </div>
                              </div>

                              <div className="auth-form-input">
                                <CFormLabel htmlFor="address">
                                  Location
                                </CFormLabel>
                                <Field
                                  as={CFormInput}
                                  name="address"
                                  id="address"
                                  placeholder="Enter Your Location"
                                />
                                <ErrorMessage
                                  name="address"
                                  component="div"
                                  className="text-danger"
                                />
                              </div>

                              <div className="auth-form-input">
                                <CFormLabel htmlFor="tags_id">
                                  Genre/Tags
                                </CFormLabel>
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
                                  name="tags_id"
                                  component="div"
                                  className="text-danger"
                                />
                              </div>

                              <div className="auth-form-input position-relative">
                                <CFormLabel htmlFor="password">
                                  Password
                                </CFormLabel>
                                <Field
                                  as={CFormInput}
                                  type={inputType ? "text" : "password"}
                                  name="password"
                                  id="password"
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
                                className="theme-primary-btn w-100 auth-btn mt-3"
                                disabled={isLoading}
                              >
                                {isLoading ? "Signing up..." : "Sign up"}
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
                        </form>
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
