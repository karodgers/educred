// src/components/CertificateForm.js
import React, { useState } from 'react';
import api from '../services/api';

const CertificateForm = () => {
  const [studentName, setStudentName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [certificateID, setCertificateID] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const certificate = { studentName, courseName, certificateID };
    try {
      await api.submitCertificate(certificate);
      alert('Certificate submitted successfully!');
    } catch (error) {
      console.error('Error submitting certificate:', error);
      alert('Failed to submit certificate.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit Certificate</h2>
      <label>
        Student Name:
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
      </label>
      <label>
        Course Name:
        <input
          type="text"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
      </label>
      <label>
        Certificate ID:
        <input
          type="text"
          value={certificateID}
          onChange={(e) => setCertificateID(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CertificateForm;
