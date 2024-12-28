"use client";
import "@/app/styles/auth/auth.css";
import {
  CButton,
  CCol,
  CContainer,
  CFormLabel,
  CRow,
  CFormInput,
} from "@coreui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useResetPasswordMutation } from "@/app/redux/web/ResetPasswordApiSlice";
import { toast } from "react-hot-toast";

//--- images
import pIcon from "@/app/assets/auth/eye-hide.svg";


function ResetPassword() {
  const [inputType, setInputType] = useState(false);
  const [ResetPassword, { isLoading }] = useResetPasswordMutation();

  const router = useRouter();

  // Validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    newPassword: Yup.string().required("New Password is required"),
  });

  const initialValues = {
    email: "",
    newPassword: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await ResetPassword(values).unwrap();
      if (response.result === "success") {
        toast.success(response?.message);
        resetForm();
        router.push("/login");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
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
                            name="newPassword"
                            type={inputType ? "text" : "password"}
                            placeholder="New Password"
                            as={CFormInput}
                          />
                          <div className="text-start">
                            <ErrorMessage
                              name="newPassword"
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
                        <CButton
                          type="submit"
                          className="theme-primary-btn w-100 auth-btn mt-5"
                          disabled={isLoading}
                        >
                          {isLoading ? "Reseting Password..." : "Reset Password"}
                        </CButton>
                      </Form>
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

export default ResetPassword;
