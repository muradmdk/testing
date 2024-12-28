"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  CButton,
  CCol,
  CRow,
  CFormSelect,
  CFormTextarea,
  CFormInput,
  CFormCheck,
} from "@coreui/react";
import Select from "react-select";
import Image from "next/image";
import albumSongUploadIcon from "@/app/assets/dashboard/uploadFile.svg";
import editIcon from "@/app/assets/dashboard/edit.svg";
import trashIcon from "@/app/assets/dashboard/trash.svg";
import plusIcon from "@/app/assets/dashboard/plus.svg";
import "@/app/styles/dashboard/edit-album/edit-album.css";
import "@/app/styles/dashboard/DashboardDefault/default.css";
import "@/app/styles/dashboard/songEditForm/songEditForm.css";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  useGetSubscriptionsQuery,
  useGetGenresQuery,
} from "@/app/redux/public/publicApiSlice";
import Link from "next/link";
import {
  useCreateTrackMutation,
  useGetAllAlbumsQuery,
} from "@/app/redux/artist/SongCrudApiSlice";

function CreateSong() {
  const [coverImage, setCoverImage] = useState(null);
  const [trackFile, setTrackFile] = useState(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const router = useRouter();
  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleDoneClick = () => {
    setIsEditable(false);
  };
  const [createTrack, { isLoading }] = useCreateTrackMutation();
  const { data: genres } = useGetGenresQuery();
  const { data: AllSubscriptions } = useGetSubscriptionsQuery();
  const { data: AllAlbums } = useGetAllAlbumsQuery();

  const initialValues = {
    song_name: "",
    album_id: "",
    song_description: "",
    subscription_level_id: "",
    publish_date: "",
    song_isrc: "",
    release_date: "",
    record_label: "",
    composer: "",
    featured: "",
    producer: "",
    mixing_engineer: "",
    mastering_engineer: "",
    cover_picture: null,
    permalink: "",
    track_file: null,
    genre_id: [],
  };

  const validationSchema = Yup.object({
    song_name: Yup.string().required("Song name is required!"),
    album_id: Yup.string().required("Album selection is required!"),
    song_description: Yup.string().required("Description is required!"),
    subscription_level_id: Yup.string().required(
      "Subscription level is required!"
    ),
    publish_date: Yup.date().required("Publish date is required!"),
    song_isrc: Yup.string().required("Song ISRC is required!"),
    release_date: Yup.date().required("Release date is required!"),
    record_label: Yup.string().required("Record label is required!"),
    composer: Yup.string().required("Composer is required!"),
    producer: Yup.string().required("Producer is required!"),
    featured: Yup.string().required("Featured is required!"),
    mixing_engineer: Yup.string().required("Mixing engineer is required!"),
    mastering_engineer: Yup.string().required(
      "Mastering engineer is required!"
    ),
    permalink: Yup.string().required("Permalink is required!"),
    cover_picture: Yup.mixed().required("Cover picture is required!"),
    track_file: Yup.mixed().required("Track MP3,.Wav file is required!"),
    genre_id: Yup.array()
      .min(1, "At least one genre must be selected!")
      .required("Genre/Tags are required!"),
  });

  const options = genres
    ? genres.map((genre) => ({ value: genre.id, label: genre.name }))
    : [];

  const handleTagChange = (options, setFieldValue) => {
    setSelectedOptions(options);
    setFieldValue("genre_id", options);
  };

  const handleFileChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    if (file) {
      setFieldValue("cover_picture", file);
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
      setFieldValue("cover_picture", file);
      const imageUrl = URL.createObjectURL(file);
      setCoverImage(imageUrl);
    }
  };

  const handleDelete = (setFieldValue) => {
    setFieldValue("cover_picture", null);
    document.getElementById("profile-cover").value = "";
    setCoverImage(null);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        const formData = new FormData();

        // Append all form fields to FormData
        formData.append("song_name", values.song_name);
        formData.append("album_id", values.album_id);
        formData.append("song_description", values.song_description);
        formData.append("subscription_level_id", values.subscription_level_id);
        formData.append("publish_date", values.publish_date);
        formData.append("song_isrc", values.song_isrc);
        formData.append("release_date", values.release_date);
        formData.append("record_label", values.record_label);
        formData.append("composer", values.composer);
        formData.append("featured", values.featured);
        formData.append("producer", values.producer);
        formData.append("mixing_engineer", values.mixing_engineer);
        formData.append("mastering_engineer", values.mastering_engineer);
        if (values.permalink) {
          formData.append(
            "permalink",
            `${process.env.NEXT_PUBLIC_IMG_BASE_URL}/${values.permalink}`
          );
        }

        // Append files
        if (values.cover_picture) {
          formData.append("cover_picture", values.cover_picture);
        }
        if (values.track_file) {
          formData.append("track_file", values.track_file);
        }

        // Append genres as array
        values.genre_id.forEach((genre) => {
          formData.append("genre_id[]", genre.value);
        });

        try {
          const response = await createTrack(formData).unwrap();
          if (response.result == "success") {
            toast.success(response?.message);
            resetForm();
            router.push("/dashboard/settings/profile");
          }
        } catch (error) {
          console.error("Error creating track:", error);
          toast.error("Failed to create track.");
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
                  name="cover_picture"
                  component="div"
                  className="text-danger"
                />

                <div className="upload-placeholder-wrapper position-relative mt-4">
                  {!trackFile ? (
                    <label htmlFor="track-file">
                      <div className="drag-drop-action-wrapper text-center">
                        <span>Upload Track File (MP3, WAV)</span>
                      </div>
                      <input
                        type="file"
                        id="track-file"
                        hidden
                        accept=".mp3, .wav"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            setFieldValue("track_file", file);
                            setTrackFile(file); // Update the state
                          }
                        }}
                      />
                    </label>
                  ) : (
                    <div className="uploaded-file-info">
                      <span>{trackFile.name}</span>
                      <div className="drag-drop-action-buttons">
                        <button
                          type="button"
                          onClick={() => {
                            setFieldValue("track_file", null);
                            setTrackFile(null); // Clear the file
                          }}
                        >
                          <Image
                            src={trashIcon}
                            width={20}
                            height={20}
                            alt="trash-icon"
                          />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <ErrorMessage
                  name="track_file"
                  component="div"
                  className="text-danger"
                />
              </div>
            </CCol>
            <CCol lg={9}>
              <div className="form-bg-wrapper">
                <CRow>
                  <CCol lg={6} className="mb-3">
                    <div className="grey-input-wrapper no-label">
                      <Field
                        type="text"
                        name="song_name"
                        placeholder="Song Name"
                        as={CFormInput}
                      />
                      <ErrorMessage
                        name="song_name"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </CCol>

                  <CCol lg={6} className="mb-3">
                    <div className="grey-input-wrapper no-label">
                      <Field name="album_id" as={CFormSelect}>
                        <option value="" disabled>
                          Select Album
                        </option>
                        {AllAlbums?.data?.length > 0 ? (
                          AllAlbums?.data?.map((album) => (
                            <option key={album?.id} value={album?.id}>
                              {album?.name}
                            </option>
                          ))
                        ) : (
                          <option disabled>No Album Available</option>
                        )}
                      </Field>
                      <ErrorMessage
                        name="album_id"
                        component="div"
                        className="text-danger"
                      />
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
                      <Field
                        name="song_description"
                        as={CFormTextarea}
                        rows={5}
                        placeholder="Song Description"
                      />
                    </div>
                    <ErrorMessage
                      name="song_description"
                      component="div"
                      className="text-danger"
                    />
                  </CCol>

                  <CCol lg={6} className="mb-3">
                    <div className="grey-input-wrapper no-label">
                      <Field name="subscription_level_id" as={CFormSelect}>
                        <option value="" disabled>
                          Subscription Level
                        </option>
                        {AllSubscriptions && AllSubscriptions.length > 0 ? (
                          AllSubscriptions.map((level) => (
                            <option key={level.id} value={level.id}>
                              {level.name}
                            </option>
                          ))
                        ) : (
                          <option disabled>No levels available</option>
                        )}
                      </Field>
                      <ErrorMessage
                        name="subscription_level_id"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </CCol>

                  <CCol lg={6} className="mb-4">
                    <div className="grey-input-wrapper custom-date-input no-label">
                      <Field type="date" name="publish_date" as={CFormInput} />
                    </div>
                    <ErrorMessage
                      name="publish_date"
                      component="div"
                      className="text-danger"
                    />
                  </CCol>
                  <CCol lg={6} className="mb-3">
                    <div className="grey-input-wrapper no-label">
                      <Field
                        type="text"
                        name="song_isrc"
                        placeholder="Song ISRC"
                        as={CFormInput}
                      />
                      <ErrorMessage
                        name="song_isrc"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </CCol>
                  <CCol lg={6} className="mb-4">
                    <div className="grey-input-wrapper custom-date-input no-label">
                      <Field type="date" name="release_date" as={CFormInput} />
                    </div>
                    <ErrorMessage
                      name="release_date"
                      component="div"
                      className="text-danger"
                    />
                  </CCol>

                  <CCol lg={12} className="mb-4">
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
                      name="genre_id"
                      component="div"
                      className="text-danger"
                    />
                  </CCol>
                  <CCol lg={4} className="mb-3">
                    <div className="grey-input-wrapper no-label">
                      <Field
                        type="text"
                        name="record_label"
                        placeholder="Record Label"
                        as={CFormInput}
                      />
                      <ErrorMessage
                        name="record_label"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </CCol>
                  <CCol lg={4} className="mb-3">
                    <div className="grey-input-wrapper no-label">
                      <Field
                        type="text"
                        name="producer"
                        placeholder="Producer"
                        as={CFormInput}
                      />
                      <ErrorMessage
                        name="producer"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </CCol>
                  <CCol lg={4} className="mb-3">
                    <div className="grey-input-wrapper no-label">
                      <Field
                        type="text"
                        name="composer"
                        placeholder="Composer"
                        as={CFormInput}
                      />
                      <ErrorMessage
                        name="composer"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </CCol>
                  <CCol lg={4} className="mb-3">
                    <div className="grey-input-wrapper no-label">
                      <Field
                        type="text"
                        name="featured"
                        placeholder="Featured"
                        as={CFormInput}
                      />
                      <ErrorMessage
                        name="featured"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </CCol>
                  <CCol lg={4} className="mb-3">
                    <div className="grey-input-wrapper no-label">
                      <Field
                        type="text"
                        name="mixing_engineer"
                        placeholder="Mixing Engineer"
                        as={CFormInput}
                      />
                      <ErrorMessage
                        name="mixing_engineer"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </CCol>
                  <CCol lg={4} className="mb-3">
                    <div className="grey-input-wrapper no-label">
                      <Field
                        type="text"
                        name="mastering_engineer"
                        placeholder="Mastering Engineer"
                        as={CFormInput}
                      />
                      <ErrorMessage
                        name="mastering_engineer"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </CCol>
                  <CCol lg={12}>
                    <div className="paramalink-input-wrapper mb-3">
                      <label className="d-block font-lato fs-18 fw-500">
                        Permalink
                      </label>
                      <div className="d-flex mt-2 paramlink-input-main position-relative">
                        <label className="font-lato">
                          {`${process.env.NEXT_PUBLIC_IMG_BASE_URL}/`}
                        </label>
                        <Field
                          type="text"
                          name="permalink"
                          placeholder="Permalink"
                          as={CFormInput}
                          readOnly={!isEditable} // Control read-only state
                          className={!isEditable ? "read-only-input" : ""}
                        />
                        {!isEditable ? (
                          <button type="button" onClick={handleEditClick}>
                            <Image
                              src={"/assets/dashboard/edit.svg"}
                              width={16}
                              height={16}
                              alt="Edit icon"
                            />
                          </button>
                        ) : (
                          <button type="button" onClick={handleDoneClick}>
                            Done
                          </button>
                        )}
                      </div>
                      <ErrorMessage
                        name="permalink"
                        component="div"
                        className="text-danger"
                      />
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

                  <CCol lg={12} className="mb-3">
                    <div className="d-flex">
                      <CFormCheck id="flexCheckDefault" />
                      <label
                        htmlFor="flexCheckDefault"
                        className="custom-label3 ms-3"
                      >
                        I confirm that I am the rightful owner of this song and
                        all associated rights, and I have full authority to
                        upload and distribute this content on this platform.
                      </label>
                    </div>
                  </CCol>
                  <CRow className="justify-content-center mt-4">
                    <CCol lg={6}>
                      <CButton
                        type="submit"
                        className="theme-primary-btn w-100 btn-dashboard"
                        disabled={isLoading}
                      >
                        {isLoading ? "Uploading..." : "Upload"}
                      </CButton>
                    </CCol>
                  </CRow>
                </CRow>
              </div>
            </CCol>
          </CRow>
        </Form>
      )}
    </Formik>
  );
}

export default CreateSong;
