import "./home.css";
import { DashboardLayout } from "../components/Layout";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import "./coursesUploadPage.css";
import { fetchData } from "../func/awsFunctions";

//backend part to link with information

const COURSES_UPLOAD_PAGE_STYLES = {
  backgroundBox: {
    margin: "25px",
    height: "100%",
    backgroundColor: "lightgray",
    borderRadius: "10px",
    fontFamily: "lato",
  },
  className: {
    fontSize: "40px",
    paddingTop: "40px",
    margin: "40px",
    color: "rgb(35, 35, 35)",
  },
  divider: {
    width: "98%",
    height: "1px",
    backgroundColor: "rgb(132, 132, 132)",
    margin: "1%",
  },
  bottomHalf: {
    display: "flex",
    alignItems: "row",
  },
  infoSideBar: {
    width: "fit-content",
    display: "flex",
    flexDirection: "column",
    margin: "1vh",
    marginLeft: "5vh",
    fontSize: "15px",
  },
  backButton: {
    width: "fit-content",
    borderRadius: "20px",
    border: "1px solid rgb(71, 71, 71)",
    paddingLeft: "80px",
    paddingRight: "80px",
    paddingTop: "10px",
    paddingBottom: "10px",
    fontSize: "15px",
    marginTop: "1vh",
    cursor: "pointer",
    backgroundColor: "lightgray",
    fontFamily: "lato",
  },
  belowButton: {
    margin: "2vh",
  },
  subText: {
    marginLeft: "5vh",
  },
  interactiveCenter: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",
    margin: "10px",
    marginLeft: "7.5%",
  },
  uploadButton: {
    borderRadius: "17px",
    border: "1px solid rgb(71, 71, 71)",
    fontSize: "30px",
    paddingTop: "10px",
    paddingBottom: "10px",
    cursor: "pointer",
    backgroundColor: "lightgray",
    fontFamily: "lato",
  },
  dropAndDrag: {
    border: "1px solid rgb(71, 71, 71)",
    fontSize: "30px",
    textAlign: "center",
    width: "100%",
    height: "225px",
    cursor: "pointer",
    paddingTop: "25px",
  },
  rowStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "baseline",
  },
  checkBox: {
    width: "20px",
    height: "20px",
    border: "1px solid rgb(71, 71, 71)",
    borderRadius: "3px",
    cursor: "pointer",
    backgroundColor: "lightgray",
  },
  submitButton: {
    border: "1px solid rgb(71, 71, 71)",
    fontSize: "30px",
    paddingTop: "10px",
    paddingBottom: "10px",
    cursor: "pointer",
    backgroundColor: "lightgray",
    fontFamily: "lato",
    fontWeight: "lighter",
  },
};

const CoursesUploadPage = ({ prop1, prop2 }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get("courseId");

  useEffect(() => {
    // Fetch data using fetchData() function
    fetchData(courseId)
      .then((data) => {
        // Handle data response
        console.log(data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }, [courseId]);

  const handleFileInputChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleUpload = () => {
    if (selectedFiles.length === 0) {
      alert("Please select files to upload.");
      return;
    }
    setUploading(true);
    // Perform file upload logic
    // ...
    // After successful upload
    setSelectedFiles([]);
    setUploading(false);
    alert("Files uploaded successfully!");
  };

  //filled with dummy data, but the styles will be defined for future use
  return (
    <DashboardLayout>
      <div className={COURSES_UPLOAD_PAGE_STYLES.backgroundBox}>
        <div className={COURSES_UPLOAD_PAGE_STYLES.className}>
          Senior Project
        </div>
        <div className={COURSES_UPLOAD_PAGE_STYLES.divider}></div>
        <div className={COURSES_UPLOAD_PAGE_STYLES.bottomHalf}>
          <div className={COURSES_UPLOAD_PAGE_STYLES.infoSideBar}>
            <button className={COURSES_UPLOAD_PAGE_STYLES.backButton}>
              Back
            </button>
            <div className={COURSES_UPLOAD_PAGE_STYLES.belowButton}>
              What You Can Upload
            </div>
            <div className={COURSES_UPLOAD_PAGE_STYLES.subText}>
              <div>YOUR notes</div>
              <div>Non-copyright Materials</div>
              <div>Tests with the professor's permission</div>
              <div>Blank Homework with permission</div>
              <div>Links to related materials</div>
            </div>
          </div>
          <div className={COURSES_UPLOAD_PAGE_STYLES.interactiveCenter}>
            {/* For these backend can change the application? haha of course let us know if we need to change the styles */}
            <button
              className={COURSES_UPLOAD_PAGE_STYLES.uploadButton}
              onClick={handleUpload}
            >
              Upload Your Content Here
            </button>
            <div className={COURSES_UPLOAD_PAGE_STYLES.dropAndDrag}>
              Drag Here
            </div>
            <div className={COURSES_UPLOAD_PAGE_STYLES.rowStyle}>
              <button className={COURSES_UPLOAD_PAGE_STYLES.checkBox}></button>
              <div>
                I have read the terms and conditions of uploading files and
                agree to it
              </div>
            </div>
            <button className={COURSES_UPLOAD_PAGE_STYLES.submitButton}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

CoursesUploadPage.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number.isRequired,
};

export default CoursesUploadPage;
