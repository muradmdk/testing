"use client";
import "@/app/styles/auth/auth.css";
import {
  CButton,
  CCol,
  CContainer,
  CFormLabel,
  CRow,
  CFormInput
} from "@coreui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuth } from "../Context/authContext";
import { useRouter } from "next/navigation";

//--- images
import pIcon from "@/app/assets/auth/eye-hide.svg";
import fbIcon from "@/app/assets/auth/fb.svg";
import gIcon from "@/app/assets/auth/google.svg";
import aIcon from "@/app/assets/auth/apple.svg";

function LoginPage() {
  const [inputType, setInputType] = useState(false);
  const { login, users } = useAuth();
  const router = useRouter(); // Initialize useRouter

  // Validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    await login(values); // Await the login process
    resetForm();
    router.push('/'); // Navigate to the home page
  };

  return (
    <section className="login-wrapper">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <CContainer className="h-100">
            <CRow className="justify-content-center h-100 align-items-center">
              <CCol lg={9}>
                <CRow className="align-items-center">
                  <CCol lg={6}>
                    <div className="auth-card">
                      <h2 className="auth-card-title font-bold-family mb-4 fs-26 fw-400">
                        Login
                      </h2>
                      <Form onSubmit={handleSubmit}>
                        <div className="input-wrapper mb-3">
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
                        <div className="input-wrapper position-relative">
                          <CRow className="mb-2">
                            <CCol lg={12}>
                              <CFormLabel className="mb-0">Password</CFormLabel>
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
                        <div className="mt-2 text-end">
                          <Link
                            href={'/forget-password'}
                            className="font-medium-family form-link fs-14 fw-600"
                          >
                            Forgot Password?
                          </Link>
                        </div>
                        <Link href={"/web"}  className="theme-primary-btn w-100 auth-btn mt-5
                        " style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
                          Sign in
                        </Link>
                      </Form>
                      <div className="other-login-wrapper mt-3">
                        <p className="font-medium-family mb-4 fs-14 fw-400 text-center">
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
                        <p className="mt-3 fs-14 fw-400 text-center mb-0">
                          Don’t have an account yet?
                          <Link
                            href="/register"
                            className="font-lato fw-600 register-link fs-14 fs-700 ps-1"
                          >
                        
                             Register for free
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

export default LoginPage;
