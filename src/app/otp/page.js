"use client";
import "@/app/styles/auth/auth.css";
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CFormLabel,
  CRow,
} from "@coreui/react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useOtpVarifyMutation } from "@/app/redux/web/OtpApiSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

// Validation schema for email and OTP fields
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  otp: Yup.string()
    .matches(/^\d{6}$/, "OTP must be a 6-digit number") // Ensure OTP is 6 digits
    .required("OTP is required"),
});

const initialValues = {
  email: "",
  otp: "",
};

function OTP() {
  const [OtpVarify, { isLoading }] = useOtpVarifyMutation();
  const router = useRouter();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      // Convert OTP to string
      const data = { ...values, otp: String(values.otp) };

      const response = await OtpVarify(data).unwrap();
      if (response.result === "success") {
        toast.success(response?.message);
        resetForm();
        router.push("/reset-password");
      }
    } catch (error) {
      toast.error(
        error?.data?.message || "Failed to verify OTP. Please try again."
      );
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
          <form onSubmit={handleSubmit} className="h-100">
            <CContainer className="h-100">
              <CRow className="justify-content-center h-100 align-items-center">
                <CCol lg={9}>
                  <CRow className="align-items-center">
                    <CCol lg={6}>
                      <div className="auth-card">
                        <h2 className="auth-card-title font-bold-family mb-4 fs-26 fw-400">
                          Enter Your OTP & Email
                        </h2>

                        <div className="input-wrapper mb-3">
                          <CRow className="mb-2">
                            <CCol lg={12}>
                              <CFormLabel
                                htmlFor="email"
                                className="font-medium-family fs-16 fw-500 mb-2 d-inline-block"
                              >
                                Email
                              </CFormLabel>
                            </CCol>
                            <CCol lg={12}>
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
                            </CCol>
                          </CRow>
                        </div>

                        <div className="input-wrapper mb-3">
                          <CRow className="mb-2">
                            <CCol lg={12}>
                              <CFormLabel
                                htmlFor="otp"
                                className="font-medium-family fs-16 fw-500 mb-2 d-inline-block"
                              >
                                OTP
                              </CFormLabel>
                            </CCol>
                            <CCol lg={12}>
                              <Field
                                name="otp"
                                type="number"
                                placeholder="000000"
                                as={CFormInput}
                              />
                              <div className="text-start">
                                <ErrorMessage
                                  name="otp"
                                  component="div"
                                  className="error-msg"
                                />
                              </div>
                            </CCol>
                          </CRow>
                        </div>

                        <CButton
                          type="submit"
                          className="theme-primary-btn w-100 auth-btn mt-0"
                          disabled={isLoading}
                        >
                          {isLoading ? "Submitting" : "Submit"}
                        </CButton>
                      </div>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CContainer>
          </form>
        )}
      </Formik>
    </section>
  );
}

export default OTP;
