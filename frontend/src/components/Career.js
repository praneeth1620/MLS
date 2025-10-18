import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Careers.css";

const Careers = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    residentialAddress: "",
    college: "",
    course: "",
    yearOfStudy: "",
    coverLetter: ""
  });

  const [cvFile, setCvFile] = useState(null);
  const [fileName, setFileName] = useState("No file chosen");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCvFile(file);
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!cvFile) {
      setMessage("Please select a CV before submitting.");
      setLoading(false);
      return;
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    data.append("cv", cvFile);

    try {
      const res = await axios.post("http://localhost:5000/career", data, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      console.log(res.data);
      setMessage("Application submitted successfully!");

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        residentialAddress: "",
        college: "",
        course: "",
        yearOfStudy: "",
        coverLetter: ""
      });
      setCvFile(null);
      setFileName("No file chosen");
    } catch (err) {
      console.error(err);
      setMessage("Error submitting application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="internship-container">
      <div className="form-wrapper">
        <h1 className="form-title">Internship Application</h1>
        <p className="form-subtitle">
          We are looking for talented and motivated students to join our team.
        </p>

        <form onSubmit={handleSubmit} className="application-form">
          {/* Personal Info */}
          <div className="form-section">
            <h2 className="section-title">Personal Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Residential Address</label>
                <input type="text" name="residentialAddress" value={formData.residentialAddress} onChange={handleChange} required />
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="form-section">
            <h2 className="section-title">Educational Qualifications</h2>
            <div className="form-row">
              <div className="form-group">
                <label>College/University</label>
                <input type="text" name="college" value={formData.college} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Course</label>
                <input type="text" name="course" value={formData.course} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Year of Study</label>
                <input type="text" name="yearOfStudy" value={formData.yearOfStudy} onChange={handleChange} required />
              </div>
            </div>
          </div>

          {/* Documents */}
          <div className="form-section">
            <h2 className="section-title">Documents</h2>
            <div className="form-group file-input-wrapper">
              <label className="file-input-label">
                {fileName === "No file chosen" ? "Upload CV / Resume" : "Change File"}
                <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
              </label>
              <span className="file-name">{fileName}</span>
            </div>
            <div className="form-group">
              <label>Cover Letter (Optional)</label>
              <textarea name="coverLetter" value={formData.coverLetter} onChange={handleChange} rows="6" />
            </div>
          </div>

          {message && <div className={`message ${message.includes("success") ? "success" : "error"}`}>{message}</div>}

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>

      {/* Back button at bottom-right */}
      <div className="back-button-container">
        <button type="button" className="back-btn" onClick={() => navigate("/")}>
          &larr; Back
        </button>
      </div>
    </div>
  );
};

export default Careers;
