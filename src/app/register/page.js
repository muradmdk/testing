"use client";
import React, { useContext, useEffect, useState } from "react";
import "@/app/styles/auth/auth.css";
import {
  CButton,
  CCol,
  CContainer,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CRow,
} from "@coreui/react";
import Image from "next/image";
import Link from "next/link";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useRegisterUserMutation } from "@/app/redux/web/userRegisterApiSlice";

//--- images
import pIcon from "@/app/assets/auth/eye-hide.svg";
import fbIcon from "@/app/assets/auth/fb.svg";
import gIcon from "@/app/assets/auth/google.svg";
import aIcon from "@/app/assets/auth/apple.svg";
import { toast } from "react-hot-toast";

function RegisterPage() {
  const [inputType, setInputType] = useState(false);
  const router = useRouter();
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    date_of_birth: Yup.date()
      .required("Date is required")
      .test("is-18", "You must be at least 18 years old", (value) => {
        const today = new Date();
        const birthDate = new Date(value);
        const age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        return (
          age > 18 ||
          (age === 18 && m >= 0 && today.getDate() >= birthDate.getDate())
        );
      }),
    password: Yup.string().required("Password is required"),
    gender: Yup.string().required("Gender is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    date_of_birth: "",
    password: "",
    gender: "",
    marketingConsent: "no",
  };

  const handleSubmit = async (values, { resetForm }) => {
    const formData = {
      ...values,
      marketingConsent: values.marketingConsent ? "yes" : "no",
    };
    try {
      const response = await registerUser(values).unwrap();
      if (response.result === "success") {
        toast.success("Registration successful!");
        resetForm();
        router.push("/");
      }
    } catch (error) {
      toast.error(
        error?.data?.message || "Failed to register. Please try again."
      );
    }
  };

  return (
    <section className="register-wrapper">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <CContainer className="h-100">
            <CRow className="justify-content-center align-items-center h-100">
              <CCol lg={10}>
                <CRow className="align-items-center justify-content-center">
                  <CCol lg={10}>
                    <div className="auth-card register-card">
                      <h2 className="auth-card-title font-lato mb-4 fs-26 fw-600">
                        Create Subscriber Account
                      </h2>

                      {/* Use handleSubmit directly on the form */}
                      <CForm onSubmit={handleSubmit}>
                        <CRow>
                          <CCol lg={6} className="mb-2">
                            <div className="input-wrapper">
                              <CRow className="mb-2">
                                <CCol lg={12}>
                                  <CFormLabel className="font-medium-family fs-16 fw-500">
                                    Name
                                  </CFormLabel>
                                </CCol>
                              </CRow>
                              <Field
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                as={CFormInput}
                              />
                              <div className="text-start">
                                <ErrorMessage
                                  name="name"
                                  component="div"
                                  className="error-msg"
                                />
                              </div>
                            </div>
                          </CCol>
                          <CCol lg={6} className="mb-2">
                            <div className="input-wrapper">
                              <CRow className="mb-2">
                                <CCol lg={12}>
                                  <CFormLabel className="font-medium-family fs-16 fw-500">
                                    Email
                                  </CFormLabel>
                                </CCol>
                              </CRow>
                              <Field
                                name="email"
                                type="email"
                                placeholder="username@gmail.com"
                                as={CFormInput}
                              />
                              <div className="text-start">
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className="error-msg"
                                />
                              </div>
                            </div>
                          </CCol>
                          <CCol lg={6} className="mb-2">
                            <div className="input-wrapper">
                              <CRow className="mb-2">
                                <CCol lg={12}>
                                  <CFormLabel className="font-medium-family fs-16 fw-500">
                                    Date Of Birth
                                  </CFormLabel>
                                </CCol>
                              </CRow>
                              <Field
                                name="date_of_birth"
                                type="date"
                                as={CFormInput}
                              />
                              <div className="text-start">
                                <ErrorMessage
                                  name="date_of_birth"
                                  component="div"
                                  className="error-msg"
                                />
                              </div>
                            </div>
                          </CCol>
                          <CCol lg={6} className="mb-3">
                            <div className="input-wrapper position-relative">
                              <CRow className="mb-2">
                                <CCol lg={12}>
                                  <CFormLabel className="font-medium-family fs-16 fw-500">
                                    Password
                                  </CFormLabel>
                                </CCol>
                              </CRow>
                              <Field
                                name="password"
                                type={inputType ? "text" : "password"}
                                placeholder="Password"
                                as={CFormInput}
                              />
                              <div className="text-start">
                                <ErrorMessage
                                  name="password"
                                  component="div"
                                  className="error-msg"
                                />
                              </div>
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
                            </div>
                          </CCol>
                          <CCol lg={12} className="mb-3">
                            <div className="input-wrapper">
                              <CRow className="mb-2">
                                <CCol lg={12}>
                                  <CFormLabel className="font-medium-family fs-16 fw-500 mb-0">
                                    Gender
                                  </CFormLabel>
                                </CCol>
                              </CRow>
                              <CRow>
                                <CCol lg={12}>
                                  <div className="d-flex justify-content-between align-items-center flex-wrap check-inputs-wrapper">
                                    <Field
                                      type="radio"
                                      name="gender"
                                      value="male"
                                      as={CFormCheck}
                                      id="flexRadioDefault1"
                                      label="Male"
                                    />
                                    <Field
                                      type="radio"
                                      name="gender"
                                      value="female"
                                      as={CFormCheck}
                                      id="flexRadioDefault2"
                                      label="Female"
                                      className="mx-2"
                                    />
                                    <Field
                                      type="radio"
                                      name="gender"
                                      value="prefer_not_to_say"
                                      as={CFormCheck}
                                      id="flexRadioDefault3"
                                      label="Prefer not to say"
                                    />
                                  </div>
                                  <div className="text-start">
                                    <ErrorMessage
                                      name="gender"
                                      component="div"
                                      className="error-msg"
                                    />
                                  </div>
                                </CCol>
                              </CRow>
                            </div>
                          </CCol>

                          <CCol lg={12} className="">
                            <div className="check-inputs-wrapper">
                              <Field
                                name="marketingConsent"
                                type="checkbox"
                                id="flexCheckDefault"
                                label="Send news & marketing email"
                                as={CFormCheck}
                                value="yes"
                              />
                            </div>
                          </CCol>
                          <CCol lg={12}>
                            <CButton
                              type="submit"
                              className="theme-primary-btn w-100 auth-btn mt-3"
                              disabled={isLoading}
                            >
                              {isLoading ? "Signing up..." : "Sign up"}
                            </CButton>
                          </CCol>
                        </CRow>
                      </CForm>

                      <div className="other-login-wrapper mt-2">
                        <p className="font-medium-family mb-3 fs-14 fw-400 text-center">
                          Or Continue With
                        </p>
                        <div className="social-links-wrapper text-center">
                          <Link href="#" className="social-link">
                            <Image
                              src={gIcon}
                              width={17}
                              height={17}
                              alt="icon"
                            />
                          </Link>
                          <Link href="#" className="social-link mx-3">
                            <Image
                              src={aIcon}
                              width={17}
                              height={17}
                              alt="icon"
                            />
                          </Link>
                          <Link href="#" className="social-link">
                            <Image
                              src={fbIcon}
                              width={17}
                              height={17}
                              alt="icon"
                            />
                          </Link>
                        </div>
                        <div className="text-center">
                          <p className="login-link-txt mt-4 mb-0">
                            Register as
                            <Link
                              href="/artist-register"
                              className="theme-color ms-1 "
                            >
                              Artist
                            </Link>
                          </p>
                        </div>
                        <p className="login-link-txt mt-0 mb-0">
                          Already have an account?{" "}
                          <Link href="/" className="theme-color">
                            Login Now
                          </Link>
                        </p>
                      </div>
                    </div>
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
          </CContainer>
        )}
      </Formik>
    </section>
  );
}

export default RegisterPage;
