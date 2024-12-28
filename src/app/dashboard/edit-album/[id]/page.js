"use client";
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  CButton,
  CCol,
  CFormLabel,
  CFormInput,
  CFormTextarea,
  CRow,
  CFormSelect,
} from "@coreui/react";
import "@/app/styles/dashboard/songEditForm/songEditForm.css";
import Image from "next/image";
import albumSongUploadIcon from "@/app/assets/dashboard/uploadFile.svg";
import "@/app/styles/dashboard/DashboardDefault/default.css";
import editIcon from "@/app/assets/dashboard/edit.svg";
import trashIcon from "@/app/assets/dashboard/trash.svg";
import {
  useUpdateAlbumMutation,
  useGetSubscriptionLevelQuery,
  useGetSingleAlbumQuery,
} from "@/app/redux/artist/CreateAlbumApiSlice";
import { toast } from "react-hot-toast";
import { useRouter, useParams } from "next/navigation";
import EditSongs from "@/app/dashboardComponents/EditSongs/EditSongs";

function CreateSong() {
  const [coverImage, setCoverImage] = useState(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [updateAlbum, { isLoading }] = useUpdateAlbumMutation();
  const { data: SubscriptionLevel } = useGetSubscriptionLevelQuery();
  const { id } = useParams();
  const { data: albumData, isLoading: isAlbumLoading , refetch  } =
    useGetSingleAlbumQuery(id);
  const router = useRouter();

  const validationSchema = Yup.object({
    name: Yup.string().required("Album name is required!"),
    description: Yup.string().required("Description is required!"),
    subscription_id: Yup.string().required("Subscription level is required!"),
    upc_ean_code: Yup.string().required("UPC/EAN code is required!"),
    published_date: Yup.date().required("Published date is required!"),
    release_date: Yup.date().required("Release date is required!"),
    cover_art_credit: Yup.string().required("Cover art credit is required!"),
    cover_art_path: Yup.mixed().required("Cover art is required!"),
  });

  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
    subscription_id: "",
    upc_ean_code: "",
    published_date: "",
    release_date: "",
    cover_art_credit: "",
    cover_art_path: null,
  });

  useEffect(() => {
    if (albumData?.result === "success" && albumData?.data?.album) {
      const album = albumData.data.album;
      setInitialValues({
        name: album.name || "",
        description: album.description || "",
        subscription_id: album.subscription_id || "",
        upc_ean_code: album.upc_ean_code || "",
        published_date: album.published_date?.split("T")[0] || "",
        release_date: album.release_date?.split("T")[0] || "",
        cover_art_credit: album.cover_art_credit || "",
        cover_art_path: album.cover_art_path || null,
      });
      if (album.cover_art_path) {
        setCoverImage(
          `${process.env.NEXT_PUBLIC_IMG_BASE_URL}/${album.cover_art_path}`
        );
      }
    }
  }, [albumData]);

  useEffect(() => {
    refetch();
  },[refetch])

  const handleFileChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    if (file) {
      setFieldValue("cover_art_path", file);
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
      setFieldValue("cover_art_path", file);
      const imageUrl = URL.createObjectURL(file);
      setCoverImage(imageUrl);
    }
  };

  const handleDelete = (setFieldValue) => {
    setFieldValue("cover_art_path", null);
    document.getElementById("profile-cover").value = ""; // Clear file input
    setCoverImage(null);
  };

  if (isAlbumLoading) return <p>Loading...</p>;
  return (
    <section className="create-song-wrapper">
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          const formData = new FormData();
          formData.append("id",id);
          Object.keys(values).forEach((key) => {
            if (key === "cover_art_path" && values[key]) {
              formData.append(key, values[key]);
            } else {
              formData.append(key, values[key]);
            }
          });
          try {
            const response = await updateAlbum(formData).unwrap();
            if (response.result === "success") {
              toast.success(response?.message);
              resetForm();
              setCoverImage(null);
              router.push("/dashboard/settings/profile");
            }
          } catch (error) {
            toast.error(error?.data?.message);
          }
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <CRow>
              <CCol lg={3} className="mb-4 mb-lg-0">
                <div className="uploading-wrapper">
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
                  <ErrorMessage
                    name="cover_art_path"
                    component="div"
                    className="text-danger"
                  />
                  <div className="grey-input-wrapper no-label mt-3">
                    <Field
                      type="text"
                      name="cover_art_credit"
                      placeholder="Cover Art Credit ( Artist Name )"
                      as={CFormInput}
                    />
                    <ErrorMessage
                      name="cover_art_credit"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
              </CCol>
              <CCol lg={9}>
                <div className="form-bg-wrapper">
                  <CRow>
                    <div className="page-title-wrapper mb-4">
                      <h3 className="mb-0">Edit Your Album Details</h3>
                    </div>
                    <CCol lg={6} className="mb-3">
                      <div className="grey-input-wrapper no-label">
                        <Field
                          type="text"
                          name="name"
                          placeholder="Album Name"
                          as={CFormInput}
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </CCol>
                    <CCol lg={6} className="mb-3">
                      <div className="grey-input-wrapper no-label">
                        <Field name="subscription_id" as={CFormSelect}>
                          <option value="" disabled>
                            Subscription Level
                          </option>
                          {SubscriptionLevel && SubscriptionLevel.length > 0 ? (
                            SubscriptionLevel.map((level) => (
                              <option key={level.id} value={level.id}>
                                {level.name}
                              </option>
                            ))
                          ) : (
                            <option disabled>No levels available</option>
                          )}
                        </Field>
                        <ErrorMessage
                          name="subscription_id"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </CCol>
                    <CCol lg={12} className="mb-4">
                      <div className="grey-input-wrapper no-label">
                        <Field
                          name="description"
                          as={CFormTextarea}
                          rows={5}
                          placeholder="Album Description"
                        ></Field>
                        <ErrorMessage
                          name="description"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </CCol>
                    <CCol lg={6} className="mb-4">
                      <div className="grey-input-wrapper no-label">
                        <Field
                          type="text"
                          name="upc_ean_code"
                          placeholder="Album UPC/EAN Code"
                          as={CFormInput}
                        />
                        <ErrorMessage
                          name="upc_ean_code"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </CCol>
                    <CCol lg={6} className="mb-4">
                      <div className="grey-input-wrapper custom-date-input no-label">
                        <Field
                          type="date"
                          name="published_date"
                          as={CFormInput}
                        />
                        <ErrorMessage
                          name="published_date"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </CCol>
                    <CCol lg={6} className="mb-4">
                      <div className="grey-input-wrapper custom-date-input no-label">
                        <Field
                          type="date"
                          name="release_date"
                          as={CFormInput}
                        />
                        <ErrorMessage
                          name="release_date"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </CCol>
                    <CRow className="justify-content-center mt-4">
                      <CCol lg={6}>
                        <CButton
                          type="submit"
                          className="theme-primary-btn w-100 auth-btn mt-3"
                          disabled={isLoading}
                          style={{ padding: "11px 0px" }}
                        >
                          {isLoading ? "Updating Album..." : "Update Album"}
                        </CButton>
                      </CCol>
                    </CRow>
                  </CRow>
                </div>
                <div className="form-bg-wrapper mt-4">
                  <EditSongs AvailableAlbumSong={albumData?.data?.tracksData} />
                </div>
              </CCol>
            </CRow>
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default CreateSong;
